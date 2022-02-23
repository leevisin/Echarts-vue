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
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-borderRadius.webp?_v_=1643452312113',
          title: 'Doughnut Chart with Rounded Corner',
          type: 'pie',
          data: 'option = {\n' +
            '  tooltip: {\n' +
            '    trigger: \'item\'\n' +
            '  },\n' +
            '  legend: {\n' +
            '    top: \'5%\',\n' +
            '    left: \'center\'\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      name: \'Access From\',\n' +
            '      type: \'pie\',\n' +
            '      radius: [\'40%\', \'70%\'],\n' +
            '      avoidLabelOverlap: false,\n' +
            '      itemStyle: {\n' +
            '        borderRadius: 10,\n' +
            '        borderColor: \'#fff\',\n' +
            '        borderWidth: 2\n' +
            '      },\n' +
            '      label: {\n' +
            '        show: false,\n' +
            '        position: \'center\'\n' +
            '      },\n' +
            '      emphasis: {\n' +
            '        label: {\n' +
            '          show: true,\n' +
            '          fontSize: \'40\',\n' +
            '          fontWeight: \'bold\'\n' +
            '        }\n' +
            '      },\n' +
            '      labelLine: {\n' +
            '        show: false\n' +
            '      },\n' +
            '      data: [\n' +
            '        { value: 1048, name: \'Search Engine\' },\n' +
            '        { value: 735, name: \'Direct\' },\n' +
            '        { value: 580, name: \'Email\' },\n' +
            '        { value: 484, name: \'Union Ads\' },\n' +
            '        { value: 300, name: \'Video Ads\' }\n' +
            '      ]\n' +
            '    }\n' +
            '  ]\n' +
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
            '    data: dataSunburst,\n' +
            '    radius: [0, \'90%\'],\n' +
            '    label: {\n' +
            '      rotate: \'radial\'\n' +
            '    }\n' +
            '  }\n' +
            '};',
        },{
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
          cover: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/candlestick-sh.webp?_v_=1643452312113',
          title: 'ShangHai Index',
          type: 'line',
          data: 'const upColor = \'#ec0000\';\n' +
            'const upBorderColor = \'#8A0000\';\n' +
            'const downColor = \'#00da3c\';\n' +
            'const downBorderColor = \'#008F28\';\n' +
            '// Each item: open，close，lowest，highest\n' +
            'const data0 = splitData([\n' +
            '  [\'2013/1/24\', 2320.26, 2320.26, 2287.3, 2362.94],\n' +
            '  [\'2013/1/25\', 2300, 2291.3, 2288.26, 2308.38],\n' +
            '  [\'2013/1/28\', 2295.35, 2346.5, 2295.35, 2346.92],\n' +
            '  [\'2013/1/29\', 2347.22, 2358.98, 2337.35, 2363.8],\n' +
            '  [\'2013/1/30\', 2360.75, 2382.48, 2347.89, 2383.76],\n' +
            '  [\'2013/1/31\', 2383.43, 2385.42, 2371.23, 2391.82],\n' +
            '  [\'2013/2/1\', 2377.41, 2419.02, 2369.57, 2421.15],\n' +
            '  [\'2013/2/4\', 2425.92, 2428.15, 2417.58, 2440.38],\n' +
            '  [\'2013/2/5\', 2411, 2433.13, 2403.3, 2437.42],\n' +
            '  [\'2013/2/6\', 2432.68, 2434.48, 2427.7, 2441.73],\n' +
            '  [\'2013/2/7\', 2430.69, 2418.53, 2394.22, 2433.89],\n' +
            '  [\'2013/2/8\', 2416.62, 2432.4, 2414.4, 2443.03],\n' +
            '  [\'2013/2/18\', 2441.91, 2421.56, 2415.43, 2444.8],\n' +
            '  [\'2013/2/19\', 2420.26, 2382.91, 2373.53, 2427.07],\n' +
            '  [\'2013/2/20\', 2383.49, 2397.18, 2370.61, 2397.94],\n' +
            '  [\'2013/2/21\', 2378.82, 2325.95, 2309.17, 2378.82],\n' +
            '  [\'2013/2/22\', 2322.94, 2314.16, 2308.76, 2330.88],\n' +
            '  [\'2013/2/25\', 2320.62, 2325.82, 2315.01, 2338.78],\n' +
            '  [\'2013/2/26\', 2313.74, 2293.34, 2289.89, 2340.71],\n' +
            '  [\'2013/2/27\', 2297.77, 2313.22, 2292.03, 2324.63],\n' +
            '  [\'2013/2/28\', 2322.32, 2365.59, 2308.92, 2366.16],\n' +
            '  [\'2013/3/1\', 2364.54, 2359.51, 2330.86, 2369.65],\n' +
            '  [\'2013/3/4\', 2332.08, 2273.4, 2259.25, 2333.54],\n' +
            '  [\'2013/3/5\', 2274.81, 2326.31, 2270.1, 2328.14],\n' +
            '  [\'2013/3/6\', 2333.61, 2347.18, 2321.6, 2351.44],\n' +
            '  [\'2013/3/7\', 2340.44, 2324.29, 2304.27, 2352.02],\n' +
            '  [\'2013/3/8\', 2326.42, 2318.61, 2314.59, 2333.67],\n' +
            '  [\'2013/3/11\', 2314.68, 2310.59, 2296.58, 2320.96],\n' +
            '  [\'2013/3/12\', 2309.16, 2286.6, 2264.83, 2333.29],\n' +
            '  [\'2013/3/13\', 2282.17, 2263.97, 2253.25, 2286.33],\n' +
            '  [\'2013/3/14\', 2255.77, 2270.28, 2253.31, 2276.22],\n' +
            '  [\'2013/3/15\', 2269.31, 2278.4, 2250, 2312.08],\n' +
            '  [\'2013/3/18\', 2267.29, 2240.02, 2239.21, 2276.05],\n' +
            '  [\'2013/3/19\', 2244.26, 2257.43, 2232.02, 2261.31],\n' +
            '  [\'2013/3/20\', 2257.74, 2317.37, 2257.42, 2317.86],\n' +
            '  [\'2013/3/21\', 2318.21, 2324.24, 2311.6, 2330.81],\n' +
            '  [\'2013/3/22\', 2321.4, 2328.28, 2314.97, 2332],\n' +
            '  [\'2013/3/25\', 2334.74, 2326.72, 2319.91, 2344.89],\n' +
            '  [\'2013/3/26\', 2318.58, 2297.67, 2281.12, 2319.99],\n' +
            '  [\'2013/3/27\', 2299.38, 2301.26, 2289, 2323.48],\n' +
            '  [\'2013/3/28\', 2273.55, 2236.3, 2232.91, 2273.55],\n' +
            '  [\'2013/3/29\', 2238.49, 2236.62, 2228.81, 2246.87],\n' +
            '  [\'2013/4/1\', 2229.46, 2234.4, 2227.31, 2243.95],\n' +
            '  [\'2013/4/2\', 2234.9, 2227.74, 2220.44, 2253.42],\n' +
            '  [\'2013/4/3\', 2232.69, 2225.29, 2217.25, 2241.34],\n' +
            '  [\'2013/4/8\', 2196.24, 2211.59, 2180.67, 2212.59],\n' +
            '  [\'2013/4/9\', 2215.47, 2225.77, 2215.47, 2234.73],\n' +
            '  [\'2013/4/10\', 2224.93, 2226.13, 2212.56, 2233.04],\n' +
            '  [\'2013/4/11\', 2236.98, 2219.55, 2217.26, 2242.48],\n' +
            '  [\'2013/4/12\', 2218.09, 2206.78, 2204.44, 2226.26],\n' +
            '  [\'2013/4/15\', 2199.91, 2181.94, 2177.39, 2204.99],\n' +
            '  [\'2013/4/16\', 2169.63, 2194.85, 2165.78, 2196.43],\n' +
            '  [\'2013/4/17\', 2195.03, 2193.8, 2178.47, 2197.51],\n' +
            '  [\'2013/4/18\', 2181.82, 2197.6, 2175.44, 2206.03],\n' +
            '  [\'2013/4/19\', 2201.12, 2244.64, 2200.58, 2250.11],\n' +
            '  [\'2013/4/22\', 2236.4, 2242.17, 2232.26, 2245.12],\n' +
            '  [\'2013/4/23\', 2242.62, 2184.54, 2182.81, 2242.62],\n' +
            '  [\'2013/4/24\', 2187.35, 2218.32, 2184.11, 2226.12],\n' +
            '  [\'2013/4/25\', 2213.19, 2199.31, 2191.85, 2224.63],\n' +
            '  [\'2013/4/26\', 2203.89, 2177.91, 2173.86, 2210.58],\n' +
            '  [\'2013/5/2\', 2170.78, 2174.12, 2161.14, 2179.65],\n' +
            '  [\'2013/5/3\', 2179.05, 2205.5, 2179.05, 2222.81],\n' +
            '  [\'2013/5/6\', 2212.5, 2231.17, 2212.5, 2236.07],\n' +
            '  [\'2013/5/7\', 2227.86, 2235.57, 2219.44, 2240.26],\n' +
            '  [\'2013/5/8\', 2242.39, 2246.3, 2235.42, 2255.21],\n' +
            '  [\'2013/5/9\', 2246.96, 2232.97, 2221.38, 2247.86],\n' +
            '  [\'2013/5/10\', 2228.82, 2246.83, 2225.81, 2247.67],\n' +
            '  [\'2013/5/13\', 2247.68, 2241.92, 2231.36, 2250.85],\n' +
            '  [\'2013/5/14\', 2238.9, 2217.01, 2205.87, 2239.93],\n' +
            '  [\'2013/5/15\', 2217.09, 2224.8, 2213.58, 2225.19],\n' +
            '  [\'2013/5/16\', 2221.34, 2251.81, 2210.77, 2252.87],\n' +
            '  [\'2013/5/17\', 2249.81, 2282.87, 2248.41, 2288.09],\n' +
            '  [\'2013/5/20\', 2286.33, 2299.99, 2281.9, 2309.39],\n' +
            '  [\'2013/5/21\', 2297.11, 2305.11, 2290.12, 2305.3],\n' +
            '  [\'2013/5/22\', 2303.75, 2302.4, 2292.43, 2314.18],\n' +
            '  [\'2013/5/23\', 2293.81, 2275.67, 2274.1, 2304.95],\n' +
            '  [\'2013/5/24\', 2281.45, 2288.53, 2270.25, 2292.59],\n' +
            '  [\'2013/5/27\', 2286.66, 2293.08, 2283.94, 2301.7],\n' +
            '  [\'2013/5/28\', 2293.4, 2321.32, 2281.47, 2322.1],\n' +
            '  [\'2013/5/29\', 2323.54, 2324.02, 2321.17, 2334.33],\n' +
            '  [\'2013/5/30\', 2316.25, 2317.75, 2310.49, 2325.72],\n' +
            '  [\'2013/5/31\', 2320.74, 2300.59, 2299.37, 2325.53],\n' +
            '  [\'2013/6/3\', 2300.21, 2299.25, 2294.11, 2313.43],\n' +
            '  [\'2013/6/4\', 2297.1, 2272.42, 2264.76, 2297.1],\n' +
            '  [\'2013/6/5\', 2270.71, 2270.93, 2260.87, 2276.86],\n' +
            '  [\'2013/6/6\', 2264.43, 2242.11, 2240.07, 2266.69],\n' +
            '  [\'2013/6/7\', 2242.26, 2210.9, 2205.07, 2250.63],\n' +
            '  [\'2013/6/13\', 2190.1, 2148.35, 2126.22, 2190.1]\n' +
            ']);\n' +
            'function splitData(rawData) {\n' +
            '  const categoryData = [];\n' +
            '  const values = [];\n' +
            '  for (var i = 0; i < rawData.length; i++) {\n' +
            '    categoryData.push(rawData[i].splice(0, 1)[0]);\n' +
            '    values.push(rawData[i]);\n' +
            '  }\n' +
            '  return {\n' +
            '    categoryData: categoryData,\n' +
            '    values: values\n' +
            '  };\n' +
            '}\n' +
            'function calculateMA(dayCount) {\n' +
            '  var result = [];\n' +
            '  for (var i = 0, len = data0.values.length; i < len; i++) {\n' +
            '    if (i < dayCount) {\n' +
            '      result.push(\'-\');\n' +
            '      continue;\n' +
            '    }\n' +
            '    var sum = 0;\n' +
            '    for (var j = 0; j < dayCount; j++) {\n' +
            '      sum += +data0.values[i - j][1];\n' +
            '    }\n' +
            '    result.push(sum / dayCount);\n' +
            '  }\n' +
            '  return result;\n' +
            '}\n' +
            'option = {\n' +
            '  title: {\n' +
            '    text: \'上证指数\',\n' +
            '    left: 0\n' +
            '  },\n' +
            '  tooltip: {\n' +
            '    trigger: \'axis\',\n' +
            '    axisPointer: {\n' +
            '      type: \'cross\'\n' +
            '    }\n' +
            '  },\n' +
            '  legend: {\n' +
            '    data: [\'日K\', \'MA5\', \'MA10\', \'MA20\', \'MA30\']\n' +
            '  },\n' +
            '  grid: {\n' +
            '    left: \'10%\',\n' +
            '    right: \'10%\',\n' +
            '    bottom: \'15%\'\n' +
            '  },\n' +
            '  xAxis: {\n' +
            '    type: \'category\',\n' +
            '    data: data0.categoryData,\n' +
            '    boundaryGap: false,\n' +
            '    axisLine: { onZero: false },\n' +
            '    splitLine: { show: false },\n' +
            '    min: \'dataMin\',\n' +
            '    max: \'dataMax\'\n' +
            '  },\n' +
            '  yAxis: {\n' +
            '    scale: true,\n' +
            '    splitArea: {\n' +
            '      show: true\n' +
            '    }\n' +
            '  },\n' +
            '  dataZoom: [\n' +
            '    {\n' +
            '      type: \'inside\',\n' +
            '      start: 50,\n' +
            '      end: 100\n' +
            '    },\n' +
            '    {\n' +
            '      show: true,\n' +
            '      type: \'slider\',\n' +
            '      top: \'90%\',\n' +
            '      start: 50,\n' +
            '      end: 100\n' +
            '    }\n' +
            '  ],\n' +
            '  series: [\n' +
            '    {\n' +
            '      name: \'日K\',\n' +
            '      type: \'candlestick\',\n' +
            '      data: data0.values,\n' +
            '      itemStyle: {\n' +
            '        color: upColor,\n' +
            '        color0: downColor,\n' +
            '        borderColor: upBorderColor,\n' +
            '        borderColor0: downBorderColor\n' +
            '      },\n' +
            '      markPoint: {\n' +
            '        label: {\n' +
            '          formatter: function (param) {\n' +
            '            return param != null ? Math.round(param.value) + \'\' : \'\';\n' +
            '          }\n' +
            '        },\n' +
            '        data: [\n' +
            '          {\n' +
            '            name: \'Mark\',\n' +
            '            coord: [\'2013/5/31\', 2300],\n' +
            '            value: 2300,\n' +
            '            itemStyle: {\n' +
            '              color: \'rgb(41,60,85)\'\n' +
            '            }\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'highest value\',\n' +
            '            type: \'max\',\n' +
            '            valueDim: \'highest\'\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'lowest value\',\n' +
            '            type: \'min\',\n' +
            '            valueDim: \'lowest\'\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'average value on close\',\n' +
            '            type: \'average\',\n' +
            '            valueDim: \'close\'\n' +
            '          }\n' +
            '        ],\n' +
            '        tooltip: {\n' +
            '          formatter: function (param) {\n' +
            '            return param.name + \'<br>\' + (param.data.coord || \'\');\n' +
            '          }\n' +
            '        }\n' +
            '      },\n' +
            '      markLine: {\n' +
            '        symbol: [\'none\', \'none\'],\n' +
            '        data: [\n' +
            '          [\n' +
            '            {\n' +
            '              name: \'from lowest to highest\',\n' +
            '              type: \'min\',\n' +
            '              valueDim: \'lowest\',\n' +
            '              symbol: \'circle\',\n' +
            '              symbolSize: 10,\n' +
            '              label: {\n' +
            '                show: false\n' +
            '              },\n' +
            '              emphasis: {\n' +
            '                label: {\n' +
            '                  show: false\n' +
            '                }\n' +
            '              }\n' +
            '            },\n' +
            '            {\n' +
            '              type: \'max\',\n' +
            '              valueDim: \'highest\',\n' +
            '              symbol: \'circle\',\n' +
            '              symbolSize: 10,\n' +
            '              label: {\n' +
            '                show: false\n' +
            '              },\n' +
            '              emphasis: {\n' +
            '                label: {\n' +
            '                  show: false\n' +
            '                }\n' +
            '              }\n' +
            '            }\n' +
            '          ],\n' +
            '          {\n' +
            '            name: \'min line on close\',\n' +
            '            type: \'min\',\n' +
            '            valueDim: \'close\'\n' +
            '          },\n' +
            '          {\n' +
            '            name: \'max line on close\',\n' +
            '            type: \'max\',\n' +
            '            valueDim: \'close\'\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'MA5\',\n' +
            '      type: \'line\',\n' +
            '      data: calculateMA(5),\n' +
            '      smooth: true,\n' +
            '      lineStyle: {\n' +
            '        opacity: 0.5\n' +
            '      }\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'MA10\',\n' +
            '      type: \'line\',\n' +
            '      data: calculateMA(10),\n' +
            '      smooth: true,\n' +
            '      lineStyle: {\n' +
            '        opacity: 0.5\n' +
            '      }\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'MA20\',\n' +
            '      type: \'line\',\n' +
            '      data: calculateMA(20),\n' +
            '      smooth: true,\n' +
            '      lineStyle: {\n' +
            '        opacity: 0.5\n' +
            '      }\n' +
            '    },\n' +
            '    {\n' +
            '      name: \'MA30\',\n' +
            '      type: \'line\',\n' +
            '      data: calculateMA(30),\n' +
            '      smooth: true,\n' +
            '      lineStyle: {\n' +
            '        opacity: 0.5\n' +
            '      }\n' +
            '    }\n' +
            '  ]\n' +
            '};',
        },
        {
          cover: 'https://echarts.apache.org/examples/data/thumb/sunburst-simple.webp?_v_=1643452312113',
          title: '',
          type: '',
          data: '',
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

