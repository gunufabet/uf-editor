import axios from 'axios'

const app_url = import.meta.env.VITE_API_URL

export const httpService = axios.create({
  baseURL: app_url,
  timeout: 0,
})
