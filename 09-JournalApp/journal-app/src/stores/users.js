import { getUser } from '@/data/users'
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
    },

    async logOut() {
      await getUser() // Solo por perder el tiempo y parezca asincrono
      this.setUser(null)
    },
  },
})

export default UserStore
