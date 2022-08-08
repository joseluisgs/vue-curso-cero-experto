import { defineStore } from 'pinia'

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
    incrementAsync(value = 1) {
      setTimeout(() => {
        this.counter += value
      }, 1000)
    },
    decrementAsync(value = 1) {
      setTimeout(() => {
        this.counter -= value
      }, 1000)
    },
  },
})
