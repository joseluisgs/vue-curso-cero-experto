<template>
  <h1>This is an Pokemon Page por id Details</h1>
  <h4>Props: {{ props.id }}</h4>
  <h4>FullPath: {{ route.fullPath }}</h4>
  <h4>Param Id: {{ route.params.id }}</h4>
  <h4>Query: {{ route.query }}</h4>
  <div v-if="pokemon">
    <h4 v-if="pokemon">Pokemon Name: {{ pokemon.name }}</h4>
    <img
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
    />
  </div>

  <button @click="goHome()">Go Home</button>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'
  import { ref, watch } from 'vue'

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

  // Mi pokemon
  const pokemon = ref(null)

  console.log('Mi propiedad', props.id)

  console.log('Mi path', route.fullPath)
  console.log('Mis param', route.params.id)
  console.log('Mi query', route.query)

  const goHome = () => {
    // router.push('/pokemons')
    // o usando nombraods
    router.push({ name: 'pokemon-list' })
  }

  const go404 = () => {
    router.push({ name: '404' })
  }

  const apiFetch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
      go404()
    }
  }

  // onMounted(async () => {
  //   pokemon.value = await apiFetch()
  // })
  // onUpdated(async () => {
  //   pokemon.value = await apiFetch()
  // })
  // Watcher sobre una prop en compistion API: https://stackoverflow.com/questions/59125857/how-to-watch-props-change-with-vue-composition-api-vue-3
  watch(
    () => props.id,
    async () => {
      pokemon.value = await apiFetch()
    }
  )
</script>
