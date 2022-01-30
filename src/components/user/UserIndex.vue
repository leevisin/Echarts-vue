<template>
  <div class="screen-container">
    <!--      <div class="screen-header">-->
    <!--        <ace :option="scriptStr"></ace>-->
    <!--      </div>-->
    <div class="screen-body">
      <div ref="chartRef" style="width: 500px;height: 400px;" @sendOption=getOption></div>
    </div>
  </div>
  <!--    <div>-->
  <!--      <div id="components-demo">-->
  <!--        <button-counter></button-counter>-->
  <!--        <button-counter></button-counter>-->
  <!--        <button-counter></button-counter>-->
  <!--        <button-counter></button-counter>-->
  <!--      </div>-->
  <!--      <div>-->
  <!--        <blog-post title="My journey with Vue"></blog-post>-->
  <!--        <blog-post title="Blogging with Vue"></blog-post>-->
  <!--        <blog-post title="Why Vue is so fun"></blog-post>-->
  <!--      </div>-->
  <!--      <blog-post-->
  <!--        v-for="post in posts"-->
  <!--        v-bind:key="post.id"-->
  <!--        v-bind:title="post.title"-->
  <!--      ></blog-post>-->
  <!--    <ace value="Test"></ace>-->
  <!--    </div>-->
</template>

<script>
export default {
  name: 'UserIndex',
  data() {
    return {
      title: 'Echarts入门示例'
    }
  },
  methods: {
    initChart() {
      let myChart = this.$echarts.init(this.$refs.chartRef);
      //配置图表
      let option = {
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
      myChart.setOption(option)
      // Save Instance
      this.chartInstance = myChart
      // Save option into chartOption, and chartOption is an object
      this.chartOption = option
    }
  },
  sendOption() {
    this.$emit('sendOption', this.chartOption)
  },
  mounted() {
    this.initChart();
  }
}
</script>

<style>

</style>
