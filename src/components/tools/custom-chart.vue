<template>
    <div>
<!--      <button @click="downloadFile">DownLoad</button>-->
      <div ref="chartRef" id="Chart" style="width: 1200px;height: 880px;"></div>
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
          `myChart.clear();option && myChart.setOption(option);this.downloadFile(myChart);`
        ).bind(this)
        func(this.$echarts, this.$ecStat)
      } catch (e) {
        // 打印错误信息
        console.log(e)
      }
    },
    // Click to download img but now for getting img URL
    downloadFile(myChart) {
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
      const sleepToRun = async () => {
        await sleep(1500)
        let aLink = document.createElement('a');
        let blob = this.base64ToBlob(myChart);
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent('click', true, true);
        aLink.download = "Echarts"; // Save Img Name
        aLink.href = URL.createObjectURL(blob);
        console.log(aLink.href)
        this.$store.commit('setCover', aLink.href)
        // aLink.click(); // Use for download
      }
      sleepToRun()

    },
    exportImg(myChart) { // Echart返回一个 base64 的 URL
      return myChart.getDataURL({
        type: 'png',
        pixelRatio: 1,
        backgroundColor: '#fff'
      })
    },
    base64ToBlob(myChart) { //将base64转换blob
      let img = this.exportImg(myChart);
      let parts = img.split(';base64,');
      let contentType = parts[0].split(':')[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
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

    // 接收编辑器组件传来的新的图表配置信息代码
    this.bus.$on('sendScript', res => {
      this.chartOption = res[0]
      if (res[1] === null) {
        // 如果接收到的excel表格数据为空，说明可能已经在编辑器内容中定义好了data数据源，不用再做字符串拼接，那么直接渲染图表
        this.changeChart(this.chartOption)
      } else {
        // 如果表格数据不为空，则说明需要做字符串拼接，否则运行后会报data未定义，之后再渲染图表
        // this.chartOption = `let data = ` + JSON.stringify(res[1]) + ';' + '\n' + res[0]
        // console.log(this.chartOption)
        this.changeChart(this.chartOption)
      }
    })
  }
}
</script>

<style>

</style>
