<template>
  <div class="page-home-center">
    <!-- 二级路由页面-我的页面 -->
    <h1>个人中心页</h1>
    <p v-if="userInfo.username">{{userInfo.username}}</p>
    <router-link to="/login" v-else>去登录</router-link>

    <hr />

    <router-link to="/money">余额</router-link>
    <router-link to="/card">卡券</router-link>

    <button @click="syncTitle">点击,调用action</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Center',
  data () {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    }
  },

  methods: {
    // fn1() {
    //   this.$store.dispatch('syncTitle')
    // }

    ...mapActions(['syncTitle'])
  }
}
</script>
