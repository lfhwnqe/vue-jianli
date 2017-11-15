<template>
  <div id="projects">
      <h1>项目经验</h1>
      <ul>
          <li class="clearfix" onclick="window.location='https://m.zhudd.com/'">
           <svg class="icon icon-zhu" aria-hidden="true">
                      <use xlink:href="#icon-zhu"></use>
                      </svg>
    <div class="listcontent">
           <h3>住多多</h3>
           <p>房屋租赁平台</p>
           </div>
           </li>
           <li class="clearfix" onclick="window.location='https://github.com/lfhwnqe/vue-youzan'">
            <svg class="icon icon-weibiaoti-" aria-hidden="true">
                      <use xlink:href="#icon-weibiaoti-"></use>
                      </svg>
                      <div class="listcontent">
                <h3>有赞商城</h3>
                <p>使用vue重构有赞商城</p>
                </div>
                </li>
          <li class="clearfix" onclick="window.location='http://lfhwnqe.gitee.io/app/'">
                <svg class="icon icon-douban" aria-hidden="true">
                      <use xlink:href="#icon-douban"></use>
                      </svg>
                      <div class="listcontent">
                <h3>豆瓣电影</h3>
                <p>使用豆瓣api实现电影信息查询，排行榜，搜索等功能</p>
                </div>
                </li>
                
          <li class="clearfix" onclick="window.location='https://lfhwnqe.github.io/my-home/projects/music-box/index.html'">
                <svg class="icon icon-yinyue" aria-hidden="true">
                      <use xlink:href="#icon-yinyue"></use>
                      </svg>
                      <div class="listcontent">
                <h3>音乐电台</h3>
                <p>私人音乐fm实现在线音乐播放器</p>
                </div>
                </li>
          <li class="clearfix" onclick="window.location='https://github.com/lfhwnqe/nodeserver'">
                <svg class="icon icon-jiqiren" aria-hidden="true">
                      <use xlink:href="#icon-jiqiren"></use>
                      </svg>
                      <div class="listcontent">
                <h3>node服务器</h3>
                <p>node.js编写一个静态服务器</p>
                </div>
          </li>
      </ul>
  </div>
</template>

<style lang="scss">
#projects {
  position: relative;
  width: 100%;
  height: 100%;
  background: #5bc0ab;
  display: flex;
  justify-content: center;
  align-items: center;
  > h1 {
    position: absolute;
    top: 120px;
    color: #fff;
    font-size: 42px;
  }
  > ul {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > li {
      margin: 10px 15px;
      width: 45%;
    //   display: flex;
    //   justify-content: space-around;
    //   align-items: center;
      > .listcontent {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
          > h3 {
              font-size: 24px;
              margin-bottom: 8px;
          }
          > p {
              font-size: 16px;
          }
      }
      > svg {
          margin-right: 20px;
        float: left;
        width: 6em;
        height: 6em;
        color: #fff;
        background: #3b8776;
      }
    }
  }
}
</style>


