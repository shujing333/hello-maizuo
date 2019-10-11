<template>
  <div class="page-home">
    <!-- 一级路由页面-首页 -->

    <!-- 二级路由页面坑 -->
    <router-view></router-view>

    <ul>
      <router-link tag="li" to="/films">电影</router-link>

      <router-link tag="li" to="/cinemas">影院</router-link>

      <router-link tag="li" to="/center">我的</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.page-home {
  ul {
    height: 49px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    line-height: 49px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ededed;

    li {
      font-size: 12px;
      color: #797d82;

      &.router-link-active {
        color: #ff5f16;
      }
    }
  }
}
</style>