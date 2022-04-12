<template>
  <div class="ace-container">
    <div>
      <button class="el-icon-refresh" v-on:click="refreshChartData">
        Refresh
      </button>
      <div class="editorTitle">Ace Editor</div>
      <button class="run-button" @click="sendChartOption">Run</button>
      <vue-xlsx-table class="xls-button" @on-select-file="handleSelectedFile">
        Upload
      </vue-xlsx-table>
      <button class="clear-button" v-on:click="resetChartData">
        Clear
      </button>
    </div>
    <div class="ace-editor" ref="ace"></div>
<!--    <div class="config-panel" v-show="toggle">-->
<!--      <div>-->
<!--        <div class="item">-->
<!--          <label class="title">语言</label>-->
<!--          <el-select class="value" v-model="modePath" @change="handleModelPathChange" size="mini" value-key="name">-->
<!--            <el-option v-for="mode in modeArray"-->
<!--                       :key="mode.name"-->
<!--                       :label="mode.name"-->
<!--                       :value="mode.path">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </div>-->

<!--        <div class="item">-->
<!--          <label class="title">换行</label>-->
<!--          <el-select class="value" v-model="wrap" @change="handleWrapChange" size="mini" value-key="name">-->
<!--            <el-option v-for="wrap in wrapArray"-->
<!--                       :key="wrap.name"-->
<!--                       :label="wrap.name"-->
<!--                       :value="wrap.value">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="bookmarklet" @click="toggleConfigPanel"></div>-->
  </div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/snippets/javascript'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/snippets/css'
import 'ace-builds/src-noconflict/snippets/scss'
import 'ace-builds/src-noconflict/snippets/json'
import 'ace-builds/src-noconflict/snippets/java'
import 'ace-builds/src-noconflict/snippets/text'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-javascript'
import { js_beautify, css_beautify, html_beautify } from 'js-beautify'

// const themeArray = [{
//   name: 'monokai',
//   path: 'ace/theme/monokai'
// }]

const wrapArray = [{
  name: '开启',
  value: true
}, {
  name: '关闭',
  value: false
}]

const modeArray = [{
  name: 'JavaScript',
  path: 'ace/mode/javascript'
}, {
  name: 'HTML',
  path: 'ace/mode/html'
}, {
  name: 'CSS',
  path: 'ace/mode/css'
}, {
  name: 'SCSS',
  path: 'ace/mode/scss'
}, {
  name: 'Json',
  path: 'ace/mode/json'
}, {
  name: 'Java',
  path: 'ace/mode/java'
}, {
  name: 'Text',
  path: 'ace/mode/text'
}]

