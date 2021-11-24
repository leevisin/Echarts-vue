<template>
  <div className="Echarts">
    <div id="main" style="width: auto;height: 800px;"></div>
<!--    <el-input type="text" v-model="title" auto-complete="off" placeholder="title"></el-input>-->
<!--    <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="update">Update</el-button>-->
  </div>
</template>

<script>
export default {
  name: 'PreviewImg',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    // update() {
    //   this.$axios
    //     .post('/update', {
    //       title: this.$store.state.userAge
    //     })
    //     .then(successResponse => {
    //       this.title = successResponse.data.title
    //       this.myEcharts();
    //     })
    //     .catch(failResponse => {
    //
    //       }
    //     )
    // },
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById('main'));
      //配置图表
      var option = {
        title: {
          text: this.$store.state.title,
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
  computed: {

  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style>

</style>
