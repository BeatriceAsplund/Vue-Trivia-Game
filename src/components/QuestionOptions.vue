<template>
  <div class="options" v-if="answers != null">
    <button
      class="btn answer-button"
      v-bind:key="answer"
      v-for="answer in answers"
      :class="
        answer == 'True' ? 'is-true' : answer == 'False' ? 'is-false' : ''
      "
      @click="$emit('answer-click', answer)"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script>
export default {
  name: "QuestionOptions",
  props: ["answers","type"],

  data() {
    return {};
  },
  beforeMount() {
      this.shuffleAnswers(this.answers);

  },
  methods: {
    shuffleAnswers(array) {
      if(this.type == "boolean"){
        array[0] = "True";
        array[1] = "False"
      }else{
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      }
      
      return array;
    },
  },
  watch:{
    answers(){
      this.shuffleAnswers(this.answers);
    }
  }
};
</script>

<style scoped>
.answer-button {
  background: orange;
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
}
.answer-button :hover {
  box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.3);
}

.is-true {
  background: green;
}
.is-false {
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