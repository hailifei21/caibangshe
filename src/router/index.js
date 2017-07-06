//index.js 进行加载
//定义路由模块
//加载Vue 
import Vue from 'vue'

//加载路由
import VueRouter from 'vue-router'

//使用路由
Vue.use(VueRouter)

//加载路由对应的组件
import Index from '../components/Index.vue'
import Topic from '../components/Topic.vue'
import Reg from '../components/Reg.vue'
import Vuejs from '../components/Vuejs.vue'
import Cai from '../components/Cai.vue'
import API from '../components/API.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'

//定义路由
export default new VueRouter({
	routes:[
		{
			path:'/',
			name:'index',
			component : Index
		},
		{
	    	path: '/topic/*',
	    	name: 'topic',
	    	component: Topic
   		},
		{
			path : '/vue-js',
			name : 'vue-js',
			component : Vuejs
		},
		{
			path : '/cai',
			name : 'cai',
			component : Cai
		},
		{
			path : '/api',
			name : 'api',
			component :API
		},
		{
			path : '/about',
			name : 'about',
			component :About
		},
   		{
	    	path: '/reg',
	    	name: 'reg',
	    	component: Reg
   		},
   		{
	    	path: '/login',
	    	name: 'login',
	    	component: Login
   		},
		//当以上路由都不匹配是，加载该路由
		{
			path:'/*',
			redirect:'/index'
		}
	]
})