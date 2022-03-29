<template>
  <div>
      <el-form>
        <el-form-item>
          <el-input type="text" v-model="titleTmp" auto-complete="off" placeholder="Title"></el-input>
          <el-input type="text" v-model="subtitleTmp" auto-complete="off" placeholder="Subtitle"></el-input>
          <el-input type="text" v-model="xAxisNameTmp" auto-complete="off" placeholder="xAxis Name"></el-input>
          <el-input type="text" v-model="yAxisNameTmp" auto-complete="off" placeholder="yAxis Name"></el-input>
          <div>
            <a class="hint">Save as Image:</a>
            <el-radio v-model="isSaveImg" label="0">False</el-radio>
            <el-radio v-model="isSaveImg" label="1">True</el-radio>
          </div>
          <div>
            <a class="hint">Grid is Rectangle:</a>
            <el-radio v-model="isRectangle" label="0">False</el-radio>
            <el-radio v-model="isRectangle" label="1">True</el-radio>
          </div>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="update">Update</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { js_beautify, css_beautify, html_beautify } from 'js-beautify'
  export default {
    name: 'Option',
    data() {
      return {
        strTmp: this.$store.getters.getScriptStr,
        titleTmp: '',
        subtitleTmp: '',
        xAxisNameTmp: '',
        yAxisNameTmp: '',
        isSaveImg: '',
        isRectangle: '',
      }
    },
    methods: {
      update(){
        this.strTmp = this.$store.getters.getScriptStr
        this.strTmp = this.strTmp.replace(/\n/gm, '')
        this.changeTitle()
        this.changeSubtitle()
        this.changeXAxisName()
        this.changeYAxisName()
        this.changeSaveImg()
        this.changeIsRectangle()
        // this.Test()
        this.strTmp = js_beautify(this.strTmp, {
          indent_size: 2,
          space_in_empty_paren: true
        })
        this.$store.commit('setScriptStr', this.strTmp)
        this.bus.$emit('sendScript',[this.strTmp])
      },
      changeTitle() {
        // Hold on when value is empty, change to empty when value is null
        if (this.titleTmp != '') {
          if (this.titleTmp == 'null') {
            this.titleTmp = ''
          }
          if (this.strTmp.match(/[^sub]text: '(.*?)(',|')|[^sub]text: "(.*?)(",|")/gm) != null) {
            this.strTmp = this.strTmp.replace(/[^sub]text: '(.*?)(',|')|[^sub]text: "(.*?)(",|")/gm, "text: '" + this.titleTmp + "',")
          } else {
            this.strTmp = this.strTmp.replace(/option = \{/, "option = {\n  title: {\n    text: '" +this.titleTmp +"',\n  },")
          }
        }
      },
      changeSubtitle() {
        // Hold on when value is empty, change to empty when value is null
        if (this.subtitleTmp != '') {
          if (this.subtitleTmp == 'null') {
            this.subtitleTmp = ''
          }
          if (this.strTmp.match(/subtext: '(.*?)(',|')|subtext: "(.*?)(",|")/gm) != null) {
            this.strTmp = this.strTmp.replace(/subtext: '(.*?)(',|')|subtext: "(.*?)(",|")/gm, "subtext: '" + this.subtitleTmp + "',")
          } else {
            this.strTmp = this.strTmp.replace(/title: {/, "title: {\n      subtext: '" +this.subtitleTmp +"',")
          }
        }
      },
      changeXAxisName() {
        if (this.xAxisNameTmp == '') {
          return
        }
        if (this.xAxisNameTmp == 'null') {
          this.xAxisNameTmp = ''
        }
        if (this.strTmp.match(/xAxis: {(.*?)name: '(.*?)'(.*?)}/gm) != null) {
          this.strTmp = this.strTmp.replace(/xAxis: {(.*?)name: '(.*?)'(.*?)}/gm, "xAxis: {$1name: '"+ this.xAxisNameTmp +"'$3}")
        } else {
          this.strTmp = this.strTmp.replace(/xAxis: {(.*?)}/gm, "xAxis: { name:'"+ this.xAxisNameTmp +"',$1}")
        }
      },
      changeYAxisName() {
        if (this.yAxisNameTmp == '') {
          return
        }
        if (this.yAxisNameTmp == 'null') {
          this.yAxisNameTmp = ''
        }
        if (this.strTmp.match(/yAxis: {(.*?)name: '(.*?)'(.*?)}/gm) != null) {
          this.strTmp = this.strTmp.replace(/yAxis: {(.*?)name: '(.*?)'(.*?)}/gm, "yAxis: {$1name: '"+ this.yAxisNameTmp +"'$3}")
        } else {
          this.strTmp = this.strTmp.replace(/yAxis: {(.*?)}/gm, "yAxis: { name:'"+ this.yAxisNameTmp +"',$1}")
        }
      },
      changeSaveImg() {
        if (this.isSaveImg == '') {
          return
        }
        if (this.isSaveImg == '0') {
          this.strTmp = this.strTmp.replace(/saveAsImage: \{(.*?)(\},|\})/gm, "saveAsImage: { show: false },")
        }
        if (this.isSaveImg == '1') {
          if (this.strTmp.match(/saveAsImage:(.*)\{(.*)show:(.*)true(.*)\}/gm) != null) {
            return
          } else if (this.strTmp.match(/saveAsImage:/gm) != null){
              this.strTmp = this.strTmp.replace(/saveAsImage: \{(.*?)(\},|\})/gm, "saveAsImage: { show: true },")
          } else if (this.strTmp.match(/feature:/gm) != null){
            this.strTmp = this.strTmp.replace(/feature: {/gm, "feature: { saveAsImage: { show: true },")
          } else if (this.strTmp.match(/toolbox:/gm) != null){
            this.strTmp = this.strTmp.replace(/toolbox: {/gm, "toolbox: {\n" +
              "    show: true,\n" +
              "    feature: {\n" +
              "      saveAsImage: { show: true },\n" +
              "    }\n" +
              "  },")
          } else {
            this.strTmp = this.strTmp.replace(/option = {/gm, "option = {\n" +
              "  toolbox: {\n" +
              "    show: true,\n" +
              "    feature: {\n" +
              "      saveAsImage: { show: true },\n" +
              "    }\n" +
              "  },")
          }
        }
        console.log(this.strTmp)
      },
      changeIsRectangle() {
        if (this.isRectangle == '') {
          return
        }
        if (this.isRectangle == '0') {
          this.strTmp = this.strTmp.replace(/grid: {(.*)show: true(.*)}/gm, "grid: {$1show: false$2}")
        }
        if (this.isRectangle == '1') {
          if (this.strTmp.match(/grid: {(.*)show: false(.*)}/gm) != null){
            this.strTmp = this.strTmp.replace(/grid: {(.*)show: false(.*)}/gm, "grid: {$1show: true$2}")
          } else {
            this.strTmp = this.strTmp.replace(/option = {/gm, "option = {\n" +
              "  grid: {\n" +
              "    show: true\n" +
              "  },")
          }
        }
      },
      Test() {
        console.log(this.strTmp)
        let groups = this.strTmp.replace(/series:(.*)\[(.*)data:(.*)\[(.*)\](.*)\]/gm, 'series:$1\[$2data:$3\[Success\]$5\]')
        console.log(this.strTmp)
        console.log(groups)
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
