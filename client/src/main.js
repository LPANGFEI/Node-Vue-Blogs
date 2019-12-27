import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './utils/http'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import isEmpty from './utils/isEmpty'
Vue.prototype.$isEmpty = isEmpty

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
