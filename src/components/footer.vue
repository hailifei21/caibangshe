<template>
<!-- 设置公共底部开始 -->
  <footer>
      <div class="container-fuliter">
        <div id='footer'>
          <div id='footer_main'>
            <div class="links">
              <a class='dark' href='/rss'>RSS</a>
              |
              <a class='dark' href='https://github.com/febobo/vueClub'>源码地址</a>
            </div>

            <div class='col_fade'>

            <p>

            服务器搭建在
            <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=Ionichina&utm_medium=display"><img src="../assets/ucloud.png" border="0" alt="UCloud云计算" /></a>
            ，
            存储赞助商为
            <a href="http://www.qiniu.com/?ref=ionichina" target="_blank"
              class="sponsor_outlink" data-label="qiniu_bottom">
              <img src="../assets/qiniu.png" title="七牛云存储"
              alt="七牛云存储" width="115px"/>
            </a>
            </p>
            <p>
            声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除
            </p>
          </div>
        </div>
        </div>
        <div id="sidebar-mask"></div>
      </div>
  </footer>
</template>
<script>
  export default {
    name: 'footer',
    data () {
      return {

      }
    }
  } 

</script>
<style>
  #footer{
  background:white;
  text-align:center;
  margin-top:200px;
}
</style>