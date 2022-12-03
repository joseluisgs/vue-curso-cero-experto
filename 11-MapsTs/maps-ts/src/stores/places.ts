import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

// Puedo definir el tipo!!!
export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number] // [long, lat]
}

export const placesStore = defineStore('places', () => {
  // Nuestro estado, con variables sueltas reactivas
  const isLoading: Ref<Boolean> = ref(false) // Puedo dejar que infiera o definirle el tipo
  const userLocation: Ref<[number, number] | undefined> = ref(undefined) // Puedo definir el tipo!!!

  // otra forma es
  // const isLoading = ref<boolean>(false) // oponerle as Ref<Boolean>
  // const userLocation = ref<[number, number] | undefined>(undefined)
  // Lo que exporto es lo que puedo usar en cualquier parte de la app

  // computed

  // actions y mutaciones

  return { isLoading, userLocation }
})
