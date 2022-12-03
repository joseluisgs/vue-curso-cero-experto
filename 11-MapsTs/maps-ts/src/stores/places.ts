import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

// Puedo definir el tipo!!!
export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number] // [long, lat]
}

export const usePlacesStore = defineStore('places', () => {
  // Nuestro estado, con variables sueltas reactivas
  const isLoading: Ref<Boolean> = ref(false) // Puedo dejar que infiera o definirle el tipo
  const userLocation: Ref<[number, number] | undefined> = ref(undefined) // Puedo definir el tipo!!!

  // otra forma es
  // const isLoading = ref<boolean>(false) // oponerle as Ref<Boolean>
  // const userLocation = ref<[number, number] | undefined>(undefined)
  // Lo que exporto es lo que puedo usar en cualquier parte de la app

  // getters - computed
  const isUserLocationReady = (): boolean => !!userLocation.value

  // actions y mutaciones
  // Setters para cambiare el estado
  const setLngLat = (coords: GeolocationCoordinates) => {
    console.log(`setLngLat: ${coords.longitude}, ${coords.latitude}`)
    userLocation.value = [coords.longitude, coords.latitude]
    isLoading.value = false
  }

  const getInitialLocation = () => {
    isLoading.value = true
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLngLat(coords), // desestructuro el objeto position
      (err) => {
        console.error(err)
        throw new Error('No se pudo obtener la ubicación')
      }
    )
  }
  // Exportamos lo que queremos usar en cualquier parte de la app
  return { isLoading, userLocation, isUserLocationReady, getInitialLocation }
})
