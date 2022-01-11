<template>
  <div className="Echarts">
    <div id="main" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: 'PreviewImg',
  data() {
    return {
      chart: ''
    }
  },
  props: {
    id: {
      type: String
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "800px"
    },
    option: {
      type: Object,
      default() {
        return {
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
            type: 'pie',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    }
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(document.getElementById('main'));
      this.chart.setOption(this.option);
      window.addEventListener("resize", this.chart.resize);
    }
  },
  computed: {
    style() {
      return {
        height: this.height,
        width:  this.width
      }
    }
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal);
          } else {
            this.chart.setOption(oldVal);
          }
        } else {
          this.init();
        }
      },
      deep: true //对象内部属性的监听，关键。
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style>

</style>
