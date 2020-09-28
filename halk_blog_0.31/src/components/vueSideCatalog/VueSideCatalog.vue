<template>
  <div id="app">
    <div id="demo">
      <h3>Creation at Netscape</h3>
      <p>
        The Mosaic web browser was released in 1993.
        As the first browser with a graphical user interface accessible to non-technical people,
        it played a prominent role in the rapid growth of the nascent World Wide Web
      </p>
      <h3>Adoption by Microsoft</h3>
      <h3>The rise of JScript</h3>
    </div>
    <side-catalog
        class="catalog"
        v-bind="catalogProps"
    ></side-catalog>
  </div>
</template>

<script>
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'

export default {
  name: "VueSideCatalog",
  components: {
    SideCatalog,
  },
  data() {
    return {
      catalogProps:{
        container: '#demo',
      },
    };
  },
}

</script>

<style scoped>
.catalog {
  position: fixed;
  top: 50px;
  right: 50px;
}
</style>
