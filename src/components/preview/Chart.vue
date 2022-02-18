<template>
  <div>
    <el-row style="height: 800px;">
<!--      <search-bar></search-bar>-->
      <el-tooltip effect="dark" placement="right"
                  disabled
                  v-for="item in charts"
                  :key="item.id">
        <el-card style="width: 290px;margin-bottom: 20px;height: 260px;float: left;margin-right: 15px" class="chart"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="cover" v-on:click="changeChart(item.type, item.data)">
          </div>
          <div class="info">
            <div class="title">
              <a>{{item.title}}</a>
            </div>
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
<!--    <el-row>-->
<!--      <el-pagination-->
<!--        :current-page="1"-->
<!--        :page-size="10"-->
<!--        :total="20">-->
<!--      </el-pagination>-->
<!--    </el-row>-->
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data () {
    return {
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
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1635740497748',
          title: 'Basic Pie',
          type: 'pie',
          data: 'option = {\n' +
            '  title: {\n' +
            '    text: \'Referer of a Website\',\n' +
            '    subtext: \'Fake Data\',\n' +
            '    left: \'center\'\n' +
            '  },\n' +
            '  tooltip: {\n' +
            '    trigger: \'item\'\n' +
            '  },\n' +
            '  legend: {\n' +
            '    orient: \'vertical\',\n' +
            '    left: \'left\'\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      name: \'Access From\',\n' +
            '      type: \'pie\',\n' +
            '      radius: \'50%\',\n' +
            '      data: [\n' +
            '        { value: 1048, name: \'Search Engine\' },\n' +
            '        { value: 735, name: \'Direct\' },\n' +
            '        { value: 580, name: \'Email\' },\n' +
            '        { value: 484, name: \'Union Ads\' },\n' +
            '        { value: 300, name: \'Video Ads\' }\n' +
            '      ],\n' +
            '      emphasis: {\n' +
            '        itemStyle: {\n' +
            '          shadowBlur: 10,\n' +
            '          shadowOffsetX: 0,\n' +
            '          shadowColor: \'rgba(0, 0, 0, 0.5)\'\n' +
            '        }\n' +
            '      }\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.webp?_v_=1643452312113',
          title: 'Basic Line Chart',
          type: 'line',
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
            '      data: [150, 230, 224, 218, 135, 147, 260],\n' +
            '      type: \'line\'\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://echarts.apache.org/examples/data/thumb/sunburst-simple.webp?_v_=1643452312113',
          title: 'Basic Sunburst',
          type: 'sunburst',
          data: 'var dataSunburst = [\n' +
            '  {\n' +
            '    name: \'Grandpa\',\n' +
            '    children: [\n' +
            '      {\n' +
            '        name: \'Uncle Leo\',\n' +
            '        value: 15,\n' +
            '        children: [\n' +
            '          {\n' +
            '            name: \'Cousin Jack\',\n' +
            '            value: 2\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'Cousin Mary\',\n' +
            '            value: 5,\n' +
            '            children: [\n' +
            '              {\n' +
            '                name: \'Jackson\',\n' +
            '                value: 2\n' +
            '              }\n' +
            '            ]\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'Cousin Ben\',\n' +
            '            value: 4\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        name: \'Father\',\n' +
            '        value: 10,\n' +
            '        children: [\n' +
            '          {\n' +
            '            name: \'Me\',\n' +
            '            value: 5\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'Brother Peter\',\n' +
            '            value: 1\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  },\n' +
            '  {\n' +
            '    name: \'Nancy\',\n' +
            '    children: [\n' +
            '      {\n' +
            '        name: \'Uncle Nike\',\n' +
            '        children: [\n' +
            '          {\n' +
            '            name: \'Cousin Betty\',\n' +
            '            value: 1\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'Cousin Jenny\',\n' +
            '            value: 2\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  }\n' +
            '];\n' +
            'option = {\n' +
            '  series: {\n' +
            '    type: \'sunburst\',\n' +
            '    // emphasis: {\n' +
            '    //     focus: \'ancestor\'\n' +
            '    // },\n' +
            '    data: dataSunburst,\n' +
            '    radius: [0, \'90%\'],\n' +
            '    label: {\n' +
            '      rotate: \'radial\'\n' +
            '    }\n' +
            '  }\n' +
            '};',
        },
        {
          cover: 'https://echarts.apache.org/examples/data/thumb/pie-roseType-simple.webp?_v_=1643452312113',
          title: 'Nightingale Chart',
          type: 'pie',
          data: 'option = {\n' +
            '  legend: {\n' +
            '    top: \'bottom\'\n' +
            '  },\n' +
            '  toolbox: {\n' +
            '    show: true,\n' +
            '    feature: {\n' +
            '      mark: { show: true },\n' +
            '      dataView: { show: true, readOnly: false },\n' +
            '      restore: { show: true },\n' +
            '      saveAsImage: { show: true }\n' +
            '    }\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      name: \'Nightingale Chart\',\n' +
            '      type: \'pie\',\n' +
            '      radius: [50, 250],\n' +
            '      center: [\'50%\', \'50%\'],\n' +
            '      roseType: \'area\',\n' +
            '      itemStyle: {\n' +
            '        borderRadius: 8\n' +
            '      },\n' +
            '      data: [\n' +
            '        { value: 40, name: \'rose 1\' },\n' +
            '        { value: 38, name: \'rose 2\' },\n' +
            '        { value: 32, name: \'rose 3\' },\n' +
            '        { value: 30, name: \'rose 4\' },\n' +
            '        { value: 28, name: \'rose 5\' },\n' +
            '        { value: 26, name: \'rose 6\' },\n' +
            '        { value: 22, name: \'rose 7\' },\n' +
            '        { value: 18, name: \'rose 8\' }\n' +
            '      ]\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
      ]
    }
  },
  methods: {
    changeChart(type, data) {
      this.$store.commit('setType', type)
      // console.log(type)
      // let strTmp = this.$store.getters.getScriptStr
      // if (strTmp.match(/'type': 'line'|type: 'line'|'type': 'bar'|type: 'bar'|'type': 'pie'|type: 'pie'/gm) != null) {
      //   strTmp = strTmp.replace(/'type': 'line'|type: 'line'|'type': 'bar'|type: 'bar'|'type': 'pie'|type: 'pie'/gm, "type: '" + type + "'")
      // }
      // console.log(strTmp)
      this.$store.commit('setScriptStr', data)
      this.$store.commit('setType', type)
      this.bus.$emit('sendScript',[data])
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

