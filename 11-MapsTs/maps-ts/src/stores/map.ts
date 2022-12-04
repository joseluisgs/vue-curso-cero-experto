import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

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

  // Actions y mutaciones
  const setMap = (otherMap: mapboxgl.Map) => {
    map.value = otherMap
  }

  // Exportamos lo que queremos usar en cualquier parte de la app
  return { setMap, isMapReady, getMap }
})
