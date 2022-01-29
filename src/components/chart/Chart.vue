<template>
  <div class="screen-container">
    <div class="screen-header">
      <ace :option="scriptStr"></ace>
    </div>
    <div class="screen-body">
      <chart ref="eCRef" @sendOption=getOption></chart>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getOption(res) {
      // 接收图表组件传来的option对象，将其转换为字符串形式
      res = JSON.stringify(res,null,2)
      // 拼接成要返回给编辑器内容的字符串格式，准备传给编辑器子组件
      this.scriptStr = `option = ${res};`
    },
  }
}
</script>

<style>

</style>
