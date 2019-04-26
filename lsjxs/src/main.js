// The Vue build version to load with the `import` command // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick'
import './assets/config/rem.js'
import './assets/styles/reset.css'

Vue.config.productionTip = false/* eslint-disable no-new */
Vue.prototype.$axios = axios
FastClick.attach(document.body)
FastClick.prototype.onTouchEnd = function(event) {
    if(event.target.hasAttribute("type") && event.target.getAttribute("type") == "text") {
        event.preventDefault();　　　
        return false;　　
    }
}

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})


