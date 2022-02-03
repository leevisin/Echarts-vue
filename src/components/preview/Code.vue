<template>
  <div>
    <ace :option="scriptStr"></ace>
    <button v-on:click="showScriptStr">Show</button>
  </div>
</template>

<script>
export default {
  name: 'Code',
  methods: {
    showScriptStr() {
      // console.log(this.$store.getters.getScriptStr)
      console.log(this.scriptStr)
    },
  },
  computed: {
    scriptStr: function (){
      return this.$store.getters.getScriptStr
    },
  },
  created() {
    // this.scriptStr = this.$store.getters.getScriptStr
    // console.log(this.$store.getters.getScriptStr)
  }
}
</script>

<style scoped>

</style>
