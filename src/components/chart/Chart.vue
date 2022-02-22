<template>
  <div class="screen-container">
    <div class="screen-header">
      <ace :option="scriptStr"></ace>
    </div>
    <div class="screen-body">
      <chart ref="chartRef" @sendOption=getOption></chart>
    </div>
  </div>
</template>

<script>
import { js_beautify, css_beautify, html_beautify } from 'js-beautify'
export default {
  data() {
    return {
      scriptStr: ''
    }
  },
  methods: {
    getOption(res) {
      // 接收图表组件传来的option对象，将其转换为字符串形式
      res = JSON.stringify(res,null,2)
      // 拼接成要返回给编辑器内容的字符串格式，准备传给编辑器子组件
      this.scriptStr = `option = ${res};`
    },
  },
  created() {
    let str = 'option = {  title: {    text: \'Referer of a Website\',    subtext: \'Fake Data\',    left: \'center\'  },  tooltip: {    trigger: \'item\'  },  legend: {    orient: \'vertical\',    left: \'left\'  },  series: [    {      name: \'Access From\',      type: \'pie\',      radius: \'50%\',      data: [        { value: 1048, name: \'Search Engine\' },        { value: 735, name: \'Direct\' },        { value: 580, name: \'Email\' },        { value: 484, name: \'Union Ads\' },        { value: 300, name: \'Video Ads\' }      ],      emphasis: {        itemStyle: {          shadowBlur: 10,          shadowOffsetX: 0,          shadowColor: \'rgba(0, 0, 0, 0.5)\'        }      }    }  ]};'
    let strTest = js_beautify(str, {
      indent_size: 2,
      space_in_empty_paren: true
    })
    console.log(strTest);
  }
}
</script>

<style>

</style>
