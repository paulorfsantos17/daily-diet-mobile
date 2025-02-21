import { storageAuthTokenGet } from '@/storage/storageAuthToken'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.100:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  async (config) => {
    const token = await storageAuthTokenGet()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
