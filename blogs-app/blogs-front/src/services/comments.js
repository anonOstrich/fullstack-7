import axios from 'axios'

const createUrlForBlog = blog => `/api/blogs/${!blog.id ? blog : blog.id}/comments`

const getCommentsForBlog = async blog => {
  const result = await axios.get(createUrlForBlog(blog))
  return result.data
}

const createCommentForBlog = async (blog, content) => {
  const result = await axios.post(createUrlForBlog(blog), { content })
  return result.data
}


export default {
  getCommentsForBlog,
  createCommentForBlog
}