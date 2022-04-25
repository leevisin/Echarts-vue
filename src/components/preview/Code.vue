<template>
  <div>
    <ace :option="scriptStr"></ace>
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
  },
  mounted() {
    this.passScriptStr()
  },
}
</script>

<style scoped>

</style>
