<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon</h1>
    <PokemonPicture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    />
    <PokemonOptions :pokemons="pokemons" />
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
    },
    mounted() {
      this.getPokemons()
    },
  }
</script>

<style lang="scss" scoped></style>
