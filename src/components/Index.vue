<template>    
    <div class="main">       
       <div class="rows">
           <div class="col-md-8 col-xs-12" style="height:200px;padding:0;">
               <div class="panel panel-default">
                   <div class="panel-heading">
                       <a v-for="item in topicClass" :class="['topic-tab',item==tab?'active':'']" v-on:click="topicTab(item)"  v-text="item">
                       </a>
                   </div>
                   <div class="panel-body">
                       <div class="cell" v-for="item in topic">
                           <div class="rows" style="line-height:2rem">
                               <div class="col-md-2 col-sm-2 col-xs-2" style="position:relative;">
                                   <a href="" class="pull-left">
                                       <img  class="img_src" v-bind:src="item.author.avatar_url" alt="">
                                   </a>
                                   <span class="pull-left topic_visit">
                                       <span v-text="item.reply_count"></span>
                                       <span style="margin:0 -4px;">/</span>
                                       <span v-text="item.visit_count"></span>
                                   </span>
                               </div>
                               <div class="col-md-9 col-sm-9 col-xs-7"  style="overflow:hidden;text-align:left;margin-top:-0.9375rem">
                                   
                                   <span class="iszhi" v-if="item.top" style="background:#369219;color:#FFF;">置顶</span>
                                   <span class="iszhi" v-else-if="item.good" style="background:#369219;color:#FFF">精华</span>
                                   <span class="iszhi" v-else>{{(item.tab=='weex'?'weex':(item.tab=='share'?'分享':(item.tab=='ask'?'问答':'招聘')))}}</span>
                                   
                                   <span class="topic-title" style="text-overflow:clip;line-height:2rem">
                                       <router-link to="/topic">{{item.title}}</router-link>
                                       <router-link :to="'topic/'+item.id">{{item.title}}</router-link>
                                   </span>
                               </div>
                               <div class="col-md-1 col-sm-1 col-xs-3" style="overflow:hidden;height:30px;text-align:right;text-overflow:clip; white-space:nowrap;">
                                   {{item.last_reply_at}}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>           
       </div>
   </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                topic : [],
                topicClass : ['全部','精华','weex','分享','问答','招聘'],
                isClass : '',
                tab : '全部',
                tabClass : '',//分类别名
                className : 'topic-tab'
            }
        },
        created:function(){
            this.topicTab('全部');
        },
        

        methods : {
            topicTab(str){
                if(str=='全部'){
                    this.tab='全部';
                    this.tabClass='all';
                }else if(str=='精华'){
                    this.tab='精华';
                    this.tabClass='good';
                }else if(str=='weex'){
                    this.tab='weex';
                    this.tabClass='weex';
                }else if(str=='分享'){
                    this.tab='分享';
                    this.tabClass='share';
                }else if(str=='问答'){
                    this.tab='问答';
                    this.tabClass='ask';
                }else if(str=='招聘'){
                    this.tab='招聘';
                    this.tabClass='job';
                }
                var vthis = this;
                axios.get('https://www.vue-js.com/api/v1/topics',{
                    params : {
                        page:1,
                        tab:vthis.tabClass,
                        limit:20
                    }
                }).then(function(data){
                    vthis.topic = data.data.data;
                    for(let i=0;i<vthis.topic.length;i++){
                        let dateTime = Math.floor((new Date()-Date.parse(vthis.topic[i].last_reply_at))/1000);
                        if(dateTime<60){
                            vthis.topic[i].last_reply_at= Math.floor(dateTime)+'秒前';
                        }else if(dateTime/60>1&&dateTime/60/60<1){
                            vthis.topic[i].last_reply_at=Math.floor(dateTime/60)+'分前';
                        }else if(dateTime/60/60>1&&dateTime/60/60/24<1){
                            vthis.topic[i].last_reply_at=Math.floor(dateTime/60/60)+'小时前';
                        }else if(dateTime/60/60/24>1&&dateTime/60/60/24/30<1){
                            vthis.topic[i].last_reply_at=Math.floor(dateTime/60/60/24)+'天前';
                        }else if(dateTime/60/60/24/30>1){
                            vthis.topic[i].last_reply_at=Math.floor(dateTime/60/60/24/30)+'月前';
                        };
                    }//console.log(vthis.topic);
                }).catch(function(){
                    console.log('错误');
                })
            }
        },
        updated(){
              // 数据更新完成
              var reg = /^http.*?/;
              $('.img_src').each(function(index){
                console.log($(this));
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
    
    .panel-heading{
        text-align:left;
    }
    .topic-tab{
        display:inline-block;
        padding:0 4px;
        margin:0 10px;
        color:#369219;
        border-radius:0.25rem;
        cursor:pointer;
    }
    .topic-tab:hover{
        text-decoration:none;
    }
    .active{
        background:#369219;
        color:#FFF;
    }
    .cell{
        height:3.125rem;
        width:100%;
        
        padding: 10px 0 10px 10px;
        border-bottom:0.0625rem solid #ccc;
    }
    .cell img{
        width:1.875rem;
        height:1.875rem;
        margin-right:6px;
    }
    .cell .rows>div{
        padding:0;
        height:1.875rem;
        margin-left: -3px;
    }
    .panel-body span{
        line-height:0.875rem;
        color:#B4B4B4;
    }
    .panel-body div{
        line-height:1.875rem;
    }
    .main .iszhi{
        display:inline-block;
        padding:2px 4px;
        background:#E5E5E5;
        font-size:0.75rem;
        line-height:1.0rem;
        border-radius:0.25rem;
    }
    .main .topic-title{
        color:black;
        overflow:hidden;
        height:1.875rem;
        text-align:right;
        text-overflow:clip;
        /*white-space:nowrap;*/
        word-break: break-all;
    }
    .cell .reply_count {
        width: 4.375rem;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 5.3125rem;
        text-align: left;
        line-height: 2em;
        font-size: 0.625rem;
    }
    @media only screen and (max-width: 60.0rem) {
        .topic_visit{
            position:absolute;
            top: 1.2rem;
            left: 7.60rem;
            width:6.25rem;
        }
    }
</style>
