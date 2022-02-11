<template>
  <div>
    <h4>vue-xlsx-table</h4>
    <vue-xlsx-table @on-select-file="handleSelectedFile">上传Excel</vue-xlsx-table>
  </div>
</template>

<script>
export default {
  name: 'ExcelRead',
  methods: {
    /**
     * 读取Excel内容
     * @param excelData
     */
    handleSelectedFile (excelData) {
      let { header: tableHeader, body: tableData } = excelData
      console.log("excel表头：",tableHeader)
      console.log("excel数据：",tableData)

    }
  }
}
</script>

<style scoped>

</style>
