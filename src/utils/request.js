import axios from 'axios'
// import router from '@/router'

const request = axios.create()

// 请求拦截器

request.interceptors.request.use((req) => {
  return req
})

// 响应拦截器

request.interceptors.response.use((res) => {
  return res
})

export default request
