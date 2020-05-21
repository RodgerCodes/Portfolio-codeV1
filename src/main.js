import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'



Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

