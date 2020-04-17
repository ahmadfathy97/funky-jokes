<template>
  <header class="header">
    <h1 class="title">Jokes</h1>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jokes">Jokes</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jokes/fav">Favs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}

.header .title {
  font-size: 2.5rem;
  color: #526488;
}

.header ul {
  display: flex;
}
.header ul {
  list-style: none;
}

.header a {
  display: inline-block;
  color: #222;
  border-radius: 10px;
  padding: .25rem .5rem;
  margin: .25rem
}
.header a.nuxt-link-exact-active{
  background: #222;
  color: #fff;
}
</style>
