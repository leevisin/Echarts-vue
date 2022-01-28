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
          <el-input v-if="scope.column.property=='attr0'" v-model="scope.row[item.prop]" placeholder=""></el-input>
          <el-input class="kuang" v-else v-model="scope.row[item.prop]" placeholder=""></el-input>
        </template>
      </el-table-column>
    </el-table>
    <!-- 原生写的编辑表格 -->
<!--    <table border="1px solid" cellspacing="1" cellpadding="0">-->
<!--      <tbody>-->
<!--      <tr>-->
<!--        <th v-for="(item,index) in keys" :key="index">{{item.lable}}</th>-->
<!--      </tr>-->
<!--      <tr class="active" v-for="(item,index) in tableData" :key="index">-->
<!--        <td v-for="(item1,index1) in Object.keys(item)" :key="index1">-->
<!--          <p v-if="index1==0">{{item[item1]}}</p>-->
<!--          <input v-else type="text" v-model="item[item1]"/>-->
<!--        </td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--      <button>提交</button>-->
<!--    </table>-->
  </div>
</template>


<script>
export default {
  name: 'Data',
  data () {
    return {
      // ----------------------
      keys:[
        {lable:"yAxis\\xAxis",prop:"attr0"},
        {lable:"Column1",prop:"attr1"},
        {lable:"Column2",prop:"attr2"},
      ], //表头
      tableData:[
        {attr0:"y1",attr1:null,attr2:null},
        {attr0:"y2",attr1:null,attr2:null},
        {attr0:"y3",attr1:null,attr2:null}
      ],//表体
    }
  },
}
</script>

<style scoped>

</style>