export default {
  props: ['option'],
  mounted () {
    this.aceEditor = ace.edit(this.$refs.ace, {
      maxLines: 48,
      minLines: 48,
      fontSize: 14,
      value: this.value ? this.value : '',
      theme: this.themePath,
      mode: this.modePath,
      wrap: this.wrap,
      tabSize: 4
    })
    // 激活自动提示
    this.aceEditor.setOptions({
      enableSnippets: true,
      enableLiveAutocompletion: true,
      enableBasicAutocompletion: true
    })
    this.aceEditor.getSession().on('change', this.change)
    this.bus.$on('sendScript', scriptPass => {
      this.scriptStr = this.$store.getters.getScriptStr
      this.setAceEditorValue()
    })
  },
  data () {
    return {
      scriptStr: '',
      aceEditor: null,
      toggle: false,
      wrap: true,
      // themePath: 'ace/theme/cloud',
      modePath: 'ace/mode/javascript',
      modeArray: modeArray,
      wrapArray: wrapArray
    }
  },
  methods: {
    // 点击上传按钮获取excel表数据
    handleSelectedFile(convertedData) {
      // 将数据保存到data中
      this.data = convertedData.body
    },
    // 点击重置数据按钮，清除excel表数据
    resetChartData(){
      this.data = null
    },
    toggleConfigPanel () {
      this.toggle = !this.toggle
    },
    change () {
      this.$emit('input', this.aceEditor.getSession().getValue())
    },
    handleModelPathChange (modelPath) {
      this.aceEditor.getSession().setMode(modelPath)
    },
    handleWrapChange (wrap) {
      this.aceEditor.getSession().setUseWrapMode(wrap)
    },
    // 设置编辑器内容
    setAceEditorValue() {
      this.aceEditor.setValue(this.scriptStr, 1)
    },
    // 点击运行按钮向图表组件传输新的图表配置
    sendChartOption() {
      // 获取编辑器中语法校验的结果
      var annotations = this.aceEditor.getSession().getAnnotations();
      console.log(annotations)
      function equar(a, b) {
        // 判断数组的长度
        if (a.length !== b.length) {
          return false
        } else {
          // 循环遍历数组的值进行比较
          for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
              return false
            }
          }
          return true;
        }
      }
      if (!equar(annotations, [])) {
        return
      }
      // 点击运行按钮获取编辑器内容，保存到scriptStr
      this.scriptStr = this.aceEditor.getValue()
      // Replace data which is in scriptStr String
      if (this.data != null) {
        // Set the scriptStr as one String to handle
        this.scriptStr = this.scriptStr.replace(/\n/gm, '')
        // Process JSON.stringify(this.data) format
        let dataTmp = JSON.stringify(this.data)
        dataTmp = dataTmp.replace(/"/gm,'\'')
        dataTmp = dataTmp.replace(/'name':/gm,'name:')
        dataTmp = dataTmp.replace(/'value':/gm,'value:')
        // dataTmp = dataTmp.replace(/'(\d+)'/gm,'$1')
        this.scriptStr = this.scriptStr.replace(/data: \[(.*?)\]/gm, 'data: ' + dataTmp)
        // If there are two data:[] in scriptStr
        if( this.scriptStr.match(/type: 'category'(.*?)data: \[(.*?)\]/gm) != null) {
          let dataName = dataTmp
          dataName = dataName.replace(/value:'(.*?)'/gm, '')
          dataName = dataName.replace(/name/gm, 'value')
          this.scriptStr = this.scriptStr.replace(/data: \[(.*?)\]/, 'data: ' + dataName)
        }
      }
      // Format scriptStr as we can understand
      this.scriptStr = js_beautify(this.scriptStr, {
        indent_size: 4,
        space_in_empty_paren: true
      })
      // console.log(this.scriptStr)
      // 更新store中scriptStr的值
      this.$store.commit('setScriptStr', this.scriptStr)
      let script = this.scriptStr
      // 将新的 编辑器内容 传给图表组件 (Now this.data is useless, and can be deleted
      this.bus.$emit('sendScript',[script,this.data])
    },
    // Use button to refresh ace is the same as scriptStr
    refreshChartData() {
      this.scriptStr = this.$store.getters.getScriptStr
      this.setAceEditorValue()
    },
  },
  watch: {
    // 监听父组件传来的值
    option: function(newVal,oldVal){
      // 将新值，也就是option编辑器内容字符串，赋值给scriptStr
      this.scriptStr = newVal
      // 设置编辑器内容
      this.setAceEditorValue()
    }
  },
}
</script>

<style lang='scss' scoped>
.ace-container {
  position: relative;
  margin-top: 28px;

  .config-panel {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    overflow: scroll;
    box-shadow: grey -5px 2px 3px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;

    .item {
      margin: 10px auto;
      text-align: center;

      .title {
        color: white;
        margin: 0 10px;
        font-size: 14px;
      }
    }
  }

  .bookmarklet {
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    z-index: 2;
    cursor: pointer;
    border-width: 9px;
    border-style: solid;
    border-color: lightblue gray gray rgb(206, 173, 230);
    border-image: initial;
  }

  .run-button {
    position: absolute;
    right: 0;
    top: -28px;
    width: 40px;
    height: 28px;
    z-index: 2;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #FF7F50;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 7px 9px;
    font-size: 12px;
    border-radius: 4px;
    color: #fff;
    background-color: #FF4500;
  }

  .xls-button {
    position: absolute;
    right: 74px;
    top: -28px;
    width: 90px;
    height: 28px;
    z-index: 2;
  }

  .clear-button {
    position: absolute;
    right: 40px;
    top: -28px;
    width: 50px;
    height: 28px;
    z-index: 2;
  }

  .editorTitle {
    position: absolute;
    left: 0px;
    top: -28px;
    height: 25px;
    z-index: 2;
    font-size: 25px;
    font-weight: bold;
  }

  .el-icon-refresh {
    position: absolute;
    right: 148px;
    top: -28px;
    width: 88px;
    height: 28px;
    z-index: 2;
  }
}
</style>
