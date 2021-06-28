'use strict'

import axios from 'axios'
import router from 'page/app/router'

// axios 实例
const instance = axios.create({
  timeout: 5000,
  xsrfHeaderName: 'X-XSRF-TOKEN',
  xsrfCookieName: 'XSRF-TOKEN',
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
  validateStatus: status => status >= 200 && status < 500,
})

// 请求拦截
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (!token) return config

  const authorization = `Bearer ${token}`
  config.headers.common.Authorization = authorization
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(
  response => {
    const responseStatus = response.status

    if (responseStatus === 401) {
      router.replace({ name: 'Error401' }).then(() => {})
    }

    return response
  },
  error => {
    router.push({ name: 'Error5xx', replace: true }).then(() => {})
    return  { data: { success: false, message: `服务器内部错误 ${error + ''}` } }
  }
)

export default instance