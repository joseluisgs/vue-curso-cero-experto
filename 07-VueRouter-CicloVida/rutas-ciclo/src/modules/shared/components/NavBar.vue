<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <!-- Si quiero usar el nombre de las vistas y no su url-->
    <!-- <RouterLink :to="{ name: 'home' }">Home Named</RouterLink> -->
    <!-- <RouterLink :to="{ name: 'pokemon-list' }">Pokemon List</RouterLink> -->
    <!-- <RouterLink to="/pokemon/1">Pokemon 1</RouterLink> -->
    <!-- Con nombrados -->
    <!-- <RouterLink :to="{ name: 'pokemon-page', params: { id: '2' } }">Pokemon 2</RouterLink> -->
    <!-- <RouterLink to="/pokemon/about">About Pokemon</RouterLink> -->
    <!-- Externo a Google -->
    <RouterLink :to="{ name: 'google' }">Google</RouterLink>
  </nav>
  <nav>
    <CustomLink
      v-for="link in pokemonsLinks"
      :key="link.to"
      :link="link"
    />
  </nav>
  <nav>
    <CustomLink
      v-for="link in dragonballLinks"
      :key="link.to"
      :link="link"
    />
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { defineAsyncComponent, ref } from 'vue'
  const CustomLink = defineAsyncComponent(() => import('./CustomLink.vue'))

  const pokemonsLinks = ref([
    { to: '/pokemon', text: 'Pokemons' },
    { to: '/pokemon/50', text: 'Pokemon Por ID' },
    { to: '/pokemon/about', text: 'Pokemon About' },
    { to: 'http://google.com', text: 'Google' },
  ])

  const dragonballLinks = ref([
    { to: '/dragonball', text: 'Dragon Ball' },
    { to: '/dragonball/50', text: 'Dragon Ball Por ID' },
    { to: '/dragonball/about', text: 'Dragon Ball About' },
  ])
</script>

<style scoped>
  nav {
    padding: 0 30px;
  }
  nav a {
    color: #2c3e50;
    font-weight: bold;
    margin: 0 10px;
  }
  nav a {
    cursor: pointer;
  }
  /* Para el enlace activo */
  .router-link-exact-active {
    color: #42b983;
  }
</style>
