<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon</h1>
    <PokemonPicture
      :pokemon-id="pokemon.id"
      :show-pokemon="showPokemon"
    />
    <PokemonOptions
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

<script>
  import PokemonPicture from '@/components/PokemonPicture.vue'
  import PokemonOptions from '@/components/PokemonOptions.vue'
  import getPokemons from '@/services/pokeservice'
  import { mapState } from 'pinia'
  import { PokeStore } from '@/stores/pokestore'

  export default {
    name: 'PokemonView',
    components: {
      PokemonPicture,
      PokemonOptions,
    },
    data() {
      return {
        pokemons: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: '',
      }
    },
    methods: {
      async setPokemons() {
        this.pokemons = await getPokemons()
        this.pokemon = this.pokemons[Math.floor(Math.random() * this.pokemons.length)]
      },
      checkAnswer(pokemonId) {
        if (pokemonId === this.pokemon.id) {
          this.showPokemon = true
          this.showAnswer = true
          this.message = `¡Correcto! es ${this.pokemon.name}`
          this.estadisticas.victorias++
        } else {
          this.showPokemon = false
          this.showAnswer = true
          this.message = `¡Incorrecto! es ${this.pokemon.name}`
          this.estadisticas.derrotas++
        }
      },
      newGame() {
        this.pokemon = null
        this.pokemons = []
        this.showAnswer = false
        this.showPokemon = false
        this.message = ''
        this.setPokemons()
        this.estadisticas.partidas++
      },
    },
    mounted() {
      this.setPokemons()
    },
    computed: {
      ...mapState(PokeStore, ['estadisticas']),
    },
  }
</script>

<style lang="scss" scoped></style>
