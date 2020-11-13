<template>
  <div class="options" v-if="answers!=null">
    <button
    class="btn answerButton"
      v-bind:key="answer"
      v-for="answer in answers"
      :class=" answer == 'True' ? 'isTrue' : answer == 'False' ? 'isFalse' : '' " 
      @click="$emit('answer-click', answer)"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script>
export default {
  name: "QuestionOptions",
  props: ["answers"],

  data() {
    return {};
  },
  mounted(){
    if(this.type != "boolean"){
      this.shuffleAnswers(this.answers);
    }
  },
  methods: {
        
    shuffleAnswers(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  },
};
</script>

<style scoped>

.answerButton {
  background: orange;
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
}
.answerButton:hover {
  box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.3);
}

.isTrue{
  background: green;
}
.isFalse{
  background: red;
}

.options {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin-top: 2rem;
}
</style>