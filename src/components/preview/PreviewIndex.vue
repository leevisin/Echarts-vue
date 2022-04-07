<template>
  <el-container>
    <el-aside style="width: 35%">
      <switch></switch>
      <PreviewCom></PreviewCom>
    </el-aside>
    <el-main>
      <PreviewImg></PreviewImg>
    </el-main>
  </el-container>
</template>

<script>
  import PreviewCom from './PreviewCom'
  import PreviewImg from './PreviewImg'
  export default {
    name: 'PreviewInterface',
    components: {PreviewCom, PreviewImg}
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
