import axios from 'axios'

export const axioApi = axios.create({
  baseURL: 'http://localhost:3333',
})
