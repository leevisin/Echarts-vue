<template>
  <el-tabs class="categories" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="Edit Code">
      <Code></Code>
    </el-tab-pane>
    <el-tab-pane label="Option Preview">
      <Option></Option>
    </el-tab-pane>
    <el-tab-pane label="Charts Selection">
      <Chart></Chart>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import Option from './Option'
  import Chart from './Chart'
  import Code from './Code'
  export default {
    name: 'PreviewCon',
    components: {Option, Code, Chart},
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        
      }
    }
  }
</script>

<style scoped>
.el-tabs .el-tab-pane {
  max-height: 850px;
  overflow: hidden;
}
</style>
