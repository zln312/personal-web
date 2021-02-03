/*
 * @Author: your name
 * @Date: 2021-02-03 22:29:46
 * @LastEditTime: 2021-02-03 22:38:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\vue.config.js
 */

 module.exports = {
   devServer: {
     proxy: {
       //配置跨域
       '/api':{
         target:'http://150.158.190.157:8080',
         ws:true,
         changeOrigin:true,
         pathRewrite: {
           '^/api':''
         }
       }
     }
   }
 }
