<template>
  <h1>This is an Pokemon Page por id Details</h1>
  <h4>fullPath: {{ route.fullPath }}</h4>
  <h4>id: {{ route.params.id }}</h4>
  <h4>query: {{ route.query }}</h4>

  <button @click="goHome()">Go Home</button>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  console.log(route.fullPath)
  console.log(route.params.id)
  console.log(route.query)

  const goHome = () => {
    // router.push('/pokemons')
    // o usando nombraods
    router.push({ name: 'pokemon-list' })
  }
</script>
