import Axios from 'axios'

export const baseURL = 'https://api.desamargamulya.com/'
// export const baseURL = 'http://localhost:5500'

const axiosInstance = Axios.create({
  baseURL,
})

export default axiosInstance
