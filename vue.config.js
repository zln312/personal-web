/*
 * @Author: your name
 * @Date: 2021-02-03 22:29:46
 * @LastEditTime: 2021-02-20 21:25:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\vue.config.js
 */
 module.exports = {
   devServer: {
     proxy: {
       //配置跨域
       '/api':{
         target:'http://150.158.190.157:8081',
         ws:true,
         changeOrigin:true,
         pathRewrite: {
           '^/api':''
         }
       }
     }
   },
  //  css: {
  //    loaderOptions: {
  //      sass: {
  //        additionalData: `@import "~@/assets/scss/index.scss"`
  //      }
  //    }
  //  }
 }
