<template>
    <body id="poster">
      <el-form class="login-container" label-position="left"
             label-width="0px">
        <h3 class="login_title">zZZ系统登录</h3>
        <el-form-item>
            <el-input type="text" v-model="loginForm.username"
                      auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="loginForm.password"
                      auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
            <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="login">登录
            </el-button>
        </el-form-item>
      </el-form>
    </body>
</template>

<script>
  import url from '@/rotxx'
  export default {
    data () {
      return {
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        response: {}
      }
    },
    methods: {
      login () {
        this.$axios({
          method: 'post',
          url: url+'/login',
          params: {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
        }).then(res => {

            this.response=res
            if (res.data.code === 1) {
              this.$router.push({path: '/index'})
            } else if (res.data.code !== 1){
              this.$message.error(res.data.msg);
            }

          })
          .catch(err => {
            this.$router.push({path: '/err'})
          })
      }
    }
  }
</script>

<style>
    #poster {
        background: url("../assets/login.jpg") no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: absolute;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

</style>

