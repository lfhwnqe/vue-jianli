<template>
  <div id="skill">
    <h1>擅长技术</h1>
    <div class="content">
      <ul class="css clearfix">
        <li>css</li>
        <li>scss</li>
        <li>css3</li>
      </ul>
      <ul class="mvvm clearfix">
        <li>JavaScript</li>
        <li>Jquery</li>
        <li>Vue.js</li>
        <li>Git</li>
        <li>Vscode</li>
      </ul>
      <ul class="others clearfix">
        <li>axios</li>
        <li>ajax</li>
        <li>node.js</li>
        <li>webpack</li>
      </ul>
    </div>
  </div>
</template>

 <script>
export default {};
</script>

<style lang="scss">
#skill {
  background: #5bc0ab;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > h1 {
      text-align: center;
      font-size: 42px;
      color: #fff;
      margin-bottom: 120px;
      position: absolute;
      top: 200px;
    }
  > .content {
    > ul {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      > li {
        float: left;
        font-size: 24px;
        margin: 4px 7px;
        padding: 4px 10px;
        background: #2a6055;
        border-radius: 8px;
        color: #fff;
      }
    }
  }
}
</style>


