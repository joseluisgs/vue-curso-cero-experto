<template>
  <h2>Contador Store Composition API</h2>
  <p>Valor: {{ counterStore.counter }}</p>
  <p>Doble: {{ counterStore.doubleCount }}</p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
  <button @click="incrementarAsync">Async +</button>
  <button @click="decrementarAsync">Async -</button>
  <button
    @click="random"
    :disabled="counterStore.isLoading"
  >
    Random
  </button>
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

  const random = async () => {
    counterStore.random()
  }
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
