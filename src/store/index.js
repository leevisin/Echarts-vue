import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
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
    spreadsheet: '',
    cover: '',
    chart: '',
  },
  mutations: {
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
    setSpreadsheet(state, aSpreadsheet){
      state.spreadsheet = aSpreadsheet;
    },
    setCover(state, aCover){
      state.cover = aCover;
    },
    setChart(state, aChart){
      state.chart = aChart;
    },
  },
  getters: {
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
    getSpreadsheet(state) {
      return state.spreadsheet;
    },
    getCover(state) {
      return state.cover;
    },
    getChart(state) {
      return state.chart;
    },
  },
  actions: {
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
    getSpreadsheet(context) {
      context.commit('getSpreadsheet');
    },
    getCover(context) {
      context.commit('getCover');
    },
    getChart(context) {
      context.commit('getChart');
    },
  }
})

export default store
