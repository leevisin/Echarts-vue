<template>
  <el-container>
    <el-aside style="width: 63%">
      <Excel></Excel>
    </el-aside>
    <el-main>
      <DataShow></DataShow>
    </el-main>
  </el-container>
</template>

<script>
  import DataShow from './DataShow'
  export default {
    components: { DataShow },
  }
</script>

<style scoped>
.el-aside .el-main{
  max-height: 850px;
  overflow: hidden;
}
</style>
