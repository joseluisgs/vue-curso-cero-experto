<template>
  <div class="pokemon-container">
    <!-- get image from assets folder -->
    <img
      v-if="!showPokemon"
      :src="pokemonImage"
      alt="pokemon"
      class="hidden-pokemon"
    />
    <img
      v-else
      :src="pokemonImage"
      alt="pokemon"
      class="fade-in"
    />
  </div>
</template>

<script setup>
  // Todo lo que usemos lo tenemos que importar para ser más eficientes
  import { computed } from 'vue'

  const props = defineProps({
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  })

  // Para leer las propiedades de la propia component
  // Un campo computado....
  // return `@/assets/images/pokemon-test.svg`
  const pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
  )
</script>

<style scoped>
  .hidden-pokemon {
    filter: brightness(0);
  }
  /* Pokemon Picture */
  .pokemon-container {
    height: 200px;
  }
  img {
    height: 200px;
    position: absolute;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
</style>
