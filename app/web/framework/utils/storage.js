/**
 * storage 二次封装
 */
 'use strict'

 import config from 'framework/config'

 export default {
   /** 读取 storage
    * @param {String} type local or session
    */
   getStorage(type = 'local') {
     const storage = type === 'local' ?
       JSON.parse(window.localStorage.getItem([config.namespace]) || "{}") :
       JSON.parse(window.sessionStorage.getItem([config.namespace]) || "{}")

     return storage
   },

   /** 读取 storage 某项值
    * @param {String} type
    * @param {String} key
    */
   getItem(key, type = 'local') {
     return this.getStorage(type)[key]
   },

   /** 设置 storage
    * @param {String} key
    * @param {String} val
    * @param {String} type storage类型
    */
   setItem(key, val, type = 'local') {
     const storageType = type === 'local' ? 'localStorage' : 'sessionStorage'
     const storage = JSON.parse(window[storageType].getItem(config.namespace) || "{}")

     storage[key] = val
     window[storageType].setItem(config.namespace, JSON.stringify(storage))
     return storage
   },

   /** 清除 storage 某项值
    * @param {String} key
    * @param {String} type
    */
   clearItem(key, type = 'local') {
     const storageType = type === 'local' ? 'localStorage' : 'sessionStorage'
     const storage = this.getStorage(type)

     delete storage[key]
     window[storageType].setItem(config.namespace, JSON.stringify(storage))
     return storage
   },

   /** 清空 storage
    * @param {String} type
    */
   clearAll(type = 'local') {
     const storageType = type === 'local' ? 'localStorage' : 'sessionStorage'

     window[storageType].clear()
     return null
   },
 }