<template>
  <h2>Contador Store Options API</h2>
  <p>Valor: {{ counter }}</p>
  <p>Doble: {{ doubleCount }}</p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
  <button @click="incrementarAsync">Async +</button>
  <button @click="decrementarAsync">Async -</button>
  <button
    @click="random"
    :disabled="isLoading"
  >
    Random
  </button>
</template>

<script>
  import { mapWritableState, mapActions, mapState } from 'pinia'
  import { CounterStore } from '@/stores/counter'
  import { LoadingStore } from '@/stores/loading'

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
      async random() {
        this.random()
      },
      // Los importamos y los podemos usar con this
      ...mapActions(CounterStore, [
        'increment',
        'decrement',
        'incrementAsync',
        'decrementAsync',
        'random',
      ]),
    },
    computed: {
      // Lo importamos en modo lectura y escritura y podemos acceder a eĺ en base a this.counter
      // Lo hemos desestructurado... Pero es peligroso poder usarlo así, mejor encapsular!!! (acciones)
      ...mapWritableState(CounterStore, ['counter']),
      ...mapState(CounterStore, ['doubleCount']),
      ...mapState(LoadingStore, ['isLoading']),
    },
  }
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
