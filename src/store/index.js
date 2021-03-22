import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records:[]
  },
  mutations: {
    getRecod(state,items){
      state.records= items
    }
  },
  actions: {
    incrementRecord({ commit,state }, item){
      let items  = Array.from(new Set([...state.records,item]))
      console.log(items)
      commit('getRecod',items)
    }
  },
  modules: {}
});
