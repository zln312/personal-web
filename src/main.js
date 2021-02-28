/*
 * @Author: your name
 * @Date: 2021-01-17 19:05:44
 * @LastEditTime: 2021-02-28 21:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\main.js
 */
import Vue from 'vue'
import {Button, Menu, MenuItem, Submenu, Breadcrumb, BreadcrumbItem} from 'element-ui'
import App from './App.vue'
import router from './routes/index'
import http from './utils/http'
import api from './utils/api'
import './assets/style/reset.css'
import moment from "moment"
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.prototype.$http = http;
Vue.prototype.$api = api;
Vue.filter("dateFmt",(input, formatString = "YYYY-MM-DD HH:mm:ss")=>{
    return moment(input).format(formatString)
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
