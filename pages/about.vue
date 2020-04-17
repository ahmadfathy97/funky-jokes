<template>
  <div>
    <h1>About this APP</h1>
    <h2>Technologies that used for making this app</h2>
    <ul>
      <li>Vue</li>
      <li>Vuex</li>
      <li>Nuxt</li>
      <li>LocalStorage</li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "ABOUT",
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
