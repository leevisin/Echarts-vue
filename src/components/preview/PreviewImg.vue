<template>
  <div className="Echarts">
    <chart ref="chartRef" @sendOption=getOption></chart>
  </div>
</template>

<script>
export default {
  name: 'PreviewImg',
  methods: {
    getOption(res) {
      // 接收图表组件传来的option对象，将其转换为字符串形式
      res = JSON.stringify(res,null,2)
      // 拼接成要返回给编辑器内容的字符串格式，准备传给编辑器子组件
      res = res.replace(/"/gm,'\'')
      // Only the first time need to set scriptStr through chart
      if (this.$store.getters.getInit == '0') {
        this.$store.commit('setScriptStr', `option = ${res};`);
      }
      console.log(this.$store.getters.getScriptStr)
    }
  },
  created() {
    // console.log(this.$store.getters.getScriptStr)
  }
}
</script>

<style>

</style>
