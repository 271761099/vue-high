import Vue from 'vue'

import app from './app.vue'

import VueRouter from 'vue-router'

import axios from 'axios'

Vue.prototype.$http = axios

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.use(VueRouter)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import router from './router.js'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header)


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
}).$mount("#app")