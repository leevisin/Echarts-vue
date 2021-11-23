<template>
  <div>
    UserName
  </div>
</template>

<script>
  export default {
    name: 'AppIndex',
    data() {
      return {
        userName: this.$store.state.userName
      }
    },
    created() {
      console.info(this.userName);
      console.info("AAA");
    }
  }
</script>

<style>

</style>
