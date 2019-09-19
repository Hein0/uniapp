import Vue from 'vue'
import App from './App'
import hdBar from './components/headertopBar.vue'  //头部组件
// import Tools from '/static/js/tools.js'

Vue.component('hdBar',hdBar);
Vue.config.productionTip = false
// Vue.prototype.$Tools = Tools
Vue.prototype.version = '1.0.1'
App.mpType = 'app'
console.log(process)

const app = new Vue({
    ...App
})
app.$mount()
