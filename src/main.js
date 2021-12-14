import Vue from 'vue'
import App from './App.vue'

import './httpClient'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
