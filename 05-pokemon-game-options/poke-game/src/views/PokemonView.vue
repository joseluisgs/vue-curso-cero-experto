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
  </div>
</template>

<script>
  import PokemonPicture from '@/components/PokemonPicture.vue'
  import PokemonOptions from '@/components/PokemonOptions.vue'
  import getPokemonsOptions from '../helpers/getPokemonsOptions'
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
      async getPokemons() {
        this.pokemons = await getPokemonsOptions()
        this.pokemon = this.pokemons[Math.floor(Math.random() * this.pokemons.length)]
      },
      checkAnswer(pokemonId) {
        if (pokemonId === this.pokemon.id) {
          this.showPokemon = true
          this.showAnswer = true
          this.message = `¡Correcto! es ${this.pokemon.name}`
        } else {
          this.showPokemon = false
          this.showAnswer = true
          this.message = `¡Incorrecto! es ${this.pokemon.name}`
        }
      },
      newGame() {
        this.pokemon = null
        this.pokemons = []
        this.showAnswer = false
        this.showPokemon = false
        this.message = ''
        this.getPokemons()
      },
    },
    mounted() {
      this.getPokemons()
    },
  }
</script>

<style lang="scss" scoped></style>
