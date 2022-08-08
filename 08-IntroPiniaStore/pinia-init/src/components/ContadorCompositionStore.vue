<template>
  <h2>Contador Store Composition API</h2>
  <p>Valor: {{ counterStore.counter }}</p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
  <button @click="incrementarAsync">Async +</button>
  <button @click="decrementarAsync">Async -</button>
</template>

<script setup>
  import { CounterStore } from '../stores/counter'
  // accedemos a la store
  const counterStore = CounterStore()

  // Encapsulamos con metodos
  const incrementar = () => {
    counterStore.increment()
  }

  const decrementar = () => {
    counterStore.decrement()
  }

  const incrementarAsync = async () => {
    counterStore.incrementAsync(3)
  }

  const decrementarAsync = async () => {
    counterStore.decrementAsync(3)
  }
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
