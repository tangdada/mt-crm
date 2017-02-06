<template>
<div class="loginbg">
  <el-input v-model="input" placeholder="请输入内容" :disabled="true"></el-input>
  <el-button><router-link to="/home">登陆</router-link></el-button>
</div>
</template>

<script type="text/ecmascript-6">
import {
  Input,
  Button
  // ...
} from 'element-ui'

export default {
  components: {
    'el-input': Input,
    'el-button': Button
  },

  data() {
    return {
      show: false,
      input: 'input some text'
    };
  },

  methods: {
    showMenu() {
      this.show = !this.show;
    }
  },

  computed: {
    text() {
      return this.show ? '收' : '开';
    }
  }
};
</script>

<style lang="less">
/* 登录 */
.loginbg {
    background: url("../assets/bg/loginbg.jpg") no-repeat center 0;
    height: 768px;
}
</style>
