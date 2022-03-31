<template>
  <div>
    <button class="getRsltBtn" v-on:click="getResult">Generate Result</button>
    <div id="spreadsheet"></div>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
var data = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
]
var options = {
  props: ['sheetData'],
  data: data,
  minDimensions: [16,34],
  defaultColWidth: 70,
  allowToolbar: true,
  allowRenameColumn: true,
  allowDeleteColumn: true,
  allowDragInsertColumn: true,
  allowInsertColumn: true,
  allowManualInsertColumn: true,
  columns: [
    { type: 'text', title: 'A', width: '70px' },
    { type: 'text', title: 'B', width: '70px' },
    { type: 'text', title: 'C', width: '70px' },
    { type: 'text', title: 'D', width: '70px' },
    { type: 'text', title: 'E', width: '70px' },
    { type: 'text', title: 'F', width: '70px' },
    { type: 'text', title: 'G', width: '70px' },
    { type: 'text', title: 'H', width: '70px' },
    { type: 'text', title: 'I', width: '70px' },
    { type: 'text', title: 'J', width: '70px' },
    { type: 'text', title: 'K', width: '70px' },
    { type: 'text', title: 'L', width: '70px' },
    { type: 'text', title: 'M', width: '70px' },
    { type: 'text', title: 'N', width: '70px' },

  ]
}
export default {
  mounted: function () {
    // let spreadsheet = jexcel(this.$el, options)
    let spreadsheet = jexcel(document.getElementById('spreadsheet'), options)
    Object.assign(this, { spreadsheet })
  },
  methods: {
    getResult() {
      var realData = this.getRealData()
      this.bus.$emit('sendSpreadsheet', realData)
      console.log(JSON.stringify(realData))
    },
    getRealData() {
      // Get True Row and Column
      var maxRow = 0;
      var maxColumn = 0;
      for (var i=0; i < data.length; i++) {
        for (var j=0; j < data[0].length; j++) {
          if (data[i][j]!="") {
            if (maxRow < i) {
              maxRow = i
            }
            if (maxColumn < j) {
              maxColumn = j
            }
          }
        }
      }
      // Return True Data
      var tData = []
      for (var i=0; i < maxRow + 1; i++) {
        var dataTmp = []
        for (var j=0; j < maxColumn + 1; j++) {
          dataTmp[j] = data[i][j]
        }
        tData[i] = dataTmp
      }
      return tData
    },
    addColumn() {

    },
    clearData() {

    }
  },
}
</script>

<style lang='scss' scoped>
.getRsltBtn {
  position: absolute;
  right: 0px;
  top: 70px;
  width: 100px;
  height: 28px;
  z-index: 2;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #FF7F50;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 7px 9px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
  background-color: #FF4500;
}
</style>
