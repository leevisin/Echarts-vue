<template>
  <div>
    UserName: {{userName}}
    <br>
    UserAge: {{userAge}}
  </div>
</template>

<script>
  export default {
    name: 'AppIndex',
    data() {
      return {
        userName: this.$store.state.userName,
        userAge: this.$store.state.userAge,
      }
    },
    created() {
      console.info(this.userName);
      console.info(this.userAge);
    }
  }
</script>

<style>

</style>
