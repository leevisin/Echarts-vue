import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: 'San Zhang',
    userAge: '2'
  },
  mutations: {
    setUserName(state, aUserName){
      state.userName = aUserName;
    },
    setUserAge(state, aUserAge){
      state.userAge = aUserAge;
    }
  },
  getters: {
    getAgeOfNextYear(state) {
      return state.userAge += 1;
    }
  },
  actions: {
    getAgeOfNextYear(context) {
      context.commit('getAgeOfNextYear');
    }
  }
})

export default store
