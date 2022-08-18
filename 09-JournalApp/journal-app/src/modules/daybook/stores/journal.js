import { getEntries } from '@/data/entries'
import { defineStore } from 'pinia'

export const JournalStore = defineStore({
  id: 'JournalStore',

  // Mi estado
  state: () => ({
    isLoading: false,
    entries: [],
  }),

  // Mis Getters
  getters: {
    getEntriesByTerm:
      (state) =>
      (searchTerm = '') => {
        // console.log(searchTerm)
        if (searchTerm === '') return state.entries

        let filter = new RegExp(searchTerm, 'i') // patron de búsqueda ignorando mayúsculas o minúsculas
        return (
          state.entries
            // Filtramos por las que tengan esa expresión regular
            .filter((entry) => entry.text.match(filter))
            // Ordenamos de mas moderna a antigua
            .sort((a, b) => new Date(a.date) < new Date(b.date))
        )
      },
    getEntryById: (state) => (entryId) => state.entries.find((entry) => entry.id === entryId),
  },

  // Mis acciones
  actions: {
    setLoading(loading) {
      this.isLoading = loading
    },

    // CRUD: Entries

    creatEntry() {
      // TODO
    },

    updateEntry(entry) {
      // TODO
    },

    deleteEntry(entry) {
      // TODO
    },

    async fetchEntries() {
      this.setLoading(true)
      const entries = await getEntries()
      this.setLoading(false)
      this.entries = entries
    },

    clearData() {
      this.entries = []
    },
  },
})

export default JournalStore
