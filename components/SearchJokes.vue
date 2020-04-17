<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" placeholder="Search for Jokes...">
    <input type="submit" value="Search">
  </form>
</template>

<script>
export default {
  name: "SearchJokes",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-text", this.text);
      this.text = "";
    }
  }
};
</script>

<style scoped>
input{
  padding: 5px;
}
input[type="submit"]{
  background: #222;
  cursor: pointer;
  outline: none;
  border: 1px solid #222;
  color: #fff;
  font-weight: bold;
}
input[type="submit"]:hover{
  background: #333;
}

</style>
