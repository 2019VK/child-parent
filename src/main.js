import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  // 在原型链上绑定bus
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
