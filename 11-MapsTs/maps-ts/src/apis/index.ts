// Fichero enlace a las apis

import axios from 'axios'

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    types: 'place',
    access_token: import.meta.env.VITE_MAP_TOKEN,
  },
})

export { searchApi }
