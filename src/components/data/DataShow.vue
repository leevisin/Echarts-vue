<template>
  <div class="wholeStyle">
    <p>Convert all of data to a 2-dimension array.</p>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array1">
    </el-input>
    <p>Convert to a 1-dimension array every column.</p>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array2">
    </el-input>
    <p>Convert to a 2-dimension array every 2 column.</p>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder=""
      v-model="array3">
    </el-input>
    <p>Object + Array, Row 1 is Attribute Name.</p>
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
    }
  },
  mounted() {
    this.bus.$on('sendSpreadsheet', passData => {
      this.realData = passData
      this.Array1()
      this.Array2()
      this.Array3()
      this.Array4()
      this.replaceDoubleToSingle()
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
    replaceDoubleToSingle() {
      this.array1 = this.array1.replace(/"/gm, "\'")
      this.array2 = this.array2.replace(/"/gm, "\'")
      this.array3 = this.array3.replace(/"/gm, "\'")
      this.array4 = this.array4.replace(/"/gm, "\'")
    },
  }
}
</script>

<style lang='scss' scoped>
.el-input {
  font-family: 微软雅黑,serif
}
.el-textarea__inner {
  font-family: 微软雅黑,serif
}
element.style {
  font-family: sans-serif
}
</style>
