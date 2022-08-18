import entries from '@/data/entries'
import espera from '@/helpers/espera'
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
          //.sort((a, b) => new Date(a.date) < new Date(b.date))
        )
      },
    getEntryById: (state) => (entryId) => state.entries.find((entry) => entry.id === entryId),
  },

  // Mis acciones
  actions: {
    setLoading(loading) {
      this.isLoading = loading
    },

    // Esto que hago aquí es para seguir la dinámica de tiempo real de Firebase
    // Lo entenderás cuando lo veas implementado.
    // https://firebase.google.com/docs/firestore/query-data/listen?hl=es&authuser=0#view_changes_between_snapshots

    // CRUD: Entries
    create(entry) {
      this.entries.push(entry)
    },

    update(entry) {
      const index = this.entries.findIndex((e) => e.id === entry.id)
      this.entries.splice(index, 1, entry)
    },

    delete(entryId) {
      const index = this.entries.findIndex((e) => e.id === entryId)
      if (index !== -1) {
        this.entries.splice(index, 1)
      }
    },

    createEntry() {
      // TODO
    },

    async updateEntry(entry) {
      this.setLoading(true)
      await espera(500)
      this.update(entry)
      this.setLoading(false)
    },

    deleteEntry(entry) {
      // TODO
    },

    async fetchEntries() {
      this.setLoading(true)
      await espera(1500)
      entries.forEach((entry) => this.create(entry))
      this.setLoading(false)
    },

    clearData() {
      this.entries = []
    },
  },
})

export default JournalStore
