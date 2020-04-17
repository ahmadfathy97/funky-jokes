<template>
  <div>
    <SearchJokes v-on:search-text="searchText"/>
    <Joke v-on:addnewfavjoke="add(joke)" v-on:removefavjoke="remove(joke.id)"  v-for="joke in jokes" :key="joke.id" :joke="joke" :fav="local.indexOf(joke.id) > -1"/>
  </div>
</template>

<script>
import axios from "axios";
import Joke from "../../components/Joke";
import SearchJokes from "../../components/SearchJokes";
import { mapGetters, mapActions } from 'vuex'


export default {
  components: {
    Joke,
    SearchJokes
  },
  data() {
    return {
      jokes: []
    };
  },
  computed: {
    ...mapGetters(["favjokes"]),
    local(){
      return this.favjokes.map((joke)=>{
        return joke.id
      })
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get("https://icanhazdadjoke.com/search", config);

      this.jokes = res.data.results;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    ...mapActions(["addFavJoke", "removeFavJoke"]),
    add(joke){
      this.addFavJoke(joke)
      console.log(joke);
    },
    remove(id){
      this.removeFavJoke(id)
    },
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };
      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );
        this.jokes = res.data.results;
      } catch (err) {
        console.log(err);
      }
    }
  },
  head() {
    return {
      title: "JOKES",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place to find funky jokes"
        }
      ]
    };
  }
};
</script>

<style>
</style>
