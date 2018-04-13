import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/business-casual.css'
import './assets/css/business-casual.min.css'
import './assets/css/agency.css'
import './assets/css/agency.min.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')