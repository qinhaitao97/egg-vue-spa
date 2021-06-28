'use strict'

import axios from './request'

// node 执行环境
const env = process.env.NODE_ENV || 'prod'
const prefixURL = env === 'dev' ? '/mock' : ''

// 测试类接口
const testApi = {
  // 请求基础路径
  baseURL: '/test',
  // 增加请求环境前缀的路径
  baseApi() {
    return prefixURL + this.baseURL
  },
  // 获取测试数据
  getTest(params) {
    return axios.get(this.baseApi(), { params })
  },
}

// 合并所有类别请求
const api = Object.assign({}, testApi)

export default api