import { describe, test, expect } from 'vitest'
import PokeAPI from '@/api/pokeapi'
describe('Poke Api', () => {
  // Un test
  test('Axios debe estar configurado con la URL correcta', () => {
    const { baseURL } = PokeAPI.defaults
    const expeted = 'https://pokeapi.co/api/v2/pokemon'
    expect(baseURL).toEqual(expeted)
  })
})
