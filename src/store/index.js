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
    getAgeOfNextYear(state) {
      return state.userAge += 1;
    },
    getTitle(state) {
      return state.title;
    },
  },
  actions: {
    getAgeOfNextYear(context) {
      context.commit('getAgeOfNextYear');
    },
    getTitle(context) {
      context.commit('getTitle');
    }
  }
})

export default store
