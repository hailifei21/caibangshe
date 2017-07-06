import Vue from 'vue'
import App from './App.vue'

//加载路由
import router from './router'

//加载axios
import axios from 'axios'
//引入elejs
//import ElementUI from 'element-ui'

//引入ele css
//import 'element-ui/lib/theme-default/index.css'
// 设置axios配置项
var $http = axios.create({
   baseURL : 'https://www.vue-js.com/api/v1'
});
//为了操作方便，将axios挂载到Vue的原型上
Vue.prototype.$http = $http

//ele JS需要use
//Vue.use(ElementUI)

new Vue({
  el: '#app',

  router,
  //组件

  components :{
  	app:App
  },

 // render: h => h(App)
})
