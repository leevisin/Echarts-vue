<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px">
    <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a class="el-icon-menu" href="#nowhere" style="color:#222; float: right; padding: 20px">More Functions</a>
    <i class="el-col-menu" style="float: right; font-size: 45px; color: #222;padding-top: 8px"></i>
    <span style="position: absolute; padding-top: 20px; right: 43%; font-size: 20px; font-weight: bold">Data Visualization based on Echarts</span>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/chart', navItem: 'Chart'},
        {name: '/preview', navItem: 'Preview'},
        {name: '/data', navItem: 'Data'},
        {name: '/user', navItem: 'User'}
      ]
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
