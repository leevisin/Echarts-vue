<template>
  <ace :option="scriptStr"></ace>
</template>

<script>
export default {
  name: 'Code',
  computed: {
    scriptStr: function (){
      return this.$store.getters.getScriptStr
    },
  },
  created() {
    // this.scriptStr = this.$store.getters.getScriptStr
    console.log(this.$store.getters.getScriptStr)
  }
}
</script>

<style scoped>

</style>
