<template>
  <div :class="{fav: fav}" class="joke">
    <nuxt-link :to="'/jokes/joke/' + joke.id">
      <p>{{ joke.joke }}</p>
    </nuxt-link>
    <div class="btns">
      <button @click="removeFromFav(joke.id)" v-if="fav">Remove from fav</button>
      <button @click="addToFav(joke)" v-if="!fav">Add to fav</button>
    </div>
    <div class="clear-fix"></div>
  </div>
</template>

<script>
export default {
  name: "Joke",
  props: ["joke", "fav"],
  methods:{
    addToFav(joke){
      this.$emit('addnewfavjoke', joke)
    },
    removeFromFav(id){
      this.$emit('removefavjoke', id)
    }
  }
};
</script>

<style scoped>
.joke {
  padding: 1rem;
  box-shadow: 0 0 2px #222;
  margin: 1rem 0;
  clear: both;
}
a:hover{
  font-weight: bold;
}
.fav{
  border-color: #f00;
  background: rgba(255,0,0,.1);
}
.btns{
  float: right;
}
button{
  padding: 2px 10px;
  cursor: pointer;
  outline: none;
  border: 1px solid #f66;
  background: #f66;
  font-size: 18px;
  color: #fff;
  text-shadow: 0 0 4px solid #222
}
.clear-fix{
  clear: both;
}
</style>
