<template>
  <div id="app">
    <BlogNav></BlogNav>

    <router-view/>

    <BlogFooter></BlogFooter>

  </div>
</template>
<script>
import BlogNav from "./components/BlogNav/BlogNav";
import BlogFooter from "./components/BlogFooter/BlogFooter";

export default {
  name: 'App',
  components: {
    BlogNav,
    BlogFooter
  }
}
</script>
<style>
body {
  background: #f6f6f6;
}
</style>
