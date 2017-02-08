<template>
  <el-menu theme="dark" default-active="/main/hospitalmanage" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/main/hospitalmanage">体检中心管理</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.mytijian.com" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</template>

<script>
import {
  Menu,
  MenuItem,
  Submenu
} from 'element-ui'

export default {
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-submenu': Submenu
  },

  computed: {
  },

  methods: {
    handleSelect(key, keyPath) {
      if (key != 3) {
        this.$router.push(key)
      }
    }
  }
}
</script>

<style></style>
