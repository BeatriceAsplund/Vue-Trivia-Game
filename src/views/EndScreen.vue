<template>
  <div class="container">
    <div v-if="points != null">
      <ResultCard :points="points"></ResultCard>
    </div>
  </div>
</template>

<script>
import ResultCard from "../components/ResultCard.vue";

export default {
  name: "EndScreen",
  components: {
    ResultCard,
  },
  data: () => ({
    points: 0,
  }),
  mounted() {
    if (this.$route.params.points == null) {
      this.$router.push("/");
    }
    if (this.$route.params.points != null)
      this.points = this.$route.params.points;
  },
};
</script>