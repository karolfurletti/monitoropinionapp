import axios from 'axios'

const api = axios.create({
  baseURL: 'https://monitoropinionapi.herokuapp.com'
})

export default api
