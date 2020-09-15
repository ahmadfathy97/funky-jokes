<template>
  <div class="container">
    <AppHeader/>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
  background: url('../assets/bg.png') no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}

a {
  color: #666;
  text-decoration: none;
}

.container {
  max-width: 1020px;
  min-height: 100vh;
  margin: 2rem auto;
  width: 90%;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 5px 20px #222
}
</style>
