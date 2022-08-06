import axios from 'axios'

const PokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
})

export default PokeAPI
