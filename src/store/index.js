import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records:[],
    inputValue:""
  },
  mutations: {
    getRecod(state,items){
      state.records= items
    },
    setInputValue(state,value){
      state.inputValue= value
    }
  },
  actions: {
    actionInput({ commit }, value){
      commit('setInputValue',value)
    },
    incrementRecord({ commit,state }, item){
      let items  = Array.from(new Set([...state.records,item]))
      console.log(items)
      commit('getRecod',items)
    }
  },
  modules: {}
});
