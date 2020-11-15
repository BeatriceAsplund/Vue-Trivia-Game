<template>
  <div>
    <button
      class="category-button"
      v-for="category in categories"
      :key="category.id"
      @click="$emit('category-click', category.id)"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CategoryItems",
  props: ["categories"],
};
</script>

<style scoped>
.category-button {
  background: orange;
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
}

</style>