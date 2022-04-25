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
          `myChart.clear();option && myChart.setOption(option);this.downloadFile(myChart);`
        ).bind(this)
        func(this.$echarts, this.$ecStat)
      } catch (e) {
        // print error information
        console.log(e)
      }
    },
    // click to download img but now for getting img URL
    downloadFile(myChart) {
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
      const sleepToRun = async () => {
        await sleep(3000)
        let aLink = document.createElement('a');
        let blob = this.base64ToBlob(myChart);
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent('click', true, true);
        aLink.download = "Echarts"; // Save Img Name
        aLink.href = URL.createObjectURL(blob);
        this.$store.commit('setCover', aLink.href)
        // aLink.click(); // Use for download
      }
      sleepToRun()

    },
    exportImg(myChart) {
      // return url based base64
      return myChart.getDataURL({
        type: 'png',
        pixelRatio: 1,
        backgroundColor: '#fff'
      })
    },
    base64ToBlob(myChart) {
      // change base64 to blob
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
