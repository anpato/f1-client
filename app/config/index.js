import axios from 'axios'

const Client = axios.create({
  baseURL: 'localhost:3001/api'
})

export default Client
