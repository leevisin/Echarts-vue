import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: 'San Zhang',
    userAge: 2,
    init: '0',
    title: '',
    type: '',
    scriptStr: 'option = {\n' +
      '    title: {\n' +
      '      text: \'Title Test\',\n' +
      '    },\n' +
      '    tooltip: {},\n' +
      '    xAxis: {\n' +
      '      type: \'category\',\n' +
      '      data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\n' +
      '    },\n' +
      '    yAxis: {\n' +
      '      type: \'value\'\n' +
      '    },\n' +
      '    series: [\n' +
      '      {\n' +
      '        data: [150, 230, 224, 218, 135, 147, 260],\n' +
      '        type: \'line\'\n' +
      '      }\n' +
      '    ]\n' +
      '};',
  },
  mutations: {
    setUserName(state, aUserName){
      state.userName = aUserName;
    },
    setUserAge(state, aUserAge){
      state.userAge = aUserAge;
    },
    setInit(state, aInit){
      state.init = aInit;
    },
    setTitle(state, aTitle){
      state.title = aTitle;
    },
    setType(state, aType){
      state.type = aType;
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
    getInit(state) {
      return state.init;
    },
    getTitle(state) {
      return state.title;
    },
    getType(state) {
      return state.type;
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
    getInit(context) {
      context.commit('getInit');
    },
    getTitle(context) {
      context.commit('getTitle');
    },
    getType(context) {
      context.commit('getType');
    },
    getScriptStr(context) {
      context.commit('getScriptStr');
    },
  }
})

export default store
