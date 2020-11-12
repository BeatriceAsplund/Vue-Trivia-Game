<template>
  <div id="app">
    <CategoriesContainer />
  </div>
</template>

<script>
import CategoriesContainer from './components/CategoriesContainer.vue'

export default {
  name: 'App',
  components: {
    CategoriesContainer
  }
}
</script>

<style>
#app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
