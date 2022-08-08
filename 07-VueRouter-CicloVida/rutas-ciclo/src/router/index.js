import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/modules/shared/views/HomeView.vue'
import PokemonList from '@/modules/pokemon/views/PokemonList.vue'
import PokemonPage from '@/modules/pokemon/views/PokemonPage.vue'
import isAuthenticatedGuard from '@/router/auth-guard'

const router = createRouter({
  // Hacemos el history para la URL y sin #, si no es crteateHashHistory
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Exportación directa
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
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
      component: () => import('@/modules/shared/views/AboutView.vue'),
    },

    // Pokemon
    {
      path: '/pokemon',
      name: 'pokemon-layout',
      meta: { title: 'Pokemon List' }, // Así ponemos campos meta para SEO
      component: () => import('@/modules/pokemon/layouts/PokemonLayout.vue'),
      // Definimos las rutas hijas que se renderizan dentro de este componente en su propio router view!!!
      children: [
        {
          path: '',
          name: 'pokemon-list',
          meta: { title: 'Pokemon List' },
          component: PokemonList,
        },
        {
          path: 'about',
          name: 'pokemon-about',
          component: () => import('@/modules/pokemon/views/PokemonAbout.vue'), // Lazy loading
          meta: { title: 'Pokemon About' },
        },
        // Pagina d detalles de pokemon, le pasamos el parámetro id por la url
        {
          path: ':id',
          name: 'pokemon-page',
          component: PokemonPage,
          // Le pasamos props a la vista PokemonPage
          props: (route) => {
            const id = Number(route.params.id) // Si no se puede lo mandamos a 404
            return isNaN(id) ? router.push({ name: '404' }) : { id: id }
          },
          meta: { title: 'Pokemon Page' },
        },
        {
          path: '/',
          redirect: { name: 'pokemon-list' },
        },
      ],
    },

    // Dragon Ball
    {
      path: '/dragonball',
      name: 'dragonball-layout',
      meta: { title: 'Dragon Ball List' }, // Así ponemos campos meta para SEO/modules/layouts/DragonBallLayout.vue
      component: () => import('@/modules/dragonball/layouts/DragonBallLayout.vue'),
      // Vamos a protegerlo
      beforeEnter: [isAuthenticatedGuard],
      // Definimos las rutas hijas que se renderizan dentro de este componente en su propio router view!!!
      children: [
        {
          path: '',
          name: 'dragonball-list',
          meta: { title: 'DragonBall List' },
          component: () => import('@/modules/dragonball/views/DragonBallList.vue'), // Lazy loading
        },
        {
          path: 'about',
          name: 'dragonball-about',
          component: () => import('@/modules/dragonball/views/DragonBallAbout.vue'), // Lazy loading
          meta: { title: 'DragonBall About' },
        },
        // Pagina d detalles de pokemon, le pasamos el parámetro id por la url
        {
          path: ':id',
          name: 'dragonball-page',
          component: () => import('@/modules/dragonball/views/DragonBallPage.vue'), // Lazy loading
          meta: { title: 'DragonBall Page' },
        },
        {
          path: '/',
          redirect: { name: 'dragonball-list' },
        },
      ],
    },

    // a google
    {
      path: '/google',
      name: 'google',
      beforeEnter() {
        window.open('http://www.google.com', '_blank')
      },
    },
    // Error
    {
      path: '/error', // Cualquier otra cosa
      name: 'Error',
      component: () => import('@/modules/shared/views/ErrorView.vue'), // Lazy loading
    },
    // 404
    {
      // Cualquier cosa que no coicida con las rutas anteriores
      path: '/:pathMatch(.*)*', // Cualquier otra cosa
      name: '404',
      component: () => import('@/modules/shared/views/404View.vue'), // Lazy loading
    },
  ],
})

// /// Guard Global!!!
// router.beforeEach((to, from, next) => {
//   console.log(`Antes de cada ruta: desde ${from.name} hasta ${to.name}`)
//   const random = Math.random() * 100
//   if (random > 50) {
//     console.log('Autenticado')
//     next() // Lo deja pasar
//   } else {
//     console.log('Bloqueado por el beforeEach Guard')
//     next({ name: 'Error' })
//   }
// })

// Guard Global Asincrono

// const canAccess = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const random = Math.random() * 100
//       if (random > 50) {
//         console.log('Autenticado')
//         resolve(true)
//       } else {
//         console.log('Bloqueado por el beforeEach Guard')
//         resolve(false)
//       }
//     }, 1000)
//   })
// }

// router.beforeEach(async (to, from, next) => {
//   console.log(`Antes de cada ruta: desde ${from.name} hasta ${to.name}`)
//   const authorized = await canAccess()
//   authorized ? next() : next({ name: 'Error' })
// })

export default router
