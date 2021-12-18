import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: 'San Zhang',
    userAge: 2,
    title: 'Echarts Demo'
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
    }
  }
})

export default store
