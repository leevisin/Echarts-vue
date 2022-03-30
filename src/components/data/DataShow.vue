<template>
  <div>
    <button v-on:click="getRealData">Get Data</button>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="realData">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'DataShow',
  data() {
    return {
      realData: ''
    }
  },
  methods: {
    mounted() {
      this.bus.$on('sendSpreadsheet', passData => {
        this.realData = JSON.stringify(passData)
      })
      console.log(this.realData)

      this.timer = setTimeout(()=>{   //设置延迟执行
        console.log('ok');
      },1000);
    },
    getRealData() {
      this.bus.$on('sendSpreadsheet', passData => {
        this.realData = JSON.stringify(passData)
      })
    }
  }
}
</script>

<style scoped>

</style>
