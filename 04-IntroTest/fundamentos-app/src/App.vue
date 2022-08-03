<template>
  <Indecision />
  <!-- <hr />
  <MyCounter :started="1" />
  <MyCounter
    titulo="Otro contador"
    started="3"
  />
  <hr /> -->
</template>

<!-- lo pasamos a Options API -->
<script>
  // import MyCounter from '@/components/MyCounter.vue'
  import Indecision from '@/components/Indecision.vue'

  export default {
    name: 'App',

    components: {
      // MyCounter,
      Indecision,
    },
  }
</script>

<style scoped></style>
