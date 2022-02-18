<template>
  <div>
      <el-form>
        <el-form-item>
          <el-input type="text" v-model="titleTmp" auto-complete="off" placeholder="Title"></el-input>
          <el-input type="text" v-model="subtitleTmp" auto-complete="off" placeholder="Subtitle"></el-input>
          <div>
            <a class="hint">Save As Image:</a>
            <el-radio v-model="isSaveImg" label="0">False</el-radio>
            <el-radio v-model="isSaveImg" label="1">True</el-radio>
          </div>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="update">Update</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Option',
    data() {
      return {
        strTmp: this.$store.getters.getScriptStr,
        titleTmp: '',
        subtitleTmp: '',
        isSaveImg: ''
      }
    },
    methods: {
      update(){
        this.strTmp = this.$store.getters.getScriptStr
        this.changeTitle()
        this.changeSubtitle()
        this.changeSaveImg()
        this.$store.commit('setScriptStr', this.strTmp)
        this.bus.$emit('sendScript',[this.strTmp])
      },
      changeTitle() {
        // Hold on when value is empty, change to empty when value is null
        if (this.titleTmp != '') {
          if (this.titleTmp == 'null') {
            this.titleTmp = ''
          }
          if (this.strTmp.match(/'text':(.*)|text:(.*)/gm) != null) {
            this.strTmp = this.strTmp.replace(/'text':(.*)|text:(.*)/gm, "text: '" + this.titleTmp + "',")
          } else {
            this.strTmp = this.strTmp.replace(/{/, "{\n  title: {\n    text: '" +this.titleTmp +"',\n  },")
          }
        }
      },
      changeSubtitle() {
        // Hold on when value is empty, change to empty when value is null
        if (this.subtitleTmp != '') {
          if (this.subtitleTmp == 'null') {
            this.subtitleTmp = ''
          }
          if (this.strTmp.match(/'subtext':(.*)|subtext:(.*)/gm) != null) {
            this.strTmp = this.strTmp.replace(/'subtext':(.*)|subtext:(.*)/gm, "subtext: '" + this.subtitleTmp + "',")
          } else {
            this.strTmp = this.strTmp.replace(/title: {/, "title: {\n      subtext: '" +this.subtitleTmp +"',")
          }
        }
      },
      changeSaveImg() {
        if (this.isSaveImg == '') {
          return
        }
        if (this.isSaveImg == '0') {
          this.strTmp = this.strTmp.replace(/\n(.*)saveAsImage(.*)/gm, "")
        }
        if (this.isSaveImg == '1') {
          if (this.strTmp.match(/\n(.*)saveAsImage(.*)/gm) != null) {
            this.strTmp = this.strTmp.replace(/saveAsImage(.*)/gm, "saveAsImage: { show: true },")
          } else {
            if (this.strTmp.match(/feature(.*)/gm) != null || this.strTmp.match(/toolbox(.*)/gm) != null) {
              this.strTmp = this.strTmp.replace(/feature: {/gm, "feature: {\n" +
                "      saveAsImage: { show: true },")
            } else {
              this.strTmp = this.strTmp.replace(/{/, "{\n  toolbox: {\n" +
                "    show: true,\n" +
                "    feature: {\n" +
                "      saveAsImage: { show: true },\n" +
                "    }\n" +
                "  },")
            }
          }
        }
      },
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
.hint {
  position: absolute;
  left: 0px;
}
</style>
