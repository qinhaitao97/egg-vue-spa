'use strict'

module.exports = app => {
  const { router, controller } = app

  // 获取测试数据
  router.get('/test', controller.test.list)

  // mock 数据
  // 获取测试数据
  router.get('/mock/test', controller.mock.test.list)

  // 客户端渲染
  router.get('(/.+)?', controller.app.client)
}