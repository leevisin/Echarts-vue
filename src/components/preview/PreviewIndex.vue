<template>
  <el-container>
    <el-aside style="width: 100%">
      <switch></switch>
      <PreviewCon></PreviewCon>
    </el-aside>
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
