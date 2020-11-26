<template>
  <el-container style="height: 100%;min-height:100vh;" direction="vertical">
    <el-header style="background-color: #B3C0D1;color: #333;height: 80px">
      <img src="@/assets/myLogo.png" style="width: 400px;height: 80px;"/>

    </el-header>
    <el-container>
      <aside-menu></aside-menu>
      <el-main style="background-color: #E9EEF3;color: #333;">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from './components/asideMenu'

export default {
  name: "layout",
  components: {
    AsideMenu
  }
}
</script>

<style>


</style>
