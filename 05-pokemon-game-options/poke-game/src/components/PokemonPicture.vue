<template>
  <div class="pokemon-container">
    <!-- get image from assets folder -->
    <img
      src="@/assets/images/pokemon-test.svg"
      alt="pokemon"
      class="hidden-pokemon"
    />
    <img
      src="@/assets/images/pokemon-test.svg"
      alt="pokemon"
      class="fade-in"
    />
  </div>
</template>

<script>
  export default {
    name: 'PokemonPicture',
  }
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
