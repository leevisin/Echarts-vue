<template>
  <div>
    <el-form>
      <el-row class="row-style">
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="downloadChart">Download Current Chart</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-upload
              action="http://localhost:8443/upload"
              :on-preview="handlePreview"
              accept='.png'
            >
              <el-button type="primary" style="width: 100%;background: #CC3333;border: none">Upload Chart Cover Image</el-button>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-input style="width: 90%;border: none" v-model="title" auto-complete="off" placeholder="Chart Name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" style="width: 90%;border: none" v-on:click="addChart">Add Chart Template</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>

          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>

          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <div style="font-family: sans-serif;color: dodgerblue;font-size: large;font-weight: bold">
              Welcome {{ username }}!
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="exitLogin">Sign out</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row style="height: 850px; overflow: auto">
      <el-tooltip effect="dark" placement="right"
                  disabled
                  v-for="item in charts"
                  :key="item.id">
        <el-card style="width: 290px;margin-bottom: 20px;height: 280px;float: left;margin-right: 15px" class="chart"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="cover" v-on:click="changeChart(item.data)">
          </div>
          <div class="info">
            <div class="title">
              <a>{{item.title}}</a>
              <el-button type="primary" style="position: relative;width: 30%;height: 50%;background: red;border: none;float: right;" v-on:click="deleteChart(item.cover)">Delete</el-button>
            </div>
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  data () {
    return {
      title: '',
      coverTmp: '',
      username: '',
      charts: [],
    }
  },
  mounted() {
    this.getUsername()
    this.updateChart()
  },
  methods: {
    changeChart(data) {
      this.$store.commit('setScriptStr', data)
      this.bus.$emit('sendScript',[data])
    },
    addChart() {
      this.$axios
        .post('/addChart', {
          cover: this.coverTmp,
          title: this.title,
          type: '',
          data: this.$store.getters.getScriptStr,
        })
        .then(successResponse => {
          this.charts = successResponse.data
        })
        .catch(failResponse => {

        })
    },
    deleteChart(cover) {
      this.$axios
        .post('/deleteChart', {
          cover: cover,
          title: this.title,
          type: '',
          data: this.$store.getters.getScriptStr,
        })
        .then(successResponse => {
          this.charts = successResponse.data
        })
        .catch(failResponse => {

        })
    },
    updateChart() {
      this.$axios
        .post('/updateChart', {})
        .then(successResponse => {
          this.charts = successResponse.data
        })
        .catch(failResponse => {

        })
    },
    getUsername() {
      this.$axios
        .post('/getUsername', {})
        .then(successResponse => {
          this.username = successResponse.data
        })
        .catch(failResponse => {

        })
    },
    exitLogin() {
      this.$axios
        .post('/login', {
          username: ''
        })
        .then(successResponse => {
          this.$router.replace({path: '/login'})
        })
        .catch(failResponse => {

        })
    },
    handlePreview(file){
      window.open(file.response.url);
      console.log(file.response.url);
      this.coverTmp = file.response.url
    },
    downloadChart() {
      let myChart = this.$store.getters.getType
      this.downloadFile(myChart)
    },
    // click to download img but now for getting img URL
    downloadFile(myChart) {
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
      const sleepToRun = async () => {
        await sleep(0)
        if (myChart == null) {
          return
        }
        let aLink = document.createElement('a');
        let blob = this.base64ToBlob(myChart);
        if (typeof(blob) == "undefined")
        {
          return
        }
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent('click', true, true);
        aLink.download = "Echarts"; // Save Img Name
        aLink.href = URL.createObjectURL(blob);
        this.$store.commit('setCover', aLink.href)
        aLink.click(); // Use for download
      }
      sleepToRun()
    },
    exportImg(myChart) {
      // return url based base64
      return myChart.getDataURL({
        type: 'png',
        pixelRatio: 1,
        backgroundColor: '#fff'
      })
    },
    base64ToBlob(myChart) {
      // change base64 to blob
      let img = this.exportImg(myChart);
      if (typeof(img) == "undefined")
      {
        return
      }
      let parts = img.split(';base64,');
      let contentType = parts[0].split(':')[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    },
  }
}
</script>

<style scoped>
.cover {
  width: 290px;
  height: 217.5px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 290px;
  height: 217.5px;
  /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.button {
  font-size: 14px;
  text-align: right;
  margin-right: 0px;
}

.type {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #293c55;
}
row-style {
  display: inline-block;
}
</style>
