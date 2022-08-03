<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
</template>

<script>
  export default {
    name: 'MyCounter',

    // Mi estado reactivo
    data: () => ({
      counter: 5,
    }),
  }
</script>

<style lang="scss" scoped></style>
