<template>
  <p>Init</p>
  <MyCounter />
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
