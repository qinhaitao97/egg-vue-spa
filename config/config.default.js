'use strict'

const path = require('path')
const fs = require('fs')

module.exports = app => {
  const exports = {}

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  }

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  }

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  }

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  }

  // use for cookie sign key
  exports.keys = '123456'

  exports.middleware = []

  exports.security = {
    csrf: {
      enable: false,
      ignoreJSON: false,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
      headerName: 'x-csrf-token'
    },
    xframe: {
      enable: false,
    },
  }

  return exports
}