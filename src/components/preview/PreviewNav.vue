<template>
  <el-tabs class="categories" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="Option Preview">Option Preview</el-tab-pane>
    <el-tab-pane label="Edit Code">
      <Code></Code>
    </el-tab-pane>
    <el-tab-pane label="Charts Selection">
      <Chart></Chart>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import Chart from './Chart'
  import Code from './Code'
  export default {
    name: 'PreviewNav',
    components: {Code, Chart},
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>
