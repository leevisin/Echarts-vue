<template>
  <el-container>
    <el-aside style="width: 665px">
      <switch></switch>
      <PreviewConfig></PreviewConfig>
    </el-aside>
    <el-main>
      <PreviewImg></PreviewImg>
    </el-main>
  </el-container>
</template>

<script>
  import PreviewConfig from './PreviewConfig'
  import PreviewImg from './PreviewImg'
  export default {
    name: 'PreviewInterface',
    components: {PreviewConfig, PreviewImg}
  }
</script>

<style scoped>
  .el-header {
    padding: 0 0;
  }

  .el-aside {
    height: 930px;
  }
</style>
