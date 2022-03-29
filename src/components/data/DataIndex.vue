<template>
  <div id="spreadsheet"></div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
var data = [
  ['', '', '', '', '', '', '', '', '', ],
  ['', '', '', '', '', '', '', '', '', ]
]
var options = {
  data: data,
  allowToolbar:true,
  columns: [
    { type: 'text', title: 'A', width: '120px' },
    { type: 'text', title: 'B', width: '120px' },
    { type: 'text', title: 'C', width: '120px' },
    { type: 'text', title: 'D', width: '120px' },
    { type: 'text', title: 'E', width: '120px' },
    { type: 'text', title: 'F', width: '120px' },
    { type: 'text', title: 'G', width: '120px' },
    { type: 'text', title: 'H', width: '120px' },
    { type: 'text', title: 'I', width: '120px' },

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
