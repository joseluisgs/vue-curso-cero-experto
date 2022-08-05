import { defineStore } from 'pinia'
// https://pinia.vuejs.org/cookbook/options-api.html#giving-access-to-the-whole-store
export const PokeStore = defineStore({
  id: 'PokeStore',
  state: () => ({
    estadisticas: {
      partidas: 1,
      victorias: 0,
      derrotas: 0,
    },
  }),
  getters: {},
  actions: {},
})
