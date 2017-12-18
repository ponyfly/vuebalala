import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './state'
import * as mutations from './mutations'
import * as actions from './action'
import * as getters from './getters'

console.log(state);
console.log(mutations);
console.log(actions);
console.log(getters);

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

