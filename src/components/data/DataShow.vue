<template>
  <div>
    <div class="divHint">Convert all of data to a 2-dimension array.</div>
    <el-input
      class="inputStyle"
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array1">
    </el-input>
    <div class="divHint">Convert to a 1-dimension array every column.</div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array2">
    </el-input>
    <div class="divHint">Convert to a 2-dimension array every 2 column.</div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array3">
    </el-input>
    <div class="divHint">
      <label style="text-align:left">Convert to a 2-dimension array every</label>
      <select name="columns" id="lang">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <label>column.</label>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array5">
    </el-input>
    <div class="divHint">Object + Array, Row 1 is Attribute Name.</div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array4">
    </el-input>
  </div>
</template>

<script>
import { js_beautify, css_beautify, html_beautify } from 'js-beautify'
export default {
  name: 'DataShow',
  data() {
    return {
      realData: '',
      array1: '',
      array2: '',
      array3: '',
      array4: '',
      array5: '',
      num: '',
    }
  },
  mounted() {
    this.bus.$on('sendSpreadsheet', passData => {
      this.realData = passData
      this.Array1()
      this.Array2()
      this.Array3()
      this.Array4()
      this.Array5()
      this.replaceString()
    })
  },
  methods: {
    Array1() {
      this.array1 = js_beautify(JSON.stringify(this.realData), {
        indent_size: 2,
        space_in_empty_paren: true
      })
    },
    Array2() {
      this.array2 = ''
      for (let j = 0; j < this.realData[0].length; j++) {
        var dataTmp = []
        for (let i = 0; i < this.realData.length; i++) {
          dataTmp[i] = this.realData[i][j]
        }
        this.array2 += JSON.stringify(dataTmp)
        this.array2 += "\n"
      }
    },
    Array3() {
      this.array3 = ''
      var array3Tmp = []
      for (let j = 0; j < this.realData[0].length; j+=2) {
        var dataTmp = []
        for (let i = 0; i < this.realData.length; i++) {
          dataTmp[0] = this.realData[i][j]
          dataTmp[1] = this.realData[i][j+1]
          array3Tmp.push(dataTmp)
          dataTmp = []
        }
        this.array3 += JSON.stringify(array3Tmp)
        this.array3 += "\n"
        array3Tmp = []
      }

    },
    Array4() {
      // Use Array to add data
      var arrays = new Array();
      for (var i = 1; i < this.realData.length; i++) {
        var array4Tmp={}; // Must be define inner not outer else index error
        for (var j = 0; j < this.realData[0].length; j++) {
          array4Tmp[this.realData[0][j]] = this.realData[i][j]
        }
        arrays.push(array4Tmp)
      }
      this.array4 = JSON.stringify(arrays);
      this.array4 = this.array4.replace(/"(.*?)":"(.*?)"/gm, "$1:\"$2\"")
      this.array4 = this.array4.replace(/(.*?):"(\d+)"/gm, "$1:$2")

    },
    Array5() {
      var num = parseInt(document.getElementById('lang').value)
      this.array5 = ''
      var array5Tmp = []
      for (let j = 0; j < this.realData[0].length; j+=num) {
        var dataTmp = []
        for (let i = 0; i < this.realData.length; i++) {
          for (let k = 0; k < num; k ++){
            dataTmp[k] = this.realData[i][j+k]
          }
          array5Tmp.push(dataTmp)
          dataTmp = []
        }
        this.array5 += JSON.stringify(array5Tmp)
        this.array5 += "\n"
        array5Tmp = []
      }
    },
    replaceString() {
      // Replace double to single
      this.array1 = this.array1.replace(/"/gm, "\'")
      this.array2 = this.array2.replace(/"/gm, "\'")
      this.array3 = this.array3.replace(/"/gm, "\'")
      this.array4 = this.array4.replace(/"/gm, "\'")
      this.array5 = this.array5.replace(/"/gm, "\'")

      // Replace null to ''
      this.array4 = this.array4.replace(/null/gm, "\'\'")
      this.array5 = this.array5.replace(/null/gm, "\'\'")
    },
  }
}
</script>

<style lang='scss'>
.divHint {
  font-family: sans-serif;
  text-align: left;
  font-weight: bold;
}
textarea.el-textarea__inner {
  font-family: sans-serif;
}

</style>
