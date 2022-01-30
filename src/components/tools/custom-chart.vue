<template>
    <div>
      <div ref="eCRef" style="width: 500px;height: 400px;"></div>
    </div>
</template>

<script>
export default {
  methods: {
    initChart() {
      let myChart = this.$echarts.init(this.$refs.eCRef);
      //配置图表
      let option = {
        title: {
          text: 'Title Test',
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
      myChart.setOption(option)
      // Save Instance
      this.chartInstance = myChart
      // Save option into chartOption, and chartOption is an object
      this.chartOption = option
    },
    sendOption() {
      this.$emit('sendOption', this.chartOption)
    }
  },
  mounted() {
    this.initChart();
    this.sendOption();
  }
}
</script>

<style>

</style>
