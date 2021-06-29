/**
 * 常用工具方法
 */
 'use strict'

 /** 检查传入值是否是数字
  * @param {String}
  */
 export const isNumber = val => {
   // 这里不能用 '=='，因为 0 == ''
   if (val === '' || val === null) return false
   return !isNaN(val)
 }