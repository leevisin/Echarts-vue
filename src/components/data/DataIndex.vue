<template>
  <div>
    <el-upload
      ref="input"
      action="/"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="importExcel"
      type="file"
    >
      <el-button
        slot="trigger"
        icon="el-icon-upload"
        size="small"
        type="primary">
        上传文件
      </el-button>
    </el-upload>
    <el-button @click="exportToExcel">导出</el-button>
    <el-table style="width: auto" border :data="tableData" id="tableData">
      <template v-for="(item,index) in tableHead">
        <el-table-column :key="index" :prop="item.column_name" :label="item.column_comment"
                         v-if="item.column_name !== 'id'">
        </el-table-column>
      </template>
    </el-table>
  </div>

</template>

<script>
import XLSX from "xlsx";
import FileSaver from 'file-saver'
export default {
  name: "FillShippingCost",

  data() {
    return {
// 表头数据
      tableHead: [],
// 表格数据
      tableData: [],
    }
  },
  //data结束
  methods: {
    //导入
    importExcel(file) {
      const types = file.name.split(".")[1];
      const fileType = ["xlsx", "xlc", "xlm", "xls", "xlt"].some(
        item => item === types
      );
      if (!fileType) {
        alert("格式错误！请重新选择");
        return;
      }
      this.file2Xce(file).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          const data = {};
          const this_ = this;
          // let params = Object.assign({}, this_.reviewForm);
          this_.card = JSON.stringify(tabJson[0].sheet);
          data.card = this_.card;            //中英文转化
          this_.excelToTable(data);//调用生成table方法
        }
      });
    },
    file2Xce(file) {
      return new Promise(function (resolve) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const data = e.target.result;
          this.wb = XLSX.read(data, {
            type: "binary"
          });
          const result = [];
          this.wb.SheetNames.forEach(sheetName => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName],
                {
                  head: 0,
                  defval: " "
                })
          });
          });
          resolve(result);
        };
        reader.readAsBinaryString(file.raw);
      });
    },
    importMerchantInfo() {

    },
    // 把excel用转化为table
    excelToTable(data) {
      const outData = JSON.parse(data.card);
      console.log("excel数据：  "+JSON.stringify(outData));

      const tableHeadList = [];
      let num = 1;
      for (const tableHead2 in outData[0]) {
        const tableHead1 = {};
        tableHead1['column_name'] = "column_name" + num;
        tableHead1['column_comment'] = tableHead2;
        num = num + 1;
        tableHeadList.push(tableHead1);
      }
      // console.log("表头数据："+JSON.stringify(tableHeadList));
      this.tableHead = tableHeadList;//定制表头

      const tableDataList = [];
      for (let j = 0; j < outData.length; j++) {
        const tableData1 = {};
        for (let k = 0; k < tableHeadList.length; k++) {
          // 第一行的数据
          console.log("表头字段："+tableHeadList[k]['column_name']+",表头数据：" + tableHeadList[k]['column_comment']);
          for (const outDataKey in outData[j]) {
            console.log("outDataKey = " + outDataKey)
            if (outData[j].hasOwnProperty(outDataKey)) {//对于（可能迭代异常（自定义/继承）成员，可能缺少 hasOwnProperty 检查）的错误的解决，用if语句判断
              if (tableHeadList[k]['column_comment'] === outDataKey) {
                tableData1[tableHeadList[k]['column_name']] = outData[j][outDataKey];
                console.log("tableHeadList[k]['column_comment'] = " + outData[j][outDataKey])
              }
            }
          }
        }
        tableDataList.push(tableData1);
      }
      console.log("tableHeadList");
      console.log(JSON.stringify(tableHeadList))
      console.log(tableHeadList);
      console.log("tableDataList");
      console.log(JSON.stringify(tableDataList))
      console.log(tableDataList);
      this.tableData = tableDataList;//给表格内容赋值
    },
    //导出Excel
    exportToExcel () {
      let et = XLSX.utils.table_to_book(document.getElementById('tableData')); //此处传入table的DOM节点
      let etOut = XLSX.write(et, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      });
      try {
        FileSaver.saveAs(new Blob([etOut], {
          type: 'application/octet-stream'
        }), 'trade-publish.xlsx');   //trade-publish.xlsx 为导出的文件名
      } catch (e) {
        console.log(e, etOut) ;
      }
      return etOut;
    }
  }
}

</script>

<style scoped>

</style>
