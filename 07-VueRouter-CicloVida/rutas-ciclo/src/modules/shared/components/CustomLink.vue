<template>
  <a
    v-if="isExternalLink"
    :href="link.to"
    target="_blank"
    class="normal-link"
    >{{ link.text }}</a
  >
  <router-link
    v-else
    :to="link.to"
    v-slot="{ href, isActive }"
  >
    <a
      :href="href"
      :class="isActive ? 'is-active' : 'normal-link'"
      >{{ link.text }}</a
    >
  </router-link>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { computed } from 'vue'
  const props = defineProps({
    link: {
      type: Object,
      required: true,
    },
  })

  console.log(props.link)

  const isExternalLink = computed(() => props.link.to.startsWith('http'))
</script>

<style scoped>
  .is-active {
    color: #42b983;
  }
  .normal-link {
    color: #2c3e50;
  }
</style>
