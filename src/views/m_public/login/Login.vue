<template>
<div class="loginbg">
  <div class="login-box">
    <div class="login-form">
      <form>
        <Alert :title="errorMsg" v-show="loginError"></Alert>
        <el-input v-model="username" placeholder="用户名"></el-input>
        <el-input type="password" v-model="pwd" placeholder="密码"></el-input>
        <div class="login-btn"><button class="el-button el-button--primary el-button--large" type="submit" @click="login">登陆</button></div>
      </form>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import {
  Input,
  Button,
  Alert
} from 'element-ui'

export default {
  data() {
    return {
      username: '',
      pwd: '',
      errorMsg: ''
    };
  },

  methods: {
    login() {
      let param = {
        username: this.username,
        password: this.pwd,
        validationCode: 1111,
        rememberMe: false,
        rememberMeFive:false
      }
      this.$http.post('/login', param).then((response) => {
        this.$router.push({path: '/main/hospitalmanage'});
      }, (res) => {
        this.errorMsg = res.text;
      });
    }
  },

  computed: {
    loginError() {
      return this.errorMsg !== '' ? true : false;
    }
  },

  components: {
    'el-input': Input,
    'el-button': Button,
    Alert
  }
};
</script>

<style scoped lang="less">
/* 登录 */
.loginbg {
    background: url("../../../assets/bg/loginbg.jpg") no-repeat center 0;
    height: 768px;
}
.login-box{
  width: 320px;
  margin: 0 auto;
}
.login-form{
  padding-top: 365px;
}
.login-btn {
  text-align: center;
  button {
    width: 100%;
  }
}
</style>
