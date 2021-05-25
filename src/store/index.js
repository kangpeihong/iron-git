import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: '',
    username: '',
    rightList: '',
    isCollapse: false,
    currentss: {},
    commonPage: [
      {
        id: 0,
        path: '/main',
        pageName: '首页',
      },
      {
        id: 1,
        path: '/shows',
        pageName: '展示',
      },
      {
        id: 2,
        path: '/introduce',
        pageName: '介绍',
      },
    ],
    navUrlList: {},
    initList: [],

    rightUrl: JSON.parse(sessionStorage.getItem('rightUrl') || '[]'),
  },
  mutations: {
    setRole(state, data) {
      state.role = data
    },
    setRightList(state, data) {
      state.rightList = data
    },
    setRightUrl(state, data) {
      state.rightUrl = data
      sessionStorage.setItem('rightUrl', JSON.stringify(data))
    },
    setNavUrlList(state, data) {
      state.navUrlList = data
    },
    setIsCollapse(state, data) {
      state.isCollapse = !data
      console.log('kkk', state.isCollapse)
    },
  },
  actions: {},
  modules: {},
})
