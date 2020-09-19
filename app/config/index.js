import axios from 'axios'
import { GetToken } from '../utils'
const env = process.env
const Client = axios.create({
  baseURL: (function () {
    switch (env.NODE_ENV) {
      case 'production':
        return env.API_URL_PRODUCTION
      default:
        return env.API_URL_DEV
    }
  })()
})

Client.interceptors.request.use(
  async (config) => {
    const token = GetToken('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export default Client
