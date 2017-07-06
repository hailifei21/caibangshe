<template>
  <div id="app">
      <!-- 公共导航组件 -->
      <d-header></d-header>          
      <router-view></router-view>
       <!-- 公共底部组件 -->
      <!-- <d-footer></d-footer> -->
  </div>
</template>

<script>
// 引入
import dHeader from './components/header.vue'
// import dFooter from './components/footer.vue'

export default {
  name: 'app',
  // 注册组件
  components:{
    dHeader,
    // dFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
} 
</script>

<style>
  #app{
    height:10.625rem;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #333;
  }
</style>
