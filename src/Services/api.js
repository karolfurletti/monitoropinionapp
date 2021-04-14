import axios from "axios"

const REACT_APP_IP_API = 'http://api.monitoropinion.com'
const api = axios.create({
  baseURL: "http://api.monitoropinion.com"
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
