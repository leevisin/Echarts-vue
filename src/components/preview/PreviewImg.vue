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
      // Get option Object from Chart component, and turn it to string
      res = JSON.stringify(res,null,2)
      // process and pass the string to ace-editor
      res = res.replace(/"/gm,'\'')
      // Only the first time need to set scriptStr through chart
      if (this.$store.getters.getInit == '0') {
        this.$store.commit('setScriptStr', `option = ${res};`);
      }
    }
  },
  created() {

  }
}
</script>

<style>

</style>
