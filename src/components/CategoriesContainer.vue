<template>
  <div class="container">
      <div class="title">Pick a category</div>
         <button @click="exitGame" id="quit" >QUIT (navigate to startscreen)</button>
      <div>Choose a category for Round 1</div>
      <CategoryItems v-bind:categories="fetchedCategories" v-on:category-click="handleCategoryClick"/>
  </div>
</template>

<script>
import axios from 'axios'
import CategoryItems from './CategoryItems.vue'

export default {
  name: 'CategoriesContainer',
  methods: {
        exitGame() {
          const isConfirm = confirm("Are you sure you want to quit?");
          if(isConfirm){
              this.$router.push("/");
          }  
        },
        handleCategoryClick(id) {
            this.$router.push({name:"QuestionScreen", params:{id}})
        }
    },
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
<style>
    section {
        margin: 5px;
        max-width: 300px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: lightgray;
        padding: 10px;
        display: inline-block;
    }

    section:active {
        background-color: rgb(145, 145, 145);
    }
</style>
