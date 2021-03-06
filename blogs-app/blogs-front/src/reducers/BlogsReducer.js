import blogsService from '../services/blogs'
import commentService from '../services/comments'

const sortBlogs = (toBeSorted) =>  toBeSorted.slice().sort((blogA, blogB) => blogB.likes - blogA.likes)


const BlogsReducer = (state=[], action) => {
  switch(action.type){
    case 'CREATE_BLOG':
      return sortBlogs(state.concat(action.data))
    case 'CREATE_BLOGS':
      return sortBlogs(state.concat(action.data))
    case 'UPDATE_BLOG':
      return sortBlogs(state.map(
        blog => (blog.id === action.data.id)
        ? action.data
        : blog))
    case 'DELETE_BLOG':
        return sortBlogs(state.filter(
          blog => blog.id !== action.data
        ))
    default:
      return state
  }
}

export const createBlog = (data) => {
  return  async dispatch =>
  {
    const newBlog = await blogsService.create(data)
    dispatch({
    type: 'CREATE_BLOG',
    data: newBlog
  })
  }
}

const createBlogs = (data) => {
  return {
    type: 'CREATE_BLOGS',
    data
  }
}

const updateBlog = (blog) => {
  return {
    type: 'UPDATE_BLOG',
    data: blog
  }
}

const createDeletionOfBlog = (blog) => {
  return {
    type: 'DELETE_BLOG',
    data: blog.id
  }
}

export const deleteBlog = (blog) => {
  return async dispatch => {
    if(!window.confirm(`remove blog ${blog.title} by ${blog.author}`)){
      return
    }

    await blogsService.removeBlog(blog)
    dispatch(createDeletionOfBlog(blog))
  }
}

export const likeBlog = (blog) => {
  return async (dispatch) => {
    blog = { ...blog, likes: blog.likes + 1 }
    const result = await blogsService.updateBlog(blog)
    dispatch(updateBlog(blog))
  }
}

export const setInitialBlogs = () => {
  return async dispatch => {
    const blogs = await blogsService.getAll()
    dispatch(createBlogs(blogs))
  }
}


export const fetchCommentsForBlog = (blog) => async dispatch => {
  const comments = await commentService.getCommentsForBlog(blog)
  const newBlog = { ...blog, comments: comments }
  dispatch(updateBlog(newBlog))
}

export const addCommentForBlog = (blog, content) => async dispatch => {
  const added = await commentService.createCommentForBlog(blog, content)
  const newBlog = { ...blog, comments: [added].concat(blog.comments) }
  dispatch(updateBlog(newBlog))
}


export default BlogsReducer