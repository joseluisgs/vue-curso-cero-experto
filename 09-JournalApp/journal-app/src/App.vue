<template>
  <RouterView />
</template>

<script setup>
  import { onMounted } from 'vue'
  import { themeChange } from 'theme-change'

  // Para cambiar de tema automático!!!
  // https://github.com/saadeghi/theme-change
  onMounted(() => {
    themeChange('false')
  })
</script>

<style scoped></style>
