<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-primary">1</div>
      <div class="col bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <!-- Maximo 12 posiciones-->
    <div class="row q-mb-md">
      <div class="col bg-primary">1</div>
      <div class="col col-6 bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>

    <div class="row q-mb-md justify-center">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-secondary">2</div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-secondary">2</div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-secondary">2</div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
  .col,
  .col-4,
  .col-5,
  .col-6,
  .col-12 {
    height: 50px;
  }
</style>