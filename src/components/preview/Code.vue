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
    console.log(this.scriptStr)
  }
}
</script>

<style scoped>

</style>
