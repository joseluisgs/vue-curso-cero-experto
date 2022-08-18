import { getUser } from '@/data/users'
import JournalStore from '@/modules/daybook/stores/journal'
import { defineStore } from 'pinia'

export const UserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    user: null,
  }),

  getters: {
    isLoggedIn: (state) => state.user !== null,
  },

  actions: {
    setUser(user) {
      this.user = user
    },

    async logIn() {
      const user = await getUser()
      this.setUser(user)
      // Le cargamos las entradas del usuario!!!
      const journalStore = JournalStore()
      journalStore.fetchEntries()
    },

    async logOut() {
      await getUser() // Solo por perder el tiempo y parezca asincrono
      // Le limpiamos los datos del usuario!!!
      const journalStore = JournalStore()
      journalStore.clearData()
      this.setUser(null)
    },
  },
})

export default UserStore
