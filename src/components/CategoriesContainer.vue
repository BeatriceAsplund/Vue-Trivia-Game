<template>
  <div>
      <CategoryItems v-bind:categories="fetchedCategories"/>
  </div>
</template>

<script>
import axios from 'axios'
import CategoryItems from './CategoryItems.vue'

export default {
  name: 'CategoriesContainer',
  components: {CategoryItems},
  data: () => ({
      fetchedCategories: null
  }),
  mounted() {
      axios
       .get('https://opentdb.com/api_category.php')
       .then(response => this.fetchedCategories = response.data.trivia_categories)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
