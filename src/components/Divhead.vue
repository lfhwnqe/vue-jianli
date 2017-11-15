<template>
  <div id="app">
    <!-- <myname/>   引入全局注册的组件 -->
  
    <div class="divhead">
      <div id="navi">
        <div class="name">
          李诺
        </div>
        <ul>
          <li v-for="i in [0,1,2,3,4]" :class="{active: currentTab===i}" @click="currentTab=i">
            {{title[i]}}
          </li>
        </ul>
        <div class="content">
          <ul>
            <li onclick="window.location='https://github.com/lfhwnqe'">
              <svg class="icon icon-git" aria-hidden="true">
                      <use xlink:href="#icon-git"></use>
                      </svg>
            </li>
            <li onclick="window.location='http://www.jianshu.com/u/c9d1c591e337'">
              <svg class="icon icon-blog" aria-hidden="true">
                      <use xlink:href="#icon-blog"></use>
                      </svg>
            </li>
            <li onclick="window.location.href='mailto:464385492@qq.com'">
              <svg class="icon icon-email" aria-hidden="true">
                      <use xlink:href="#icon-email"></use>
                      </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <main>
      <Me v-show="currentTab === 0">
      </Me>
      <Skill v-show="currentTab === 1">
      </Skill>
      <Projects v-show="currentTab === 2">
      </Projects>
      <Concat v-show="currentTab === 3">
      </Concat>
      <Blog v-show="currentTab === 4">
      </Blog>
    </main>
  </div>
</template>


<script>
// import HelloWorld from "./components/HelloWorld";
// hello引入标签
import Concat from "./Concat";
import Me from "./Me";
import Skill from "./Skill";
import Projects from "./Projects";
import Blog from "./Blog";
export default {
  data() {
    return {
      currentTab: 0,
      title: ["个人简介", "专业技能", "项目经验", "联系我", "博客"]
    };
  },
  components: {
    // HelloWorld  //全局注册这里就不用注册了
    Concat,
    Me,
    Skill,
    Projects,
    Blog
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

#app .divhead {
  width: 20%;
  padding-top: 3rem;
  padding-left: 2rem;
  position: relative;
  background: #262826;
}

#app main {
  width: 80%;
  height: 100%;
  overflow: scroll;
}

.icon {
  width: 2.6em;
  height: 2.6em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  padding: 0.6em;
  border-radius: 10em;
  cursor: pointer;
}

#navi {
  display: block;
  > .name {
    color: #4b956e;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
  > ul li {
    margin-bottom: 1rem;
    color: #fff;
    cursor: pointer;
  }
  > ul .active {
    color: yellow;
  }
  > .content {
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    > ul {
      display: flex;
      justify-content: space-around;
      > li {
        color: #fff;
        > .icon-git {
          border: 1px solid #fff;
          background: #fff;
          cursor: pointer;
        }
        > .icon-blog {
          background: #45a1ec;
          cursor: pointer;
        }
        > .icon-email {
          background: gray;
          
          cursor: pointer;
        }
      }
    }
  }
}
main {
  > .active {
    display: block;
  }
}
</style>


