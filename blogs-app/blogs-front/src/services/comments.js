import axios from 'axios'

const createUrlForBlog = blog => `/api/blogs/${blog.id}/comments`

const getCommentsForBlog = async blog => {
  const result = await axios.get(createUrlForBlog(blog))
  return result.data
}


export default {
  getCommentsForBlog
} 