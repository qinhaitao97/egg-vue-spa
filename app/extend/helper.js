/**
 * 扩展工具方法
 */
'use strict'

const helper = {}

/** 请求成功响应 */
helper.successRes = ({ ctx, data = {}, statusCode = 200, message = 'OK' }) => {
  ctx.status = statusCode
  ctx.body = {
    success: true,
    message,
    data
  }
}

/** 请求失败响应 */
helper.failRes = ({ ctx, data = null, statusCode = 400, message = 'Request Error' }) => {
  ctx.status = statusCode
  ctx.body = {
    success: false,
    message,
    data
  }
}

module.exports = helper