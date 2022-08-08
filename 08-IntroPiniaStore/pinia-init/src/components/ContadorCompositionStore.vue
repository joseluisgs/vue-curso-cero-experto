<template>
  <h2>Contador Store Composition API</h2>
  <p>Valor: {{ counterStore.counter }}</p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
</template>

<script setup>
  import { CounterStore } from '../stores/counter'
  // accedemos a la store
  const counterStore = CounterStore()

  const incrementar = () => {
    counterStore.counter++
  }

  const decrementar = () => {
    counterStore.counter--
  }
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
