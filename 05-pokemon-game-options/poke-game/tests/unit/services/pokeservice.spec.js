import { describe, test, expect } from 'vitest'

import { getPokemonsArray } from '@/services/pokeservice'

describe('Poke Service', () => {
  // Un test
  test('Debe de regresar un array de números', () => {
    const pokemons = getPokemonsArray()
    expect(pokemons).toBeInstanceOf(Array)
    expect(pokemons.length).toBe(650)
    // es una array de numeros
    expect(pokemons.every((p) => typeof p === 'number')).toBe(true)
  })
})
