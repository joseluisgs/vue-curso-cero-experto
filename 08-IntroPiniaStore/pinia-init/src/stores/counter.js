import { defineStore } from 'pinia'

export const CounterStore = defineStore({
  id: 'CounterStore',
  state: () => ({
    counter: 0,
    isLoading: false,
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
      this.isLoading = true
      setTimeout(() => {
        this.counter = Math.floor(Math.random() * 100)
        this.isLoading = false
      }, 3000)
    },
  },
})
