<template>
  <div>
    <Joke v-for="joke in favjokes" v-on:removefavjoke="remove(joke.id)" :key="joke.id" :joke="joke" fav="true"/>
    <div class="" v-if="!favjokes.length">
      there is no fav jokes...
    </div>
  </div>
</template>

<script>
import Joke from "../../../components/Joke";
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Joke
  },
  computed: mapGetters(["favjokes"]),
  head() {
    return {
      title: "FAV JOKES",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place to find funky jokes"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["removeFavJoke"]),
    remove(id){
      this.removeFavJoke(id)
    },
  }
};
</script>

<style>
</style>
