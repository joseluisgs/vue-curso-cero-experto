<template>
  <h2>Contador Store Options API</h2>
  <p>Valor: {{ counter }}</p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
  <button @click="incrementarAsync">Async +</button>
  <button @click="decrementarAsync">Async -</button>
</template>

<script>
  import { mapWritableState, mapActions } from 'pinia'
  import { CounterStore } from '../stores/counter'

  export default {
    name: 'ContadorOptions',
    methods: {
      incrementar() {
        this.increment()
      },
      decrementar() {
        this.decrement()
      },
      async incrementarAsync() {
        this.incrementAsync(3)
      },
      async decrementarAsync() {
        this.decrementAsync(3)
      },
      // Los importamos y los podemos usar con this
      ...mapActions(CounterStore, ['increment', 'decrement', 'incrementAsync', 'decrementAsync']),
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
