<template>
  <h2>Contador En Componente</h2>
  <p>Valor: {{ contador }}</p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
</template>

<script>
  export default {
    name: 'ContadorOptions',
    data() {
      return {
        contador: 0,
      }
    },
    methods: {
      incrementar() {
        this.contador++
      },
      decrementar() {
        this.contador--
      },
    },
  }
</script>

<style scoped>
  button {
    margin: 0.5rem;
  }
</style>
