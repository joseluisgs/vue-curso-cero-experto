<template>
  <h1>¿Quién es este Pokemon</h1>
  <PokemonPicture
    :pokemonId="1"
    :showPokemon="true"
  />
  <PokemonOptions :pokemons="pokemons" />
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
      }
    },
    methods: {
      async getPokemons() {
        this.pokemons = await getPokemonsOptions()
        console.table(this.pokemons)
      },
    },
    mounted() {
      this.getPokemons()
    },
  }
</script>

<style lang="scss" scoped></style>
