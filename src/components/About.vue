<template>
	<div id="content">
		<div class="panel" >
			<div class="list-group">
				<div class="list-group-item" style="background:#F6F6F6" id="zhu">
					<span id="zy"><a href="/">主页</a></span>
					<span class="divider">/</span>
					<span class="active" style="color:#999999">关于</span>
        		</div>      				    
		        <div class="markdown-text"><h3>关于</h3>
					<p>Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。</p>
					<p>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎吐槽。</p>
					<p><a target="_blank"><img src="../assets/group.png" alt="vueJs社区交流讨论2" title="vueJs社区交流讨论2"></a></p>
					<p>群二维码</p>
					<p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>
					<h3>移动客户端</h3>
					<p>客户端目前正在加急开发中…静请期待</p>
				</div>			  
		    </div>
		</div>
	</div>
</template>
<style>
	#zy>a{
		color:green;
	}
	#zhu>span{
		margin:0 0.1875rem;
	}
	.markdown-text{
		margin-left: 12px;
		line-height: 23px;
	}
</style>
<script>
	/*$(function(){
    //捕获以img src="//"
    //判断当前的路径是否是以http开头
    var reg = /^http.*?/;
        console.log($(this)); 
        //执行匹配
        var res = reg.exec($(this).attr('src'));
        if(!res){
            //console.log('不是以http开头的');

            //手动给路径添加http
          $('img').attr('src','http:'+$(this).attr('src'))
        }
    });
})*/
</script>