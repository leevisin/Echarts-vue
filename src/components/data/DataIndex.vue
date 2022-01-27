<template>
  <div>
    <!-- 用组件写的编辑表格 -->
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column
        v-for="(item,index) in keys"
        :key="index"
        :prop="item.prop"
        :label="item.lable"
        width="180">
        <template  slot-scope="scope">
          <p v-if="scope.column.property=='attr0'">{{scope.row[item.prop]}}</p>
          <el-input class="kuang" v-else v-model="scope.row[item.prop]" placeholder=""></el-input>
        </template>
      </el-table-column>
    </el-table>
    <!-- 原生写的编辑表格 -->
    <table border="1px solid" cellspacing="1" cellpadding="0">
      <tbody>
      <tr>
        <th v-for="(item,index) in keys" :key="index">{{item.lable}}</th>
      </tr>
      <tr class="active" v-for="(item,index) in tableData" :key="index">
        <td v-for="(item1,index1) in Object.keys(item)" :key="index1">
          <p v-if="index1==0">{{item[item1]}}</p>
          <input v-else type="text" v-model="item[item1]"/>
        </td>
      </tr>
      </tbody>
      <button>提交</button>
    </table>
  </div>
</template>


<script>
export default {
  name: 'Data',
  data () {
    return {
      // ----------------------
      keys:[
        {lable:"一级机构",prop:"attr0"},
        {lable:"本月入职人数",prop:"attr1"},
        {lable:"本月离职人数",prop:"attr2"},
      ], //表头
      tableData:[
        {attr0:"泰康人寿",attr1:null,attr2:null},
        {attr0:"泰康养老",attr1:9,attr2:5},
        {attr0:"泰康在线",attr1:3,attr2:7}
      ],//表体
    }
  },
}
</script>

<style scoped>

</style>
