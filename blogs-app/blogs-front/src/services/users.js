import axios from 'axios'

const baseUrl = '/api/users'

const getAll = async () => {
  const results = await axios.get(baseUrl)
  return results.data
}



export default {
  getAll
}