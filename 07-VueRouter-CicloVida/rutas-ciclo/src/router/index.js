import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonList from '@/modules/pokemon/views/PokemonList.vue'
import PokemonPage from '@/modules/pokemon/views/PokemonPage.vue'

const router = createRouter({
  // Hacemos el history para la URL y sin #, si no es crteateHashHistory
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Exportación directa
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Lazy loading, solo cuando quiere...
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // Vamos a hacer la de pokemon directa
    {
      path: '/pokemon',
      name: 'pokemon-list',
      component: PokemonList,
      meta: { title: 'Pokemon List' }, // Así ponemos campos meta para SEO
    },
    // Vamos a hacer la pokemon about lazy
    {
      path: '/pokemon/about',
      name: 'pokemon-about',
      component: () => import('@/modules/pokemon/views/PokemonAbout.vue'),
      meta: { title: 'Pokemon List' },
    },
    // Pagina d detalles de pokemon
    {
      path: '/pokemon/:id',
      name: 'pokemon-detail',
      component: PokemonPage,
      meta: { title: 'Pokemon Details' },
    },
  ],
})

export default router
