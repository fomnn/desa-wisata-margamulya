import axios from 'axios'

const baseURL = 'https://api.desamargamulya.com/'
// const baseURL = 'http://localhost:5500'

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
})

export { axiosInstance, baseURL }
