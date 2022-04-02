<template>
  <div class="form-group">
    <el-upload
      action="http://localhost:8443/upload"
      :on-preview="handlePreview"
      accept='.png'
      :limit="10"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>

export default {
  name: "updateImg",
  methods:{
    handlePreview(file){
      // window.open(file.response.url);
      console.log(file.response.url);
    }
  }
}
</script>

<style scoped>

</style>
