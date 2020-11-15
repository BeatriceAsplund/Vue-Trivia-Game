<template>
  <div class="container">
    <div class="card-style">
      <div class="">Pick a category</div>
      <button class="button-style" @click="exitGame" id="quit">QUIT</button>
      <div>Choose a category to play!</div>
      <CategoryItems
        v-bind:categories="fetchedCategories"
        v-on:category-click="handleCategoryClick"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CategoryItems from "../components/CategoryItems";

export default {
  name: "CategoriesScreen",
  methods: {
    exitGame() {
      const isConfirm = confirm("Are you sure you want to quit?");
      if (isConfirm) {
        this.$router.push("/");
      }
    },
    handleCategoryClick(id) {
      this.$router.push({ name: "QuestionScreen", params: { id } });
    },
  },
  components: { CategoryItems },
  data: () => ({
    fetchedCategories: null,
  }),
  mounted() {
    axios
      .get("https://opentdb.com/api_category.php")
      .then(
        (response) => (this.fetchedCategories = response.data.trivia_categories)
      );
  },
};
</script>

<style>
#quit {
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  text-align: center;
  margin: 1rem;
  vertical-align: middle;
  background: red;
}
</style>
