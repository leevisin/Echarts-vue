<template>
  <el-container>
    <el-header>
      <PreviewNav></PreviewNav>
    </el-header>
    <el-main>
      <PreviewConfigDetail></PreviewConfigDetail>
    </el-main>
  </el-container>

</template>

<script>
  import PreviewNav from './PreviewNav'
  import PreviewConfigDetail from './PreviewConfigDetail'
  export default {
    name: 'PreviewConfig',
    components: {PreviewNav, PreviewConfigDetail}
  }
</script>

<style scoped>
  .el-header {
    padding: 0 0;
    height: 925px;
  }
</style>
