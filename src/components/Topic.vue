<template>
    <div class="main">
        <!-- 话题详情 -->
        <div class="panel panel-default">
            <div class="panel-heading">
                <span class="title" v-text="topic.title"></span>
                <div class="changes">
                    <ul>
                        <li><span class="dote">发布于 <span v-text="topic.last_reply_at"></span></span></li>
                        <li v-for="item in topic" v-if="item.loginname">
                            <span class="dote">作者<span v-text="item.loginname"></span></span></li>
                        <li><span class="dote" v-text="topic.visit_count"></span> 次浏览</li>
                        <li><span class="dote">来自<span v-text="topic.tab=='share'?'分享':(topic.tab=='ask'?'问答':(topic.tab=='job'?'招聘':'weex'))"></span></span> 
                        </li>
                    </ul>
                </div>
            </div>
            <div class="panel-body" v-html="topic.content">
            </div>
        </div>
        <!-- 回复 -->
        <div class="panel panel-default">
            <!-- 回复头 -->
            <div class="panel-heading" v-text="'回复'">
                
            </div>
            <!-- 回复 -->
            <div class="panel-body">
                <!-- 每一个回复 -->
                <div class="reply" v-for="item,index in topic.replies">
                    <!-- 回复人信息 -->
                    <div class="reply_author">
                        <!-- 回复人头像 -->
                        <a href="">
                            <img class="img_src" :src="item.author.avatar_url" alt="">
                        </a>
                        <!-- 回复人名称 -->
                        <!-- <a href="" v-text="item.author.loginname"></a> -->
                        <!-- 回复时间 -->
                        <a href="">
                            <span v-text="item.create_at"></span>
                            <span style="font-size:20px; height:20px;">·</span>
                            <span>{{index}}楼</span>
                        </a>
                        <!-- 点赞 -->
                        <span v-if="item.ups.length!=0">
                            <i class="glyphicon glyphicon-thumbs-up zan"></i>
                            <span v-text="item.ups.length"></span>
                        </span>
                    </div>
                        
                    <!-- 回复内容 -->
                    <div class="reply_content" v-html="item.content"></div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
	import axios from 'axios';
    export default {
    	data () {
    		return{
    			url : '',
    			topic : {}
    		}
    	},
    	created:function(){
    		this.url = this.$route.fullPath;
    		var vthis = this;
    		this.$http.get(this.url)
    		.then(function(data){
    			vthis.topic = data.data.data;
                let dateTime = Math.floor((new Date()-Date.parse(vthis.topic.last_reply_at))/1000);
               // console.log(dateTime);
                if(dateTime<60){
                    vthis.topic.last_reply_at= Math.floor(dateTime)+'秒前';
                }else if(dateTime/60>1&&dateTime/60/60<1){
                    vthis.topic.last_reply_at=Math.floor(dateTime/60)+'分前';
                }else if(dateTime/60/60>1&&dateTime/60/60/24<1){
                    vthis.topic.last_reply_at=Math.floor(dateTime/60/60)+'小时前';
                }else if(dateTime/60/60/24>1&&dateTime/60/60/24/30<1){
                    vthis.topic.last_reply_at=Math.floor(dateTime/60/60/24)+'天前';
                }else if(dateTime/60/60/24/30>1){
                    vthis.topic.last_reply_at=Math.floor(dateTime/60/60/24/30)+'月前';
                };              
    			// console.log(vthis.topic.author.loginname);
                //console.log(vthis.topic);
    		}).catch(function(){
    			console.log('出错');
    		});
    	},
        updated(){
              // 数据更新完成
              var reg = /^http.*?/;
              $('.img_src').each(function(index){ 
                var res = reg.exec($(this).attr('src'));
                if(!res){
                  $(this).attr('src','http:'+$(this).attr('src'))
                }
            });
        }

	}
    
/*$(function(){
    //捕获以img src="//"
    //判断当前的路径是否是以http开头
    var reg = /^http.*?/;
      $('img').each(function(index){
        console.log($(this)); 
        //执行匹配
        var res = reg.exec($(this).attr('src'));
        if(!res){
            //console.log('不是以http开头的');

            //手动给路径添加http
          $(this).attr('src','http:'+$(this).attr('src'))
        }
    });
})*/
</script>
<style scoped="">
    .main{
        text-align:left;
    }
  	.title{
        font-size:1.25rem;
        font-weight:700;

    }
    .changes {
        width:23.4375rem;
        height:2.5rem;
        padding:10px 0 6px 10px;
        font-size: 0.75rem;
        color: #838383;
    }
    .changes li{
        font-size:0.75rem;
        color:#838383;
        float:left;
        margin: 0 -12px;
        margin-right:20px;
    }
    .changes .dote::before{
        content:'•';
    }
    .reply{
        border-bottom:1px solid #F0F0F0;
        padding:10px 0;
    }
    .reply_author:after{
        content:"";
        display:table;
        clear:both;
    }
    .reply_author img{
        width:1.875rem;
        height:1.875rem;
        margin-right:10px;
    }
    .reply_author a{
        float:left;
        margin:0 2px;
    }
    .reply_author a:nth-child(2){
        color:#000;
    }
    .reply_author span{
        float:right;
    }
    .reply_content{
        margin-top:10px;
    }
    .zan{
        margin-right:3px;
    }
</style>