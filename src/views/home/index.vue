<template>
  <el-container>
  <!-- 左右布局 -->
  <layout-aside style="background-color:#353b4e;height:100vh">左侧</layout-aside>
  <!-- 再放置一个container -->
  <el-container>
    <!-- 上下布局 -->
    <el-header>头部</el-header>
    <!-- 主要区域 -->
    <el-main>主要区域</el-main>
  </el-container>
</el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>
<style lang="less" scoped>

</style>
