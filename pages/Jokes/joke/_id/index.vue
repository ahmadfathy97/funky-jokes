<template>
  <div>
    <nuxt-link to="/jokes" class="backBtn">◀ Back</nuxt-link>
    <h2>{{ joke }}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      joke: {}
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      );

      this.joke = res.data.joke;
    } catch (err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: this.joke,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny dad jokes"
        }
      ]
    };
  }
};
</script>

<style scoped>
.backBtn{
  background: #000;
  padding: 5px 8px;
  box-shadow: 0 0 4px #222;
  color: #f5f5f5
}
.backBtn:hover{
  box-shadow: none
}
</style>
