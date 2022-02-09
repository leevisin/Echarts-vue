import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: 'San Zhang',
    userAge: 2,
    title: 'Echarts Demo',
    scriptStr: 'option = {\n' +
      '        title: {\n' +
      '          text: \'Title Test\',\n' +
      '        },\n' +
      '        tooltip: {},\n' +
      '        toolbox: {\n' +
      '          feature: {\n' +
      '            saveAsImage: {}\n' +
      '          }\n' +
      '        },\n' +
      '        legend: {\n' +
      '          data: [\'销量\']\n' +
      '        },\n' +
      '        xAxis: {\n' +
      '          data: [\'衬衫\', \'羊毛衫\', \'雪纺衫\', \'裤子\', \'高跟鞋\', \'袜子\']\n' +
      '        },\n' +
      '        yAxis: {},\n' +
      '        series: [{\n' +
      '          name: \'销量\',\n' +
      '          type: \'bar\',\n' +
      '          data: [5, 20, 36, 10, 10, 20]\n' +
      '        }]\n' +
      '      };',
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
