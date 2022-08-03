<template>
  <h2>Counter</h2>
  <p class="my-style">{{ counter }} <sup>2</sup> = {{ counterSquare }}</p>
  <div>
    <button @click="increment()">+1</button>
    <button @click="decrement()">-1</button>
  </div>
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
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
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

<style scoped>
  h2 {
    color: blueviolet;
  }
  button {
    background-color: #64bb87;
    border-radius: 5px;
    color: white;
    margin: 0 5px;
    cursor: pointer;
    padding: 5px 10px;
    transition: 0.3s ease-in-out;
  }
  .my-style {
    color: #444444;
    font-size: 1.2em;
    font-weight: bold;
  }
</style>
