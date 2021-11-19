<template>
  <div class="left">
    <codemirror
      ref="myCm"
      :value="msg"
      v-model="msg"
      :options="cmOptions"
      @change="changes()"
      class="code">
    </codemirror>
    <span style="color: rgb(158,158,158);position: relative;left: -107px;top: -359px">
    {{placeholder}}
  </span>
  </div>
</template>

<script>
  import { codemirror } from 'vue-codemirror'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/lib/codemirror.js'

  // import 'codemirror/mode/javascript/javascript'
  // import 'codemirror/mode/vue/vue'
  //
  // import 'codemirror/addon/hint/show-hint.js'
  // import 'codemirror/addon/hint/show-hint.css'
  // import 'codemirror/addon/hint/javascript-hint.js'

  export default {
    name: 'Code',
    components: { codemirror },
    data () {
      return {
        msg: 'function getParams(name){',
        myCm: "",
        placeholder: "",
        cmOptions: {
          value: "",
          mode: "text/javascript",
          indentUnit: 2,
          smartIndent: true,
          tabSize: 2,
          readOnly: false,
          showCursorWhenSelecting: true,
          lineNumbers: true,
          firstLineNumber: 1,
        },
      }
    },
    methods: {
      changes() {
        if (this.msg == '') {
          this.placeholder = 'Only 20 single dot';
        } else {
          this.placeholder = '';
        }
      }
    }
  }
</script>

<style scoped>
  .code{
    text-align: left;
    /*border: 2px solid #9E9E9E;*/
    width: 600px;
    height: 800px;
  }

  .CodeMirror-line span{
    color: #505050;
    font-family: "微软雅黑";
  }

  .left{
    /*display: inline-block;*/
    /*-webkit-box-shadow: 0px 2px 8px #888888;*/
    box-shadow: 0px 2px 8px #888888;
  }
</style>
