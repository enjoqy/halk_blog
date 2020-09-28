<template>
  <div>
    <!--导航-->
    <BlogNav></BlogNav>

    <!--内容-->
    <router-view/>

    <!--底部-->
    <BlogFooter></BlogFooter>

    <!--回到顶部-->
    <BackTop></BackTop>
  </div>
</template>

<script>
import BlogNav from "@/components/BlogNav/BlogNav";
import BlogFooter from "@/components/BlogFooter/BlogFooter";
import BackTop from '@/components/backTop/BackTop'

export default {
  name: "index",
  components: {
    BlogNav,
    BlogFooter,
    BackTop
  }
}
</script>

<style scoped>
body {
  background: #f6f6f6;
}
</style>
