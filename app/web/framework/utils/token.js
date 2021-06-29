/** 封装 token 操作
 * @user qinhaitao
 */
 'use strict'

 import storage from './storage'

 export default {
   getToken() {
     return storage.getItem('token')
   },

   hasToken() {
     const token = storage.getItem('token')
     return (token === '') || (token === undefined) ? false : true
   },

   /** 设置 token
    * @param {String} token
    */
   setToken(token) {
     storage.setItem('token', token)
   },

   /**　清除 token */
   clearToken() {
     storage.clearItem('token')
   },
 }