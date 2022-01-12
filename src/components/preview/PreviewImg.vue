<template>
  <div className="Echarts">
    <div id="main" style="width: auto;height: 800px;"></div>
  </div>
</template>

<script>
export default {
  name: 'PreviewImg',
  data() {
    return {
      title: 'Echarts入门示例'
    }
  },
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById('main'));
      //配置图表
      var option = {
        title: {
          text: this.$store.getters.getTitle,
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style>

</style>
