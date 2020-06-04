import Vue from 'vue'
import App from './App.vue'
import routes from './router/routes'
import store from './store/store'
Vue.config.productionTip = false

new Vue({
  router:routes,
  store:store,
  render: h => h(App)
}).$mount('#app')
