<template>
  <div>
      <section v-for="category in categories" :key=category.id @click="$emit('category-click', category.id)">
            {{category.name}}
      </section>
  </div>
</template>

<script>
export default {
    name: 'CategoryItems',
    props: ['categories'],
}
</script>

<style>

</style>