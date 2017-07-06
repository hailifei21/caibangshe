<template>
	<header class="header">
		 <nav class="navbar navbar-default" id="nav">
             <div class="container-fluid">
                 <div class="navbar-header">
                     <div class="rows">
                         <div class="col-md-3 col-xs-12">
                             <div class="navbar-brand" style="padding:10px 0 0 91px;">
                                 <img src="../assets/imgs/logo.png" alt="">
                                 <span>vue.js</span>
                             </div>
                         </div>
                         <div class="col-md-3 col-xs-12">
                             <div class="navbar-brand input-group">
                                 <span class="input-group-addon">
                                     <span class="glyphicon glyphicon-search"></span>
                                 </span>
                                 <input type="text" class="form-control" >
                                 <span class="input-group-addon"></span>
                             </div>
                         </div>
                         <div class="col-md-5 col-md-offset-1 col-xs-12">                      
                            <ul class="nava">
                            	<li><router-link to="/" class="navbar-brand">首页</router-link></li>
                            	<!-- <li><router-link to="/vue-js" class="navbar-brand">VUE 2.0</router-link></li> -->
                            	<li><router-link to="/cai" class="navbar-brand">参考资料</router-link></li>
                            	<li><router-link to="/api" class="navbar-brand">API</router-link></li>
                            	<li><router-link to="/about" class="navbar-brand">关于</router-link></li>
                            	<!-- <li><router-link to="/reg" class="navbar-brand">注册</router-link></li> -->
                            	<li><router-link to="/login" class="navbar-brand">登录</router-link></li>
                            </ul>
                            <!--  <a class="navbar-brand" href="#">VUE 2.0</a>
                            <a class="navbar-brand" href="#">参考资料</a>
                            <a class="navbar-brand" href="#">API</a>
                            <a class="navbar-brand" href="#">关于</a>
                            <a class="navbar-brand" href="#">注册</a>
                            <a class="navbar-brand" href="#">登录</a> -->
                         </div>
                     </div>
                 </div>
             </div>
         </nav>
	</header>
</template>

<script>
export default {
	name: 'header',
	data () {
		return {

		}
	}
}	

</script>
<style >
	body{
    	background:#E1E1E1;
    }
	.navbar{
		background:#1c6132;
		padding:0;
		margin-bottom:10px;
	}
	.navbar-brand.input-group>span{
		width:1.4375rem;
		height:1.4375rem;
		padding:0px;
		border-radius:12px 0 0 12px;
		/*line-height:23px;*/
		text-align:center;
	}
	.navbar-brand.input-group>span:last-child{
		border-radius:0 12px 12px 0;
	}
	.navbar-brand.input-group input{
		height: 1.8rem;
		
	}
	.navbar .navbar-brand{
		color:#FFF;
		padding: 15px 9px;
	}
	.navbar-brand img{
		width:2.8125rem;
		height:2.8125rem;
		display:inline-block;
	}
	.col-md-5 a{
		font-size:0.75rem;
	}
	@media screen and (min-width:960px){
	    .main{margin:0 50px}
	}
	@media only screen and (max-width: 960px) {
	    .main{margin:0}
	}
	#nav .navbar-brand{
		margin-left:4px;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  display: inline-block;
	  margin: 5px 3px;
	  float:left;
	}

</style>
