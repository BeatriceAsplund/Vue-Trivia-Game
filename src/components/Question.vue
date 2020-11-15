<template>
  <div class="container">
    <div class="card-style" v-if="question != null">
      <div class="questionHeader">
        <h4>Question {{ index + 1 }}/{{ quizSize }}</h4>
        <h4>Category: {{ question.category }}</h4>
        <h4>Points: {{ points }}</h4>
      </div>

      <div class="question-text">{{ question.question }}</div>

      <div>
        <QuestionOptions
          :type="type"
          :answers="answers"
          v-on:answer-click="getNextQuestion"
        ></QuestionOptions>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionOptions from "./QuestionOptions";
export default {
  name: "Question",
  props: ["question", "index", "quizSize", "points"],
  components: {
    QuestionOptions,
  },
  data() {
    return {
      answers: [],
      type: null,
    };
  },
  mounted() {
    if(this.question){
    this.setQuestion();
    }
  },
  methods: {
    setQuestion() {
      this.question.question = this.question.question.replace(/&quot;/g, '"');
      this.answers = [
        this.question.correct_answer,
        ...this.question.incorrect_answers,
      ];
      this.type = this.question.type;
    },
    getNextQuestion(answer) {
      this.$emit("get-next-question", answer);
    },
  },
  watch: {
    question: function() {
      this.setQuestion();
    },
  },
};
</script>

<style scoped>
.questionHeader {
  display: block;
}

.question-text {
  margin-top: 2rem;
}
.questionHeaderElement {
  display: block;
}
</style>