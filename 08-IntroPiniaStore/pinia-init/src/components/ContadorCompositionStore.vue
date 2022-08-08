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
    :disabled="loadingStore.isLoading"
  >
    Random
  </button>
</template>

<script setup>
  import { CounterStore } from '@/stores/counter'
  import { LoadingStore } from '@/stores/loading'
  // accedemos a la store
  const counterStore = CounterStore()
  const loadingStore = LoadingStore()

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
    // Podriamos cambiar el estado aquí, pero lo hacemos en la store
    // loadingStore.setLoading(true)
    counterStore.random()
    // loadingStore.setLoading(false)
  }
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
