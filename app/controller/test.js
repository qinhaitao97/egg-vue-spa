'use strict'

const Controller = require('egg').Controller

class TestController extends Controller {
  list() {
    const { ctx } = this
    const statusCode = ctx.query.statusCode * 1

    if (statusCode === 200) {
      ctx.helper.successRes({ ctx, data: { data: 'mock 数据' } })
    } else if (statusCode === 401) {
      ctx.helper.failRes({ ctx, message: '请先登录', statusCode })
    } else if (statusCode >= 500) {
      ctx.helper.failRes({ ctx, message: '服务器内部错误', statusCode })
    } else {
      ctx.helper.failRes({ ctx, message: '异常请求' })
    }
  }
}

module.exports = TestController