<template>
  <body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">System Login</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="Username"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">Log In</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: lightgray;border: none" v-on:click="skipLogin">Skip</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: [],
      orgScript: 'option = {\n' +
        '    title: {\n' +
        '      text: \'Title Test\',\n' +
        '    },\n' +
        '    tooltip: {},\n' +
        '    xAxis: {\n' +
        '      type: \'category\',\n' +
        '      data: [\'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\', \'Sun\']\n' +
        '    },\n' +
        '    yAxis: {\n' +
        '      type: \'value\'\n' +
        '    },\n' +
        '    series: [\n' +
        '      {\n' +
        '        data: [150, 230, 224, 218, 135, 147, 260],\n' +
        '        type: \'line\'\n' +
        '      }\n' +
        '    ]\n' +
        '};'
    }
  },
  methods: {
    login() {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            // reset website and jump to /preview
            this.$store.commit('setScriptStr', this.orgScript)
            this.$store.commit('setInit','0')
            this.$router.replace({path: '/preview'})
          } else if (successResponse.data.code === 400) {
            alert("The username or password is incorrect, please re-enter it.")
          }
        })
        .catch(failResponse => {

        })
    },
    skipLogin() {
      // reset website and jump to /preview
      this.$store.commit('setScriptStr', this.orgScript)
      this.$store.commit('setInit','0')
      this.$router.push('/preview');
    }
  }
}
</script>

<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 400px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow:  0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  #poster {
    background: url("../assets/bupt.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body {
    margin: 0px;
  }
</style>
