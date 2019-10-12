//拆分出来的 影片仓库模块
export default {
  state: {
    filmList: []
  },

  getters: {
    filmCount(state) {
      return state.filmList.length
    }
  },

  mutations: {
    setFilmList(state, payload) {
      return (state.filmList = payload)
    }
  },
  actions: {
    getFilmList(context, payload) {
      setTimeout(() => {
        let result = [
          { filmId: 1, filmName: '中国机长' },
          { filmId: 2, filmName: '我和我的祖国' }
        ]

        context.commit('setFilmList', result)
      }, 5000)
    }
  }
}
