<template>
  <div class="container py-4 px-3 mx-auto">
    <h1>This is an home page</h1>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scooped>
  .btn {
    margin: 10px;
  }

  h1 {
    color: green;

    &:hover {
      color: greenyellow;
    }
  }
</style>
