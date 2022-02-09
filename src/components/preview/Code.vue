<template>
  <div>
    <ace :option="scriptStr"></ace>
    <button v-on:click="showScriptStr">Show</button>
  </div>
</template>

<script>
export default {
  name: 'Code',
  data() {
    return {
      scriptStr: ''
    }
  },
  methods: {
    passScriptStr() {
      this.scriptStr = this.$store.getters.getScriptStr
    },
    showScriptStr() {
      this.scriptStr = this.$store.getters.getScriptStr
      console.log(this.scriptStr)
    },
  },
  mounted() {
    this.passScriptStr()
  },
  created() {
    // this.scriptStr = this.$store.getters.getScriptStr
    // console.log(this.$store.getters.getScriptStr)
  }
}
</script>

<style scoped>

</style>
