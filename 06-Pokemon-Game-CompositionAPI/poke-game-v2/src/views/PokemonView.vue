<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon</h1>
    <PokemonPicture
      data-testid="PokemonPicture"
      :pokemon-id="pokemon.id"
      :show-pokemon="showPokemon"
    />
    <PokemonOptions
      data-testid="PokemonOptions"
      :pokemons="pokemons"
      @selection-pokemon="checkAnswer"
    />
    <!-- Se puede usar templete para no mostrar div -->
    <div
      v-if="showAnswer"
      class="fade-in"
    >
      <h2>{{ message }}</h2>
      <button @click="newGame">Jugar otra vez</button>
    </div>
    <h4>Estadisticas:</h4>
    <h5>Partidas: {{ estadisticas.partidas }}</h5>
    <h5>Aciertos: {{ estadisticas.victorias }}</h5>
    <h5>Derrotas: {{ estadisticas.derrotas }}</h5>
  </div>
</template>

<script setup>
  import PokemonOptions from '@/components/PokemonOptions.vue'
  import PokemonPicture from '@/components/PokemonPicture.vue'
  import getPokemons from '@/services/pokeservice'
  import { PokeStore } from '@/stores/pokestore'
  import { computed, onMounted, ref, watch } from 'vue'

  // Mis objetos reactivos!!!
  const pokemons = ref([])
  const pokemon = ref(null)
  const showPokemon = ref(false)
  const showAnswer = ref(false)
  const message = ref('')

  // Para o poner ejemplo con el watcher
  let idPokemon = 0 // no va a ser reactivo

  // La stores
  const { estadisticas } = PokeStore()

  // Ciclo de vida on Mounted
  onMounted(() => {
    setPokemons()
  })

  const setPokemons = async () => {
    pokemons.value = await getPokemons()
    pokemon.value = pokemons.value[Math.floor(Math.random() * pokemons.value.length)]
  }

  const newGame = () => {
    //pokemon.value = null
    pokemons.value = []
    showAnswer.value = false
    showPokemon.value = false
    message.value = ''
    setPokemons()
    estadisticas.partidas++
  }

  const checkAnswer = (pokemonId) => {
    if (pokemonId === pokemon.value.id) {
      showPokemon.value = true
      showAnswer.value = true
      message.value = `¡Correcto! es ${pokemon.value.name}`
      estadisticas.victorias++
    } else {
      showPokemon.value = false
      showAnswer.value = true
      message.value = `¡Incorrecto! es ${pokemon.value.name}`
      estadisticas.derrotas++
    }
  }

  // Computed, es un ejemplo pero lo cambia cada vez que lo lea!!!
  const pokemonData = computed(() => {
    return `Pokemon: ${pokemon.value.name} tiene el id:(${pokemon.value.id})`
  })

  // watcher
  watch(pokemon, (newPokemon) => {
    // Solo por hacer un ejemplo
    idPokemon = newPokemon.id
    //console.log(idPokemon)
  })
</script>

<style lang="scss" scoped></style>
