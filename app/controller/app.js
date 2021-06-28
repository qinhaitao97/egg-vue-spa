'use strict'
const egg = require('egg')
module.exports = class AppController extends egg.Controller {
  async client(ctx) {
    const url = ctx.url
    await ctx.renderClient('index.js', { ctx, url })
  }
}