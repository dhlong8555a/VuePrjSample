import Vue from 'vue'
import Vuex from 'vuex'
// import global from '@/store/modules/global'
// import project from '@/store/modules/project'
// import pipeline from '@/store/modules/pipeline'
// import appMng from '@/store/modules/appMng'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // state: global.state,
  // getters: global.getters,
  // mutations: global.mutations,
  // actions: global.actions,
  // modules: {
  //   project,
  //   pipeline,
  //   appMng
  // },
  strict: debug
})
