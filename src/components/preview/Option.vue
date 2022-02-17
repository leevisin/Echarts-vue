<template>
  <div>
      <el-form>
        Title: {{title}}
        <el-form-item>
          <el-input type="text" v-model="titleTmp" auto-complete="off" placeholder="title"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="updateTit">UpdateTitle</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Option',
    data() {
      return {
        titleTmp: ''
      }
    },
    methods: {
      updateTit(){
        this.$store.commit('setTitle', this.titleTmp)
        let strTmp = this.$store.getters.getScriptStr
        if (strTmp.match(/'text':(.*)|text:(.*)/gm) != null) {
          strTmp = strTmp.replace(/'text':(.*)|text:(.*)/gm, "text: '" + this.$store.getters.getTitle + "'")
        } else {
          strTmp = strTmp.replace(/{/, "{\n  title: {\n    text: '" +this.$store.getters.getTitle +"'\n  },")
        }
        console.log(strTmp)
        this.$store.commit('setScriptStr', strTmp)
        this.bus.$emit('sendScript',[strTmp])
      }
    },
    computed: {
      title: function () {
        return this.$store.getters.getTitle
      }
    },
    created() {
      // console.info(this.userName);
      // console.info(this.userAge);
      // console.log("Welcome to my page aPAout expression page!".match(/pa/gi));
      // const str = this.$store.getters.getScriptStr;
      // console.log(str);
      // console.log(str.match(/text:(.*)\n/));
      // console.log(str.match(/'text':(.*)|text:(.*)/gm))
    }
  }
</script>

<style scoped>

</style>
