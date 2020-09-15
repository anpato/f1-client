import axios from 'axios'
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

export default Client
