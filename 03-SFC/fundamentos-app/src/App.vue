<template>
  <p>Init</p>
  <!-- Si ponemos los dos puntos estamos haciendo el binding y nos coge los tipos -->
  <MyCounter :started="1" />
  <MyCounter
    titulo="Otro contador"
    started="3"
  />
</template>

<!-- lo pasamos a Options API -->
<script>
  import MyCounter from '@/components/MyCounter.vue'

  export default {
    name: 'App',

    components: {
      MyCounter,
    },
  }
</script>

<style scoped></style>
