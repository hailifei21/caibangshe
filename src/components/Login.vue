<template>
	<div id="content" class="container">
		<div class="panel" >
			<div class="list-group">
				<div class="list-group-item" style="background:#F6F6F6" id="tiao">
					<span id="zy"><a href="/">主页</a></span>
					<span class="divider">/</span>
					<span class="active">登录</span>
        		</div>
				<div class="list-group-item" style="text-align:center">
					<form id="signin_form" class="form-horizontal" action="/signin" method="post" style="margin:3.125rem">
						<!-- <div>
							<span style="margin-left:-1.125rem">
								 <label class="control-label" for="name">用户名</label>
								<input class="input-xlarge" id="name" name="name" size="30" type="text">
							</span>
						</div> -->
						<div>
							<span>
								<label class="control-label" for="pass">accessToken</label>
								<input class="input-xlarge" id="pass" name="pass" size="30" type="password">
							</span>
						</div>
        				<div class="form-actions" style="margin-top:1.25rem;margin-left:0.1875rem">
          					<button class="btn btn-info btn-sm" style="margin-top:0.625rem">登录</button>
          					<a href="/auth/github">
            					<button class="btn btn-info btn-sm" style="margin-top:0.625rem">通过 GitHub 登录</button>
          					</a>
          			    	<a id="forgot_password" href="/search_pass" style="margin-top:0.9375rem">忘记密码了?
          			    	</a>
        				</div>
				    </form>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	#zy>a{
		color:green;
	}
	#forgot_password{
		color:black;
		font-size:0.5625rem;
	}
</style>
<script>
	
</script>