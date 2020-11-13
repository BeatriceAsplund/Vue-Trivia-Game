<template>
  <div class="container" v-if="questions!=null">
    <Question :question ="activeQuestion" :index="index" :quizSize="questions.length" :points="points" v-on:get-next-question= "handleAnswer" />
  </div>
</template>

<script>
import Question from "../components/Question";
import axios from 'axios';
export default {
  name: "QuestionScreen",
  components: {
    Question,
  },
  beforeCreate(){
    if(!this.$route.params.id){
      this.$router.push("/");
    }

  },
  beforeMount(){
              axios.get("https://opentdb.com/api.php?amount=5&category="+this.$route.params.id).then(res =>{
           this.questions = res.data.results;
        
            this.activeQuestion = this.questions[this.index];
              console.log(this.questions);
        });

  }
  ,
  data() {
    return {
      activeQuestion:{},
      questions: null,
      index: 0,
      points: 0
      
    }
  },
  methods:{
    setNextQuestion(){
      this.index++;

    if (this.index < this.questions.length) {
      this.activeQuestion = this.questions[this.index];

      } else {
        this.$router.push({ name: "EndScreen", params: { points: this.points } });
      }
    },
    addPoints(answer){
      if (answer == this.activeQuestion.correct_answer) {
        this.points += 10;
      }
  },
        handleAnswer(answer){
          this.addPoints(answer);
          this.setNextQuestion();

      }
  }

};
</script>


<style scoped>

</style>
