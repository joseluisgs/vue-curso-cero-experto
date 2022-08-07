<template>
  <h1>This is an Pokemon About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="changeName()">Cambiar Nombre</button>
</template>
<script setup>
  import {
    onBeforeMount,
    onBeforeUpdate,
    onMounted,
    onUpdated,
    onActivated,
    onDeactivated,
    onBeforeUnmount,
    onUnmounted,
    ref,
  } from 'vue'
  // Script setup es created!!!
  console.log('Pokemon About Page - setup')
  // Peticiones HTTP por aquí o en mnounted si son asincronas
  // Ciclo de vida
  onBeforeMount(async () => {
    console.log('PokemonAbout - onBeforeMount')
    const data = await apiFetch()
    console.log(data.name)
  })
  onMounted(() => console.log('PokemonAbout - onMounted'))
  onBeforeUpdate(() => console.log('PokemonAbout - onBeforeUpdate'))
  onUpdated(() => console.log('PokemonAbout - onUpdated'))
  onBeforeUnmount(() => console.log('PokemonAbout - onBeforeUnmount'))
  onUnmounted(() => console.log('PokemonAbout - onUnmounted'))
  onActivated(() => console.log('PokemonAbout - onActivated'))
  onDeactivated(() => console.log('PokemonAbout - onDeactivated'))

  const name = ref('Pokemon About')
  const changeName = () => {
    name.value = 'Pokemon About - Changed'
  }

  const apiFetch = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const data = await response.json()
    return data
  }
</script>
