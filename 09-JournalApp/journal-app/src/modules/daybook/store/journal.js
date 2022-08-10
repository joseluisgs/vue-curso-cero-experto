import { defineStore } from 'pinia'

export const JournalStore = defineStore({
  id: 'JournalStore',

  // Mi estado
  state: () => ({
    isLoading: true,
    entries: [1, 2, 3, 4, 5, 6],
  }),

  // Mis Getters
  getters: {
    // doubleCount: (state) => state.counter * 2,
    // return entries even number
    getEvens: (state) => state.entries.filter((x) => x % 2 == 0),
    // TODO
    getEntriesByTerm: (state) => (term) => state.entries.filter((x) => x.includes(term)),
    getEntriesById: (state) => (id) => state.entries.find((x) => x.id == id),
  },

  // Mis acciones
  actions: {
    setLoading(loading) {
      this.isLoading = loading
    },

    // CRUD: Entries

    loadEntries() {
      // TODO
    },

    updateEntry(entry) {
      // TODO
    },

    deleteEntry(entry) {
      // TODO
    },
  },
})
