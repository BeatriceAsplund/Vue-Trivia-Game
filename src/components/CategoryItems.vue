<template>
  <ul>
      <li v-for="category in categories" :key=category.id>
            {{category.name}}
      </li>
  </ul>
</template>

<script>
export default {
    name: 'CategoryItems',
    props: ['categories']
}
</script>

<style>
    li {
        margin-bottom: 1rem;
    }
</style>