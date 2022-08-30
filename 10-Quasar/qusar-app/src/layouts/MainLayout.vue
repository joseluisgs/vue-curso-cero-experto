<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import EssentialLink from 'components/EssentialLink.vue'
  import { ref } from 'vue'

  const essentialLinks = [
    {
      title: 'Docs',
      caption: 'quasar.dev',
      icon: 'las la-graduation-cap',
      link: 'https://quasar.dev',
    },
    {
      title: 'Github',
      caption: 'github.com/quasarframework',
      icon: 'lab la-github',
      link: 'https://github.com/quasarframework',
    },
    {
      title: 'Discord Chat Channel',
      caption: 'chat.quasar.dev',
      icon: 'lab la-discord',
      link: 'https://chat.quasar.dev',
    },
    {
      title: 'Forum',
      caption: 'forum.quasar.dev',
      icon: 'lab la-forumbee',
      link: 'https://forum.quasar.dev',
    },
    {
      title: 'Twitter',
      caption: '@quasarframework',
      icon: 'lab la-twitter',
      link: 'https://twitter.quasar.dev',
    },
    {
      title: 'Facebook',
      caption: '@QuasarFramework',
      icon: 'lab la-facebook-f',
      link: 'https://facebook.quasar.dev',
    },
    {
      title: 'Quasar Awesome',
      caption: 'Community Quasar projects',
      icon: 'las la-heart',
      link: 'https://awesome.quasar.dev',
    },
  ]

  const leftDrawerOpen = ref(false)
  const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value)
</script>