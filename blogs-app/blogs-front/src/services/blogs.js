
import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const removeBlog = async (delBlog) => {
  const result = await axios.delete(`${baseUrl}/${delBlog.id}`, {
    headers: { Authorization: token }
  })
  return result
}

const updateBlog = async  (updatedBlog) => {
  const result = await axios.put(`${baseUrl}/${updatedBlog.id}`, updatedBlog)
  return result.data
}

const create = async (blog) => {
  const result = await axios.post(baseUrl, blog, {
    headers: { Authorization: token }
  })
  return result.data
}
export default { getAll, setToken, create, updateBlog, removeBlog }