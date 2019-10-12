<template>
  <div class="page-home-films">
    <!-- 二级路由页面-影片列表页 -->
    <h1>电影列表页</h1>
    <!-- <p>age:{{$store.state.age}}</p>
    <p>title:{{$store.state.title}}</p>-->

    <p>age:{{age}}</p>
    <p>title:{{title}}</p>
  </div>
</template>

<script>
// import axios from 'axios'

import { mapState } from 'vuex'
export default {
  name: 'Films',
  // computed: {
  //   age() {
  //     return this.$store.state.age
  //   },
  //   title() {
  //     return this.$store.state.title
  //   }
  // },

  computed: mapState(['age', 'title']),
  created () {
    // fetch('http://localhost:3000/todos', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: '火龙果',
    //     price: 6
    //   })
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result)
    //   })

    // axios.get('http://localhost:3000/todos').then(response => {
    //   console.log(response)
    //   let result = response.data
    //   console.log(result)
    // })

    // axios
    //   .get('http://localhost:3000/todos', {
    //     params: {
    //       name_like: '火'
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data)
    //   })

    console.log(this.$store.state.age)
  }
}
</script>
