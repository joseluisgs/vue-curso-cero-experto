<template>
  <h2>Contador Store Options API</h2>
  <p>Valor: {{ counter }}</p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
</template>

<script>
  import { mapWritableState } from 'pinia'
  import { CounterStore } from '../stores/counter'

  export default {
    name: 'ContadorOptions',
    methods: {
      incrementar() {
        this.counter++
      },
      decrementar() {
        this.counter--
      },
    },
    computed: {
      // Lo importamos en modo lectura y escritura y podemos acceder a eĺ en base a this.counter
      // Lo hemos desestructurado... Pero es peligroso poder usarlo así, mejor encapsular!!! (acciones)
      ...mapWritableState(CounterStore, ['counter']),
    },
  }
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
