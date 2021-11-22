<template>
  <el-container>
    <el-aside style="width: 665px">
      <switch></switch>
<!--      <PreviewConfig></PreviewConfig>-->
      <PreviewCon></PreviewCon>
    </el-aside>
    <el-main>
      <PreviewImg></PreviewImg>
    </el-main>
  </el-container>
</template>

<script>
  import PreviewCon from './PreviewCon'
  import PreviewImg from './PreviewImg'
  export default {
    name: 'PreviewInterface',
    components: {PreviewCon, PreviewImg}
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
