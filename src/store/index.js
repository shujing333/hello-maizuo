// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 调用vuex这款插件
Vue.use(Vuex)
//引入拆分出去的仓库子模块
import filmModel from './modules/film'
import cinemaModel from './modules/cinemas'

//实例化仓库的实例对象
const store = new Vuex.Store({
  modules: {
    film: filmModel,
    cinema: cinemaModel
  }
})

// 实例化仓库的实例对象
// const store = new Vuex.Store({
//   state: {
//     age: 18,
//     title: '种太阳'
//   },
//   getters: {
//     reverseTitle(state) {
//       return state.title
//         .split('')
//         .reverse()
//         .join('')
//     }
//   },

//   mutations: {
//     chgTitle(state, payload) {
//       state.title = '种樱桃'
//     }
//   },

//   //mutation必须是异步代码,只能通过action来写异步代码
//   actions: {
//     syncTitle(context, payload) {
//       setTimeout(() => {
//         context.commit('chgTitle')
//       }, 1000)
//     }
//   }
// })

// 将这个仓库的实例对象暴露出去
export default store
