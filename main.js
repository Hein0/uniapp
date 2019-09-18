import Vue from 'vue'
import App from './App'
// import Tools from '/static/js/tools.js'


Vue.config.productionTip = false
// Vue.prototype.$Tools = Tools
Vue.prototype.version = '1.0.1'
App.mpType = 'app'
console.log(process)

const app = new Vue({
    ...App
})
app.$mount()
