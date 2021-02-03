/*
 * @Author: your name
 * @Date: 2021-01-17 19:05:44
 * @LastEditTime: 2021-02-03 23:44:20
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

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.prototype.$http = http;
Vue.prototype.$api = api;



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
