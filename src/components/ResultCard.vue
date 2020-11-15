<template>
  <div class="container">
    <div class="card-style">
      <h2>End Result</h2>
      <div>Your points: {{ points }}</div>

      <button class="btn-success play-again-button" @click="playAgain">
        Play Again!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: ["points"],
  methods: {
    playAgain() {
      this.$router.replace("/categories");
    },
  },
};
</script>

<style scoped>
.play-again-button {
  padding: 5px;
  margin-top: 1rem;
  border-radius: 8px;
}
</style>