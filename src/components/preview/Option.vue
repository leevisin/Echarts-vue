<template>
  <div>
    <el-form label-width="120px">
      <el-row>
          <el-form-item label="Title">
            <el-input type="text" v-model="titleTmp" auto-complete="off" placeholder="Title"></el-input>
          </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="Title Font Size">
          <el-input type="text" v-model="titleFontSizeTmp" auto-complete="off" placeholder="Title Font Size"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="22">
          <el-form-item label="Title Font Color">
            <el-input v-model="titleFontColorTmp" auto-complete="off" placeholder="Title Font Color"></el-input>
          </el-form-item>
        </el-col>
        <el-color-picker v-model="titleFontColorTmp" show-alpha></el-color-picker>
      </el-row>
      <el-row>
        <el-form-item label="Subtitle">
          <el-input type="text" v-model="subtitleTmp" auto-complete="off" placeholder="Subitle"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="xAxis Name">
          <el-input type="text" v-model="xAxisNameTmp" auto-complete="off" placeholder="xAxis Name"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="yAxis Name">
          <el-input type="text" v-model="yAxisNameTmp" auto-complete="off" placeholder="yAxis Name"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="Save as Image:">
          <el-radio v-model="isSaveImg" label="0">False</el-radio>
          <el-radio v-model="isSaveImg" label="1">True</el-radio>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="Data Zoom:">
          <el-radio v-model="isDataZoom" label="0">False</el-radio>
          <el-radio v-model="isDataZoom" label="1">True</el-radio>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="Grid is Shown:">
          <el-radio v-model="isRectangle" label="0">False</el-radio>
          <el-radio v-model="isRectangle" label="1">True</el-radio>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="22">
          <el-form-item label="BG Color">
            <el-input v-model="backgroundColorTmp" auto-complete="off" placeholder="Background Color, Grid Must be Shown"></el-input>
          </el-form-item>
        </el-col>
        <el-color-picker v-model="backgroundColorTmp" show-alpha></el-color-picker>
      </el-row>
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
        titleFontSizeTmp: '',
        titleFontColorTmp: '',
        subtitleTmp: '',
        xAxisNameTmp: '',
        yAxisNameTmp: '',
        isSaveImg: '',
        isDataZoom: '',
        isRectangle: '',
        backgroundColorTmp: '',
      }
    },
    methods: {
      update(){
        this.strTmp = this.$store.getters.getScriptStr
        this.strTmp = this.strTmp.replace(/\n/gm, '')
        this.changeIsRectangle()
        this.changeBackgroundColor()
        this.changeSaveImg()
        this.changeDataZoom()
        this.changeXAxisName()
        this.changeYAxisName()
        this.changeTitle()
        this.changeTitleStyle()
        this.changeSubtitle()

        this.strTmp = js_beautify(this.strTmp, {
          indent_size: 4,
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
      changeTitleStyle() {
        let fontSize = "20"
        if (this.titleFontSizeTmp != '') {
          // process input is digit
          if (this.titleFontSizeTmp.match(/(\d+)/gm) != null) {
            fontSize = this.titleFontSizeTmp.match(/(\d+)/gm)
          }

          if (this.strTmp.match(/[^sub]text:(.*?),/gm) != null){
            if (this.strTmp.match(/[^sub]text:(.*?),(.*)[^sub]textStyle: {(.*?)}/gm) != null) {
              if (this.strTmp.match(/[^sub]text:(.*?),(.*)[^sub]textStyle: {(.*)fontSize: (.*?),(.*?)}/gm) != null) {
                this.strTmp = this.strTmp.replace(/[^sub]text:(.*?),(.*)[^sub]textStyle: {(.*)fontSize: (\d+),(.*?)},/gm, "text:$1,$2textStyle: {$3fontSize: " + fontSize + ",$5},")
              } else {
                this.strTmp = this.strTmp.replace(/[^sub]text:(.*?),(.*)[^sub]textStyle: {(.*?)},/gm, "text:$1,$2textStyle: { fontSize: " + fontSize + ",$3},")
                console.log("run here")
              }
            } else {
              this.strTmp = this.strTmp.replace(/[^sub]text:(.*?),/gm, "text:$1, textStyle: { fontSize: " + fontSize + ", },")
            }
          }
        }
        if (this.titleFontColorTmp != '') {
          if (this.strTmp.match(/text:(.*?),/gm) != null){
            if (this.strTmp.match(/text:(.*?),(.*)[^sub]textStyle: {(.*?)}/gm) != null) {
              if (this.strTmp.match(/text:(.*?),(.*)[^sub]textStyle: {(.*)color: (.*?),(.*?)}/gm) != null) {
                this.strTmp = this.strTmp.replace(/text:(.*?),(.*)[^sub]textStyle: {(.*)color: \"(.*?)\",(.*?)}/gm, "text:$1,$2textStyle: {$3color: \"" + this.titleFontColorTmp + "\",$5}")
              } else {
                this.strTmp = this.strTmp.replace(/text:(.*?),(.*)[^sub]textStyle: {(.*?)}/gm, "text:$1,$2textStyle: { color: \"" + this.titleFontColorTmp + "\",$3}")
              }
            } else {
              this.strTmp = this.strTmp.replace(/text:(.*?),/gm, "text:$1, textStyle: { color: \"" + this.titleFontColorTmp + "\", }")
            }
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
      changeDataZoom() {
        if (this.isDataZoom == '') {
          return
        }
        if (this.isDataZoom == '0') {
          this.strTmp = this.strTmp.replace(/dataZoom: \{(.*?)(\},|\})/gm, "")
        }
        if (this.isDataZoom == '1') {
          if (this.strTmp.match(/dataZoom:(.*)\{(.*)yAxisIndex:(.*)"none"(.*)\}/gm) != null) {
            return
          } else if (this.strTmp.match(/dataZoom:/gm) != null) {
            this.strTmp = this.strTmp.replace(/dataZoom: \{(.*?)(\},|\})/gm, "dataZoom: { yAxisIndex: \"none\" },")
          } else if (this.strTmp.match(/feature:/gm) != null) {
            this.strTmp = this.strTmp.replace(/feature: {/gm, "feature: { dataZoom: { yAxisIndex: \"none\" },")
          } else if (this.strTmp.match(/toolbox:/gm) != null) {
            this.strTmp = this.strTmp.replace(/toolbox: {/gm, "toolbox: {\n" +
              "    show: true,\n" +
              "    feature: {\n" +
              "      dataZoom: { yAxisIndex: \"none\" },\n" +
              "    }\n" +
              "  },")
          } else {
            this.strTmp = this.strTmp.replace(/option = {/gm, "option = {\n" +
              "  toolbox: {\n" +
              "    show: true,\n" +
              "    feature: {\n" +
              "      dataZoom: {\n" +
              "        yAxisIndex: \"none\"\n" +
              "      },\n" +
              "    }\n" +
              "  },")
          }
        }
      },
      changeIsRectangle() {
        if (this.isRectangle == '') {
          return
        }
        if (this.isRectangle == '0') {
          this.strTmp = this.strTmp.replace(/grid: {(.*?)show: true,(.*?)}/gm, "grid: {$1show: false,$2}")
        }
        if (this.isRectangle == '1') {
          if (this.strTmp.match(/grid: {(.*?)show: false,(.*?)}/gm) != null){
            this.strTmp = this.strTmp.replace(/grid: {(.*?)show: false,(.*?)}/gm, "grid: {$1show: true,$2}")
          } else if (this.strTmp.match(/grid: {(.*?)show: true,(.*?)}/gm) != null){
            return;
          } else if (this.strTmp.match(/grid: {(.*?)}/gm) == null){
            this.strTmp = this.strTmp.replace(/option = {/gm, "option = {" +
              "  grid: {" +
              "    show: true," +
              "  },")
          } else if (this.strTmp.match(/grid: {(.*?)}/gm) != null){
            this.strTmp = this.strTmp.replace(/grid: {(.*?)}/gm, "grid: { show: true,$1}")
          }
        }
      },
      changeBackgroundColor() {
        if (this.backgroundColorTmp != '') {
          if (this.strTmp.match(/grid: {(.*?)show: true,(.*?)}/gm) != null) {
            if (this.strTmp.match(/grid: {(.*?)show: true,(.*?)backgroundColor: "(.*?)",(.*?)}/gm) != null) {
              this.strTmp = this.strTmp.replace(/grid: {(.*?)show: true,(.*?)backgroundColor: "(.*?)",(.*?)}/gm, "grid: {$1show: true,$2backgroundColor: \"" + this.backgroundColorTmp + "\",$4}")
            } else {
              this.strTmp = this.strTmp.replace(/grid: {(.*?)show: true,(.*?)}/gm, "grid: {$1show: true, backgroundColor:\"" + this.backgroundColorTmp + "\",$2}")
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
  }
</script>

<style scoped>
.hint {
  position: absolute;
  left: 0px;
}
.el-form>>>.el-form-item__label {
  text-align: left;
}
</style>
