<template>
    <div>
      <div ref="chartRef" style="width: 500px;height: 400px;"></div>
    </div>
</template>

<script>
export default {
  methods: {
    initChart() {
      let myChart = this.$echarts.init(this.$refs.chartRef);
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
    },
    changeChart(script) {
      // 用echarts时，如果不存在DOM，就会报错，处理方法先检查是否DOM存在：
      if (this.$refs.chartRef == null) {
        return
      }
      // 用echarts时，如果存在DOM，就会报存在警告，处理方法删除DOM：
      this.$echarts.dispose(this.$refs.chartRef)
      try {
        let func = new Function(
          'echarts',
          'ecStat',
          `const ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';var option;let myChart = echarts.init(this.$refs.chartRef);` +
          script +
          `myChart.clear();option && myChart.setOption(option);`
        ).bind(this)
        func(this.$echarts, this.$ecStat)
      } catch (e) {
        // 打印错误信息
        console.log(e)
      }
    },
  },
  mounted() {
    this.initChart();
    this.sendOption();
    // 接收编辑器组件传来的新的图表配置信息代码
    this.bus.$on('sendScript', res => {
      // 保存给图表组件的chartOption
      this.chartOption = res
      // 传入新的配置代码，重新渲染图表
      this.changeChart(this.chartOption)
    })
  }
}
</script>

<style>

</style>
