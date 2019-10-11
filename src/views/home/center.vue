<template>
  <div class="page-home-center">
    <!-- 二级路由页面-我的页面 -->
    <h1>个人中心页</h1>
    <p v-if="userInfo.username">{{userInfo.username}}</p>
    <router-link to="/login" v-else>去登录</router-link>

    <hr />

    <router-link to="/money">余额</router-link>
    <router-link to="/card">卡券</router-link>
  </div>
</template>

<script>
export default {
  name: 'Center',
  data() {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    }
  }
}
</script>