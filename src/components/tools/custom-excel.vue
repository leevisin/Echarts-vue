<template>
  <div id="spreadsheet"></div>
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
  data: data,
  minDimensions: [20,50],
  defaultColWidth: 70,
  allowToolbar:true,
  allowRenameColumn: true,
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
    let spreadsheet = jexcel(this.$el, options)
    Object.assign(this, { spreadsheet })
  }
}
</script>

<style scoped>

</style>
