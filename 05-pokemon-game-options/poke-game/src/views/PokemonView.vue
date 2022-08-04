<template>
  <h1>¿Quién es este Pokemon</h1>
  <PokemonPicture
    :pokemonId="1"
    :showPokemon="true"
  />
  <PokemonOptions />
</template>

<script>
  import PokemonPicture from '@/components/PokemonPicture.vue'
  import PokemonOptions from '@/components/PokemonOptions.vue'
  export default {
    name: 'PokemonView',
    components: {
      PokemonPicture,
      PokemonOptions,
    },
  }
</script>

<style lang="scss" scoped></style>
