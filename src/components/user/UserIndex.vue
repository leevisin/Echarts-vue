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
            <el-input v-model="title" auto-complete="off" placeholder="Chart Name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" style="width: 100%;border: none" v-on:click="addChart">Add Chart Template</el-button>
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
            Welcome {{ username }}!
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
      <!--      <search-bar></search-bar>-->
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
      let aLink = document.createElement('a');
      let evt = document.createEvent('HTMLEvents');
      evt.initEvent('click', true, true);
      aLink.download = "Echarts"; // Save Img Name
      aLink.href = this.$store.getters.getCover
      console.log(aLink.href)
      aLink.click(); // Use for download
    }
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
