<template>
  <div>
    <el-row style="height: 850px; overflow: auto">
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
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/scatter-simple.webp?_v_=1643452312113',
          title: 'Basic Scatter Chart',
          type: 'scatter',
          data: 'option = {\n' +
            '  xAxis: {},\n' +
            '  yAxis: {},\n' +
            '  series: [\n' +
            '    {\n' +
            '      symbolSize: 20,\n' +
            '      data: [\n' +
            '        [10.0, 8.04],\n' +
            '        [8.07, 6.95],\n' +
            '        [13.0, 7.58],\n' +
            '        [9.05, 8.81],\n' +
            '        [11.0, 8.33],\n' +
            '        [14.0, 7.66],\n' +
            '        [13.4, 6.81],\n' +
            '        [10.0, 6.33],\n' +
            '        [14.0, 8.96],\n' +
            '        [12.5, 6.82],\n' +
            '        [9.15, 7.2],\n' +
            '        [11.5, 7.2],\n' +
            '        [3.03, 4.23],\n' +
            '        [12.2, 7.83],\n' +
            '        [2.02, 4.47],\n' +
            '        [1.05, 3.33],\n' +
            '        [4.05, 4.96],\n' +
            '        [6.03, 7.24],\n' +
            '        [12.0, 6.26],\n' +
            '        [12.0, 8.84],\n' +
            '        [7.08, 5.82],\n' +
            '        [5.02, 5.68]\n' +
            '      ],\n' +
            '      type: \'scatter\'\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/candlestick-simple.webp?_v_=1643452312113',
          title: 'Basic Candlestick',
          type: 'candlestick',
          data: 'option = {\n' +
            '  xAxis: {\n' +
            '    data: [\'2017-10-24\', \'2017-10-25\', \'2017-10-26\', \'2017-10-27\']\n' +
            '  },\n' +
            '  yAxis: {},\n' +
            '  series: [\n' +
            '    {\n' +
            '      type: \'candlestick\',\n' +
            '      data: [\n' +
            '        [20, 34, 10, 38],\n' +
            '        [40, 35, 30, 50],\n' +
            '        [31, 38, 33, 44],\n' +
            '        [38, 15, 5, 42]\n' +
            '      ]\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/radar.webp?_v_=1647510965663',
          title: 'Basic Radar Chart',
          type: 'radar',
          data: 'option = {\n' +
            '  title: {\n' +
            '    text: \'Basic Radar Chart\'\n' +
            '  },\n' +
            '  legend: {\n' +
            '    data: [\'Allocated Budget\', \'Actual Spending\']\n' +
            '  },\n' +
            '  radar: {\n' +
            '    // shape: \'circle\',\n' +
            '    indicator: [\n' +
            '      { name: \'Sales\', max: 6500 },\n' +
            '      { name: \'Administration\', max: 16000 },\n' +
            '      { name: \'Information Technology\', max: 30000 },\n' +
            '      { name: \'Customer Support\', max: 38000 },\n' +
            '      { name: \'Development\', max: 52000 },\n' +
            '      { name: \'Marketing\', max: 25000 }\n' +
            '    ]\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      name: \'Budget vs spending\',\n' +
            '      type: \'radar\',\n' +
            '      data: [\n' +
            '        {\n' +
            '          value: [4200, 3000, 20000, 35000, 50000, 18000],\n' +
            '          name: \'Allocated Budget\'\n' +
            '        },\n' +
            '        {\n' +
            '          value: [5000, 14000, 28000, 26000, 42000, 21000],\n' +
            '          name: \'Actual Spending\'\n' +
            '        }\n' +
            '      ]\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/treemap-simple.webp?_v_=1647510965663',
          title: 'Basic Treemap',
          type: 'treemap',
          data: 'option = {\n' +
            '  series: [\n' +
            '    {\n' +
            '      type: \'treemap\',\n' +
            '      data: [\n' +
            '        {\n' +
            '          name: \'nodeA\',\n' +
            '          value: 10,\n' +
            '          children: [\n' +
            '            {\n' +
            '              name: \'nodeAa\',\n' +
            '              value: 4\n' +
            '            },\n' +
            '            {\n' +
            '              name: \'nodeAb\',\n' +
            '              value: 6\n' +
            '            }\n' +
            '          ]\n' +
            '        },\n' +
            '        {\n' +
            '          name: \'nodeB\',\n' +
            '          value: 20,\n' +
            '          children: [\n' +
            '            {\n' +
            '              name: \'nodeBa\',\n' +
            '              value: 20,\n' +
            '              children: [\n' +
            '                {\n' +
            '                  name: \'nodeBa1\',\n' +
            '                  value: 20\n' +
            '                }\n' +
            '              ]\n' +
            '            }\n' +
            '          ]\n' +
            '        }\n' +
            '      ]\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/heatmap-cartesian.webp?_v_=1647510965663',
          title: 'Heatmap on Cartesian',
          type: 'heatmap',
          data: '// prettier-ignore\n' +
            'const hours = [\n' +
            '    \'12a\', \'1a\', \'2a\', \'3a\', \'4a\', \'5a\', \'6a\',\n' +
            '    \'7a\', \'8a\', \'9a\', \'10a\', \'11a\',\n' +
            '    \'12p\', \'1p\', \'2p\', \'3p\', \'4p\', \'5p\',\n' +
            '    \'6p\', \'7p\', \'8p\', \'9p\', \'10p\', \'11p\'\n' +
            '];\n' +
            '// prettier-ignore\n' +
            'const days = [\n' +
            '    \'Saturday\', \'Friday\', \'Thursday\',\n' +
            '    \'Wednesday\', \'Tuesday\', \'Monday\', \'Sunday\'\n' +
            '];\n' +
            '// prettier-ignore\n' +
            'const data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]\n' +
            '    .map(function (item) {\n' +
            '    return [item[1], item[0], item[2] || \'-\'];\n' +
            '});\n' +
            'option = {\n' +
            '  tooltip: {\n' +
            '    position: \'top\'\n' +
            '  },\n' +
            '  grid: {\n' +
            '    height: \'50%\',\n' +
            '    top: \'10%\'\n' +
            '  },\n' +
            '  xAxis: {\n' +
            '    type: \'category\',\n' +
            '    data: hours,\n' +
            '    splitArea: {\n' +
            '      show: true\n' +
            '    }\n' +
            '  },\n' +
            '  yAxis: {\n' +
            '    type: \'category\',\n' +
            '    data: days,\n' +
            '    splitArea: {\n' +
            '      show: true\n' +
            '    }\n' +
            '  },\n' +
            '  visualMap: {\n' +
            '    min: 0,\n' +
            '    max: 10,\n' +
            '    calculable: true,\n' +
            '    orient: \'horizontal\',\n' +
            '    left: \'center\',\n' +
            '    bottom: \'15%\'\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      name: \'Punch Card\',\n' +
            '      type: \'heatmap\',\n' +
            '      data: data,\n' +
            '      label: {\n' +
            '        show: true\n' +
            '      },\n' +
            '      emphasis: {\n' +
            '        itemStyle: {\n' +
            '          shadowBlur: 10,\n' +
            '          shadowColor: \'rgba(0, 0, 0, 0.5)\'\n' +
            '        }\n' +
            '      }\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
        cover: 'https://s2.loli.net/2022/02/21/yZmcWLwtJsTxgFQ.png',
        title: 'Word Cloud',
        type: 'wordCloud',
        data: 'option = {\n' +
          '    title: {\n' +
          '        text: "Hot Word",\n' +
          '        textStyle: {\n' +
          '            color: "#148D75",\n' +
          '        },\n' +
          '        top: 14,\n' +
          '        left: 26,\n' +
          '    },\n' +
          '    series: [{\n' +
          '        type: "wordCloud",\n' +
          '        size: ["80%", "80%"],\n' +
          '        rotationRange: [-90, 90],\n' +
          '        textPadding: 0,\n' +
          '        autoSize: {\n' +
          '            enable: true,\n' +
          '            minSize: 14,\n' +
          '        },\n' +
          '        left: "center",\n' +
          '        top: "center",\n' +
          '        right: null,\n' +
          '        bottom: null,\n' +
          '        textStyle: {\n' +
          '           color: function() {\n' +
          '                return \'rgb(\' + [\n' +
          '                       Math.round(Math.random() * 160),\n' +
          '                       Math.round(Math.random() * 160),\n' +
          '                       Math.round(Math.random() * 160)\n' +
          '                    ].join(\',\') + \')\';\n' +
          '            },\n' +
          '        },\n' +
          '        data: [{\n' +
          '            name: \'Big Data\',\n' +
          '            value: 2181\n' +
          '        }, {\n' +
          '            name: \'Cloud Computing\',\n' +
          '            value: 1386\n' +
          '        }, {\n' +
          '            name: \'Internet of Things\',\n' +
          '            value: 2055\n' +
          '        }, {\n' +
          '            name: \'Mobile Internet\',\n' +
          '            value: 2467\n' +
          '        }, {\n' +
          '            name: \'Artificial Intelligence\',\n' +
          '            value: 2244\n' +
          '        }, {\n' +
          '            name: \'Deep Learning\',\n' +
          '            value: 1898\n' +
          '        }, {\n' +
          '            name: \'Machine Learning\',\n' +
          '            value: 1484\n' +
          '        }, {\n' +
          '            name: \'Blockchain\',\n' +
          '            value: 3865\n' +
          '        }, {\n' +
          '            name: \'Internet Plus\',\n' +
          '            value: 2222\n' +
          '        }, {\n' +
          '            name: \'Smart Contract\',\n' +
          '            value: 366\n' +
          '        }, {\n' +
          '            name: \'Bitcoin\',\n' +
          '            value: 360\n' +
          '        }, {\n' +
          '            name: \'Data Mining\',\n' +
          '            value: 273\n' +
          '        }],\n' +
          '    },\n' +
          '    ],\n' +
          '};'
        },
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dataset-simple0.webp?_v_=1647510965663',
          title: 'Simple Bar of Dataset',
          type: 'bar',
          data: 'option = {\n' +
            '  legend: {},\n' +
            '  tooltip: {},\n' +
            '  dataset: {\n' +
            '    source: [\n' +
            '      [\'Group\', \'Group1\', \'Group2\', \'Group3\'],\n' +
            '      [\'Mon\', 724, 403, 241],\n' +
            '      [\'Tue\', 434, 527, 247],\n' +
            '      [\'Wed\', 846, 288, 307],\n' +
            '      [\'Thu\', 893, 492, 255],\n' +
            '      [\'Fri\', 921, 623, 155],\n' +
            '      [\'Sat\', 747, 630, 185],\n' +
            '      [\'Sun\', 967, 361, 233],\n' +
            '    ]\n' +
            '  },\n' +
            '  xAxis: { type: \'category\' },\n' +
            '  yAxis: {},\n' +
            '  series: [{ type: \'bar\' }, { type: \'bar\' }, { type: \'bar\' }]\n' +
            '};',
        },
        {
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-stack.webp?_v_=1647510965663',
          title: 'Simple Line of Dataset',
          type: 'line',
          data: 'option = {\n' +
            '  title: {\n' +
            '    text: \'Stacked Line\'\n' +
            '  },\n' +
            '  tooltip: {\n' +
            '    trigger: \'axis\'\n' +
            '  },\n' +
            '  legend: {\n' +
            '    data: [\'Email\', \'Union Ads\', \'Video Ads\', \'Direct\', \'Search Engine\']\n' +
            '  },\n' +
            '  grid: {\n' +
            '    left: \'3%\',\n' +
            '    right: \'4%\',\n' +
            '    bottom: \'3%\',\n' +
            '    containLabel: true\n' +
            '  },\n' +
            '  toolbox: {\n' +
            '    feature: {\n' +
            '      saveAsImage: {}\n' +
            '    }\n' +
            '  },\n' +
            '  xAxis: {\n' +
            '    type: \'category\',\n' +
            '    boundaryGap: false,\n' +
            '    data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\n' +
            '  },\n' +
            '  yAxis: {\n' +
            '    type: \'value\'\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      name: \'Email\',\n' +
            '      type: \'line\',\n' +
            '      stack: \'Total\',\n' +
            '      data: [120, 132, 101, 134, 90, 230, 210]\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'Union Ads\',\n' +
            '      type: \'line\',\n' +
            '      stack: \'Total\',\n' +
            '      data: [220, 182, 191, 234, 290, 330, 310]\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'Video Ads\',\n' +
            '      type: \'line\',\n' +
            '      stack: \'Total\',\n' +
            '      data: [150, 232, 201, 154, 190, 330, 410]\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'Direct\',\n' +
            '      type: \'line\',\n' +
            '      stack: \'Total\',\n' +
            '      data: [320, 332, 301, 334, 390, 330, 320]\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'Search Engine\',\n' +
            '      type: \'line\',\n' +
            '      stack: \'Total\',\n' +
            '      data: [820, 932, 901, 934, 1290, 1330, 1320]\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://s2.loli.net/2022/03/29/yXkerYpuv8qbsi9.png',
          title: 'Simple Scatter of Dataset',
          type: 'scatter',
          data: 'option = {\n' +
            '    xAxis: {},\n' +
            '    yAxis: {},\n' +
            '    legend: {\n' +
            '        data: [\'Group1\',\'Group2\']\n' +
            '    },\n' +
            '    series: [{\n' +
            '        name: \'Group1\',\n' +
            '        data: [\n' +
            '            [2.0, 8.04],\n' +
            '            [3.0, 6.95],\n' +
            '            [23.0, 7.58],\n' +
            '            [18.0, 8.81],\n' +
            '            [12.0, 8.33],\n' +
            '            [4.0, 9.96],\n' +
            '            [16.0, 7.24],\n' +
            '            [14.0, 4.26],\n' +
            '            [12.0, 10.84],\n' +
            '            [10.0, 4.82],\n' +
            '            [7.0, 5.68]\n' +
            '        ],\n' +
            '        type: \'scatter\'\n' +
            '    },\n' +
            '    {\n' +
            '        name: \'Group2\',\n' +
            '        data: [\n' +
            '            [1.0, 2.04],\n' +
            '            [2.0, 15.95],\n' +
            '            [26.0, 17.58],\n' +
            '            [13.0, 7.81],\n' +
            '            [22.0, 5.33],\n' +
            '            [14.0, 9.96],\n' +
            '            [6.0, 4.24],\n' +
            '            [4.0, 4.26],\n' +
            '            [22.0, 13.84],\n' +
            '            [16.0, 14.82],\n' +
            '            [17.0, 15.68]\n' +
            '    ],\n' +
            '        type: \'scatter\'\n' +
            '    }\n' +
            '    ]\n' +
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

