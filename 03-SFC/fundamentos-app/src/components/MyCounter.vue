<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareMethods() }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ counterSquare }}</p>
</template>

<script>
  export default {
    name: 'MyCounter',

    // Mi estado reactivo
    data: () => ({
      counter: 5,
    }),

    // Mis métodos
    methods: {
      squareMethods() {
        return this.counter * this.counter
      },
    },
    // Mis propiedades computadas, se gaurdan en cache y solo cambia cuando cambia el estado que computan..., solo son de lectura
    computed: {
      counterSquare() {
        return this.counter * this.counter
      },
    },
  }
</script>

<style lang="scss" scoped></style>
