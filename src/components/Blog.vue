<template>
  <div id="blog">
      <div class="title">我的博客</div>
      <div class="blog"><a href="http://www.jianshu.com/u/c9d1c591e337">进入博客</a></div>
  </div>
</template>

<style lang="scss">
#blog {
  width: 100%;
  height: 100%;
  background: #5bc0ab;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > .title {
    text-align: center;
    font-size: 42px;
    color: #fff;
    margin-bottom: 120px;
    position: absolute;
    top: 200px;
  }
  > .blog a {
      font-size: 25px;
      color: #fff;
  }
}
</style>

