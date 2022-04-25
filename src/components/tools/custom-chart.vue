<template>
    <div>
      <div ref="chartRef" id="Chart" style="width: 1200px;height: 880px;"></div>
    </div>
</template>

<script>
export default {
  methods: {
    initChart() {
      let myChart = this.$echarts.init(this.$refs.chartRef);
      // Chart Configuration
      let option = {
        title: {
          text: 'Title Test',
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      myChart.setOption(option)
      // Save Instance
      this.chartInstance = myChart
      // Save option into chartOption, and chartOption is an object
      this.chartOption = option
      // Have initialized to set the flag
      this.$store.commit('setInit','1')
    },
    sendOption() {
      this.$emit('sendOption', this.chartOption)
    },
    changeChart(script) {
      // check DOM is exist, error if not
      if (this.$refs.chartRef == null) {
        return
      }
      // warning if DOM is exist, dispose to ignore warning
      this.$echarts.dispose(this.$refs.chartRef)
      try {
        let func = new Function(
          'echarts',
          'ecStat',
          `const ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';var option;let myChart = echarts.init(this.$refs.chartRef);` +
          script +
          `myChart.clear();option && myChart.setOption(option);this.$store.commit("setType", myChart)`
        ).bind(this)
        func(this.$echarts, this.$ecStat)
      } catch (e) {
        // print error information
        console.log(e)
      }

    },

  },
  mounted() {
    // this.$store.getters.getInit == '0' is the first time else not
    if (this.$store.getters.getInit == '0') {
      this.initChart();
      this.sendOption();
    } else {
      this.initChart();
      this.changeChart(this.$store.getters.getScriptStr);
    }

    // get chart component code from editor
    this.bus.$on('sendScript', res => {
      this.chartOption = res[0]
      if (res[1] === null) {
        // if Excel data is null
        this.changeChart(this.chartOption)
      } else {
        // if Excel data is not null
        // this.chartOption = `let data = ` + JSON.stringify(res[1]) + ';' + '\n' + res[0]
        this.changeChart(this.chartOption)
      }
    })
  }
}
</script>

<style>

</style>
