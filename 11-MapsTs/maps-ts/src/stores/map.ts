import { directionsApi } from '@/apis'
import type { DirectionsResponse } from '@/interfaces/DirectionsResponse'
import type { Feature } from '@/interfaces/PlacesResponse'
import Mapboxgl from 'mapbox-gl'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export type LngLat = [number, number] // Me creo un tipo, y uno una interfaz porque es sencillo, pero si fuera más complejo, mejor interfaz

// Puedo definir el tipo!!!
export const useMapStore = defineStore('map', () => {
  // Nuestro estado, con variables sueltas reactivas
  const map: Ref<mapboxgl.Map | undefined> = ref(undefined)
  const markers: Ref<mapboxgl.Marker[]> = ref([])
  const distance: Ref<number | undefined> = ref(undefined)
  const duration: Ref<number | undefined> = ref(undefined)

  // Getters son mis computed
  const isMapReady = computed(() => !!map.value)
  const getMap = computed(() => map.value)
  const getMarkers = computed(() => markers.value)
  const getDistance = computed(() => distance.value)
  const getDuration = computed(() => duration.value)

  // Actions y mutaciones
  const setMap = (otherMap: mapboxgl.Map) => {
    map.value = otherMap
  }

  const setMarkers = (places: Feature[]) => {
    markers.value.forEach((marker) => marker.remove())
    markers.value = []

    if (!map.value) return

    places.forEach((place) => {
      const [lng, lat] = place.center
      const popup = new Mapboxgl.Popup()
        .setHTML(
          `<h4 class="text-lg font-bold text-secondary-focus">${place.text_es}</h4>
         <p class="text-sm text-secondary-focus">${place.place_name_es}</p>`
        )
        .setLngLat([lng, lat])

      const marker = new Mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map.value!)

      markers.value.push(marker)
    })
  }

  const setDistance = (otherDistance: number) => {
    distance.value = otherDistance
  }

  const setDuration = (otherDuration: number) => {
    duration.value = otherDuration
  }

  // Exportamos lo que queremos usar en cualquier parte de la app
  return {
    setMap,
    isMapReady,
    getMap,
    setMarkers,
    getMarkers,
    setDistance,
    setDuration,
  }
})
