<template>
  <div class="container py-4 px-3 mx-auto">
    <h1 class="is-size-3">This is an home page</h1>
    <button class="button is-primary">Primary</button>
    <button class="button is-secondary">Secondary</button>
    <button class="button is-success">Success</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scooped>
  .button {
    margin: 10px;
  }

  h1 {
    color: darkblue;

    &:hover {
      color: violet;
      cursor: pointer;
    }
  }
</style>
