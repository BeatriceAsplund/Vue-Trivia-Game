<template>
<div class="container">
  <div class="result-card">
      <h2>End Result</h2>
      <div> Your points: {{points}}</div>

      <button class="btn-success playAgainButton" @click="playAgain">Play Again!</button>
  </div>
  </div>
</template>

<script>
export default {
    name:"ResultCard",
    props:["points"],
    methods:{
        playAgain(){
            // Skicka till kategori sidan istället
            this.$router.replace("/categoriescontainer");
        }
    }

}
</script>

<style scoped>

.result-card{
    display: block;
  position: relative;
  width: 400px;
  height: auto;
  padding: 1.5rem;
  background-color: #090916;
  border-radius: 16px;
  box-shadow: -0.1rem 0 2rem #000;

}
.playAgainButton{
    padding: 5px;
    margin-top: 1rem;
    border-radius: 8px;
}

</style>