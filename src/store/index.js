import Vue from 'vue'
import Vuex from 'vuex'
import HeaderStore from './headerStore'
import IformationStore from './iformationStore'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    HeaderStore,
    IformationStore
  }
})
