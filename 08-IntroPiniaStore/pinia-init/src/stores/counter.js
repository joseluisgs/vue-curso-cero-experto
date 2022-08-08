import { defineStore } from 'pinia'
// Podemos usar una store dentro de otra!!!
import { LoadingStore } from '@/stores/loading'

export const CounterStore = defineStore({
  id: 'CounterStore',
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    async incrementAsync(value = 1) {
      setTimeout(() => {
        this.counter += value
      }, 1000)
    },
    async decrementAsync(value = 1) {
      setTimeout(() => {
        this.counter -= value
      }, 1000)
    },
    async random() {
      const loadingStore = LoadingStore()
      loadingStore.setLoading(true)
      setTimeout(() => {
        this.counter = Math.floor(Math.random() * 100)
        loadingStore.setLoading(false)
      }, 3000)
    },
  },
})
