<template>
  <div id="startScreen">
      <div id="logo">TRIVIA MASTER</div>
      <p>A Trivia Game!</p>
      <p class="flicker">Press Play to Start!!</p>
      <router-link to="/categoriescontainer">
        <button id="play">Play (navigate to categoriescontainer)</button>
      </router-link>
      <button id="highScores">High Scores</button>      <!-- Need to add router-link here -->
      <div class="container">
          <p class="title">About</p>
          <p>Author: Bool Twinkledinks <br>
          Attributions: <br>
          Thanks to everyone!</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'StartScreen'
}
</script>

<style scoped>
    #startScreen {
    }

    .flicker {
        animation: flickeringText 1.2s infinite;
    }
    @keyframes flickeringText {
        0%{     color: #000;    }
        49%{    color: #000; }
        60%{    color: transparent; }
        99%{    color: transparent;  }
        100%{   color: #000;    }
    }

    button {
        display: block;
        width: 380px;
        margin-bottom: 10px;
        padding: 10px;
    }
</style>