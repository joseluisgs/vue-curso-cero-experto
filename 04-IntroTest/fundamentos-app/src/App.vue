<template>
  <Indecision @question-response="callbackQuestionResponse" />
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
    methods: {
      callbackQuestionResponse(data) {
        console.log('He recibido el evento: ', data)
      },
    },
  }
</script>

<style scoped></style>
