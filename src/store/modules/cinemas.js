//拆分出来的  影院仓库模块
export default {
  state: {
    cinemaList: []
  },

  getters: {
    cinemaCount(state) {
      return state.cinemasList.length
    }
  },

  mutations: {
    setCinemaList(state, payload) {
      state.cinemaList = payload
    }
  },

  actions: {
    getCinemaList(context, payload) {
      setTimeout(() => {
        let result = [
          { cinemaId: 1, cinemaName: '传奇影院' },
          { cinemaId: 2, cinemaName: '凤凰影院' }
        ]

        context.commit('setCinemaList', result)
      }, 5000)
    }
  }
}
