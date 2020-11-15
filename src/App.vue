<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  justify-content: center;
  display: flex;
  width: auto;
  height: auto;
  color: lavender;
  margin-top: 2rem;
}

.card-style {
  display: block;
  position: relative;
  width: 500px;
  height: auto;
  padding: 1.5rem;
  background-color: #090916;
  border-radius: 16px;
  box-shadow: -0.1rem 0 2rem #000;
}

button:hover {
  box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.3);
}
</style>
