<template>
  <h1>This is an Pokemon Page por id Details</h1>
  <h4>Props: {{ props.id }}</h4>
  <h4>FullPath: {{ route.fullPath }}</h4>
  <h4>Param Id: {{ route.params.id }}</h4>
  <h4>Query: {{ route.query }}</h4>

  <button @click="goHome()">Go Home</button>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'

  // Vamos a pasarle unas propiedades!!!
  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
  })
  // Si necesito atributos necesito setup

  const router = useRouter()
  const route = useRoute()

  console.log('Mi propiedad', props.id)

  console.log('Mi path', route.fullPath)
  console.log('Mis param', route.params.id)
  console.log('Mi query', route.query)

  const goHome = () => {
    // router.push('/pokemons')
    // o usando nombraods
    router.push({ name: 'pokemon-list' })
  }
</script>
