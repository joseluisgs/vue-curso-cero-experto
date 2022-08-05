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
        } else {
          this.showPokemon = false
        }
      },
    },
    mounted() {
      this.getPokemons()
    },
  }
</script>

<style lang="scss" scoped></style>
