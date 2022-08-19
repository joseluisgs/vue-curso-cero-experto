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
    // De esta manera, lo asincrono es lo remoto, y estos métodos locales es para manejar una chaché local.

    // CRUD: Entries
    create(entry) {
      console.log(entry)
      this.entries.push(entry)
    },

    update(entry) {
      const index = this.entries.findIndex((e) => e.id === entry.id)
      this.entries.splice(index, 1, entry)
    },

    delete(entry) {
      const index = this.entries.findIndex((e) => e.id === entry.id)
      this.entries.splice(index, 1)
    },

    async createEntry(entry) {
      this.setLoading(true)
      await espera(1000)
      // Voy a ponerle una imagen por defecto por ahora hasta que la suba
      entry.picture = 'https://random.imagecdn.app/600/600'
      this.create(entry)
      this.setLoading(false)
    },

    async updateEntry(entry) {
      this.setLoading(true)
      await espera(500)
      this.update(entry)
      this.setLoading(false)
    },

    async deleteEntry(entry) {
      this.setLoading(true)
      await espera(1000)
      this.delete(entry)
      this.setLoading(false)
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
