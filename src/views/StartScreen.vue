<template>
  <div class="container">
    <div class="card-style">
      <div id="logo">TRIVIA MASTER</div>
      <p>A Trivia Game!</p>
      <p class="flicker">Press Play to Start!!</p>

      <button class="play-button" @click="onPlayClick">Play</button>

      <p>Author: Beatrice and Johnny</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartScreen",
  methods: {
    onPlayClick() {
      this.$router.push("/categories");
    },
  },
};
</script>

<style scoped>
.flicker {
  animation: flickeringText 1.2s infinite;
}
@keyframes flickeringText {
  0% {
    color: #fff;
  }
  49% {
    color: #fff;
  }
  60% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
  100% {
    color: #fff;
  }
}

.play-button {
  background: orange;
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  vertical-align: middle;
}
</style>