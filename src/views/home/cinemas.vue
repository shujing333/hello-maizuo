<template>
  <div class="page-home-cinemas">
    <!-- 二级路由页面-影院列表页 -->
    <h1>影院列表页</h1>
    <!-- <p>{{ age }}</p> -->
    <p>{{ title }}</p>
    <p>{{ rtitle }}</p>
    <button @click="chgTitle">点击,修改title</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Cinemas',
  computed: {
    ...mapState(['age', 'title']),
    // ...mapGetters(['reverseTitle'])
    ...mapGetters({
      rtitle: 'reverseTitle'
    })
  },

  methods: {
    // fn1() {
    //   this.$store.commit('chgTitle', '种樱桃')
    // }
    ...mapMutations(['chgTitle'])
  },
  created () {
    console.log(this.$store.getters.reverseTitle)
  }
}
</script>
