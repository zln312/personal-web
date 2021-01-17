import Vue from 'vue'
import {Button,Menu,MenuItem,Submenu} from 'element-ui'
import App from './App.vue'
import router from './routes/index'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
