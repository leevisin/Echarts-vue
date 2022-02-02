import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: 'San Zhang',
    userAge: 2,
    title: 'Echarts Demo',
    scriptStr: '',
  },
  mutations: {
    setUserName(state, aUserName){
      state.userName = aUserName;
    },
    setUserAge(state, aUserAge){
      state.userAge = aUserAge;
    },
    setTitle(state, aTitle){
      state.title = aTitle;
    },
    setScriptStr(state, aScriptStr){
      state.scriptStr = aScriptStr;
    },
  },
  getters: {
    getAge(state) {
      return state.userAge;
    },
    getAgeOfNextYear(state) {
      return state.userAge + 1;
    },
    getTitle(state) {
      return state.title;
    },
    getScriptStr(state) {
      return state.scriptStr;
    },
  },
  actions: {
    getAge(context) {
      context.commit('getAge');
    },
    getAgeOfNextYear(context) {
      context.commit('getAgeOfNextYear');
    },
    getTitle(context) {
      context.commit('getTitle');
    },
    getScriptStr(context) {
      context.commit('getScriptStr');
    },
  }
})

export default store
