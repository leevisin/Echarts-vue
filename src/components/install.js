// 这个就是自己写的 ACE 组件
import ACE from '../components/tools/custom-ace.vue'
import CHART from '../components/tools/custom-chart.vue'

export default {
  install: function (Vue, options) {
    // 引号中的字符串就是之后的组件标签名，即 <ace></ace>
    Vue.component('ace', ACE)
    Vue.component('chart',CHART)
    Vue.component('button-counter', {
      data: function () {
        return {
          count: 0
        }
      },
      template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })
    Vue.component('blog-post', {
      props: ['title'],
      template: '<h3>{{ title }}</h3>'
    })
  }
}
