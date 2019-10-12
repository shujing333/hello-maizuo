<template>
  <div class="page-login">
    <!-- 一级路由页面-登录页 -->
    <h1>登录页面</h1>
    <input type="text" placeholder="用户名" />
    <br />
    <input type="password" placeholder="密码" />
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  // 登录操作
  methods: {
    handleLogin () {
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify({ username: '张三' })
      )

      // 登录成功跳转到电影列表页面
      let redirect = this.$route.query.redirect || '/films'
      this.$router.replace(redirect)
    }
  }
}
</script>
