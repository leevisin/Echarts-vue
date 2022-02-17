<template>
<!--  <el-form>-->
<!--    <el-form-item>-->
<!--      <el-input type="text" v-model="title" auto-complete="off" placeholder="title"></el-input>-->
<!--    </el-form-item>-->
<!--    <el-form-item style="width: 100%">-->
<!--      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="update">Update</el-button>-->
<!--    </el-form-item>-->
<!--  </el-form>-->
  <div>
    UserName: {{userName}}
    <br>
    UserAge: {{userAge}}
    <br>
    NextAge: {{nextAge}}
    <br>
    Title: {{title}}
    <br>
      <el-form>
        <el-form-item>
          <el-input type="text" v-model="titleTmp" auto-complete="off" placeholder="title"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="updateTit">Update</el-button>
        </el-form-item>
      </el-form>
    <br>
    <button @click="changeAge">Change Age</button>
  </div>
</template>

<script>
  export default {
    name: 'Option',
    data() {
      return {
        userName: this.$store.state.userName,
        // userAge: this.$store.state.userAge,
        ageOfNextYear: this.$store.getters.getAgeOfNextYear,
        titleTmp: ''
      }
    },
    methods: {
      changeAge() {
        this.$store.commit('setUserAge', 4)
      },
      updateTit(){
        this.$store.commit('setTitle', this.titleTmp)
        let strTmp = this.$store.getters.getScriptStr
        strTmp = strTmp.replace(/'text':(.*)|text:(.*)/gm, "text: this.\$store.getters.getTitle")
        console.log(strTmp)
        this.$store.commit('setScriptStr', strTmp)
        this.bus.$emit('sendScript',[strTmp])
      }
    },
    computed: {
      userAge: function (){
        return this.$store.getters.getAge
      },
      nextAge: function () {
        return this.$store.getters.getAgeOfNextYear
      },
      title: function () {
        return this.$store.getters.getTitle
      }
    },
    created() {
      // console.info(this.userName);
      // console.info(this.userAge);
      console.log("Welcome to my page aPAout expression page!".match(/pa/gi));
      const str = this.$store.getters.getScriptStr;
      console.log(str);
      console.log(str.match(/text:(.*)\n/));
      console.log(str.match(/'text':(.*)|text:(.*)/gm))
    }
  }
</script>

<style scoped>

</style>
