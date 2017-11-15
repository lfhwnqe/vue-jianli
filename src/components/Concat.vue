<template>
  <div id="concat">
    <div class="title">联系我</div>
    <div class="content">
      <div class="email">Email:lfhwnqea@gmail.com</div>
      <div class="phone">Tel:17784253248</div>
    </div>
  </div>
</template>

<style lang="scss">
#concat {
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
  > .content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    > div {
      font-size: 24px;
      color: #fff;
      margin: 5px auto;
    }
  }
}
</style>

