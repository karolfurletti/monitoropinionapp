import axios from "axios"

const REACT_APP_IP_API = 'https://monitoropinionapi-rfhk7.ondigitalocean.app'
const api = axios.create({
  baseURL: "https://monitoropinionapi-rfhk7.ondigitalocean.app"
})

export const configHeaders = (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  }
  return config
}

export const config = {
  optionsHeader: {
    accept: "application/json",
    "content-type": "application/json"
  },
  base_url: REACT_APP_IP_API
}

/**
 * creating a axios instace to be used in futures requests
 * @type {AxiosInstance}
 */

export const serviceApi = axios.create({
  baseURL: config.base_url,
  timeout: 25000,
  headers: config.optionsHeader
})

export default api
