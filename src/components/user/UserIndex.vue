<template>
  <div>
    <el-form label-width="120px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="Title">
            <el-input v-model="title" auto-complete="off" placeholder="Title"></el-input>
          </el-form-item>
        </el-col>
        <el-button type="primary" style="width: 30%;background: #505458;border: none" v-on:click="addChart">Add Chart Template</el-button>
        <el-button type="primary" style="width: 30%;background: #505458;border: none" v-on:click="addChart">Download Chart Template</el-button>
      </el-row>
    </el-form>
    <el-row style="height: 850px; overflow: auto">
      <!--      <search-bar></search-bar>-->
      <el-tooltip effect="dark" placement="right"
                  disabled
                  v-for="item in charts"
                  :key="item.id">
        <el-card style="width: 290px;margin-bottom: 20px;height: 260px;float: left;margin-right: 15px" class="chart"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="cover" v-on:click="changeChart(item.data)">
          </div>
          <div class="info">
            <div class="title">
              <a>{{item.title}}</a>
            </div>
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  data () {
    return {
      title: '',
      charts: [
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-simple.webp?_v_=1635740497748',
          title: 'Basic Bar',
          type: 'bar',
          data: 'option = {\n' +
            '  xAxis: {\n' +
            '    type: \'category\',\n' +
            '    data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\n' +
            '  },\n' +
            '  yAxis: {\n' +
            '    type: \'value\'\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      data: [120, 200, 150, 80, 70, 110, 130],\n' +
            '      type: \'bar\'\n' +
            '    }\n' +
            '  ]\n' +
            '};'
        },
      ]
    }
  },
  mounted() {
    this.addChart()
  },
  methods: {
    changeChart(data) {
      this.$store.commit('setScriptStr', data)
      this.bus.$emit('sendScript',[data])
    },
    addChart() {
      console.log(this.charts)
      this.$axios
        .post('/user', {
          cover: '',
          title: this.title,
          type: '',
          data: this.$store.getters.getScriptStr,
        })
        .then(successResponse => {
          console.log(successResponse.data)
          this.charts = successResponse.data
          // this.charts = JSON.stringify(successResponse.data)
          // this.charts = this.charts.replace(/null/gm,"\"\"")
          // this.charts = this.charts.replace(/"(.*?)":"(.*?)"/gm,"$1:'$2'")
          // console.log(successResponse.data.chart.data)
          console.log(this.charts)
          if (successResponse.data.code === 200) {
            // console.log(successResponse)
            // console.log(successResponse.data)
            // console.log(successResponse.data.code)
            // var chartAttr = { data: '\'' + this.$store.getters.getScriptStr  +'\''};
            // this.charts.push(chartAttr)
            // console.log(this.charts)
            // this.$router.replace({path: '/preview'})
          }
        })
        .catch(failResponse => {

        })
    }
  }
}
</script>

<style scoped>
.cover {
  width: 290px;
  height: 217.5px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 290px;
  height: 217.5px;
  /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.button {
  font-size: 14px;
  text-align: right;
  margin-right: 0px;
}

.type {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #293c55;
}
</style>
