<template>
	<div id="content">
		<div class="panel" >
			<div class="list-group">
				<div class="list-group-item" style="background:#F6F6F6" id="tiao">
					<span id="zy"><a href="/">主页</a></span>
					<span class="divider">/</span>
					<span class="active" style="color:#999999">API</span>
        		</div>
        		<div class="clear"></div>
        		<div class="list-group-item">
        			<h3 style="font-weight:bold;margin:0.625rem 0">主题</h3>
        			<hr>			
        			<h4 style="font-weight:bold;">get /topics 主题首页
        			</h4>
        			<hr>
        			<p>接收get参数</p>
        			<ul style="height:3.125rem;">
						<li>page <code>Number</code> 页数</li>
						<li>tab <code>String</code> 主题分类</li>
						<li>limit <code>Number</code> 每一页的主题数量</li>
						<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code></li>
					</ul>
					<p>示例：<a>/api/v1/topics</a></p>	
					<h4 style="font-weight:bold;">get /topics/:id 主题详情
        			</h4>
        			<hr>
        			<p>接收get参数</p>
        			<ul style="height:3.125rem;">
						<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code></li>
					</ul>
					<p>示例：<a>/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>	
					<h4 style="font-weight:bold;margin:0.625rem 0">post /topics新建主题
        			</h4>
        			<hr>
        			<p>接收post参数</p>
        			<ul style="height:3.125rem;">
						<li>title <code>String</code> 标题</li>
						<li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code></li>
						<li>content <code>String</code> 主体内容</li>
					</ul>
					<p>事例：</p>
					<h4 style="font-weight:bold;margin:2.625rem 0px 0px;">post /topic/collect 收藏主题
        			</h4>
        			<hr>
        			<p>接收post参数</p>
        			<ul style="height:3.125rem;">
						<li>accesstoken <code>String</code> 用户的 accessToken</li>
						<li>topic_id <code>String</code> 被收藏的主题id</li>
					</ul>	
					<h4 style="font-weight:bold;
					margin: 2.625rem 0px 0px;">post /topic/de_collect 取消收藏
        			</h4>
        			<hr>
        			<p>接收post参数</p>
        			<ul style="height:3.125rem;">
						<li>accesstoken <code>String</code> 用户的 accessToken</li>
						<li>topic_id <code>String</code> 被取消收藏的主题id</li>					
					</ul>	
				</div>	
				<div class="list-group-item">
        			<h3 style="font-weight:bold;margin:0.625rem 0">评论</h3>
        			<hr>			
        			<h4 style="font-weight:bold;">post /topic/:topic_id/replies 新建评论
        			</h4>
        			<hr>       			
        			<p>接收post参数</p>
        			<ul style="height:3.125rem;">       			
						<li>accesstoken <code>String</code> 用户的 accessToken</li>
						<li>content <code>String</code> 评论的主体</li>
						<li>reply_id <code>String</code> 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。</li>
					</ul>
					<p>事例：</p>
					<h4 style="font-weight:bold;margin:2.625rem 0px 0px;">post /reply/:reply_id/ups 为评论点赞
        			</h4>
        			<hr>
        			<p>接收post参数</p>
        			<ul style="height:3.125rem;">
						<li>accesstoken <code>String</code></li>
					</ul>	
					<p>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 </p>					
				</div>	
				<div class="list-group-item">
        			<h3 style="font-weight:bold;margin:0.625rem 0">用户</h3>
        			<hr>			
        			<h4 style="font-weight:bold;">get /user/:loginname 用户详情
        			</h4>
        			<hr>       			        			
					<p>示例：/api/v1/user/DongHongfei</p>
					<h4 style="font-weight:bold;margin:2.625rem 0px 0px;">post /accesstoken 验证 accessToken 的正确性
        			</h4>
        			<hr>
        			<p>接收post参数</p>
        			<ul style="height:3.125rem;">
						<li>accesstoken <code>String</code> 用户的 accessToken</li>
					</ul>	
					<p>如果成功匹配上用户，返回成功信息。否则 403。</p>					
				</div>	
				<div class="list-group-item">
        			<h3 style="font-weight:bold;margin:0.625rem 0">消息通知</h3>
        			<hr>			
        			<h4 style="font-weight:bold;">get /message/count 获取未读消息数
        			</h4>
        			<hr>  
        			<p>接收get参数</p>   
        			<ul style="height:3.125rem;">
						<li>accesstoken <code>String</code></li>
					</ul>  			        			
					<p>示例：</p>
					<h4 style="font-weight:bold;margin:2.625rem 0px 0px;">get /messages 获取已读和未读消息
        			</h4>
        			<hr>
        			<p>接收get参数</p>
        			<ul style="height:3.125rem;">
						<li>accesstoken <code>String</code></li>
					</ul>	
					<p></p>	
					<h4 style="font-weight:bold;margin:2.625rem 0px 0px;">post /message/mark_all 标记全部已读
        			</h4>
        			<hr>
        			<p>接收post参数</p>
        			<ul style="height:3.125rem;">
						<li>accesstoken <code>String</code></li>
					</ul>	
					<p>返回值：</p>				
				</div>	
				<div class="list-group-item">
        			<h3 style="font-weight:bold;margin:0.625rem 0">知识点</h3>
        			<p>如何获取 accessToken？
用户登录后，在设置页面可以看到自己的 accessToken。
建议各移动端应用使用手机扫码的形式登录，验证使用 </p>
        		</div>						
		    </div>
		</div>
	</div>
</template>
<style>
	#zy>a{
		color:green;
	}
	#tiao>span{
		margin:0 0.1875rem;
	}
	#w1{
		margin:0.3125rem;
	}
	#w1>a{
		color:black;
	}
	hr{
		margin-top:0px;
	}
	ul li{
		float:left;
	}
</style>
<script>
	
</script>