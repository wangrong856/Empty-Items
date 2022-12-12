import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
  },
  modules: {
    login
  },
  plugins: [persistedstate()]
})
