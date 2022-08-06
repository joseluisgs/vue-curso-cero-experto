import { describe, test, expect } from 'vitest'

import getPokemons, { getPokemonsArray, getPokemonsNames } from '@/services/pokeservice'
import { pokemons as pokemonsList } from '../mocks/pokemons.mocks'

describe('Poke Service', () => {
  // Un test
  test('Debe de regresar un array de números', () => {
    const pokemons = getPokemonsArray()
    expect(pokemons).toBeInstanceOf(Array)
    expect(pokemons.length).toBe(650)
    // es una array de numeros
    expect(pokemons.every((p) => typeof p === 'number')).toBe(true)
  })

  test('Debe de regresar un array de cuatro elementos con sus nombres', async () => {
    const expected = pokemonsList
    const pokemons = await getPokemonsNames([1, 2, 3, 4])
    expect(pokemons).toBeInstanceOf(Array)
    expect(pokemons).toStrictEqual(expected)
  })

  test('Debe de regresar un array con elementos mezclados', async () => {
    const pokemons = await getPokemons()
    expect(pokemons).toBeInstanceOf(Array) // es una array
    expect(pokemons.length).toBe(4) // lonmgitud 4
    expect(pokemons.every((p) => typeof p === 'object')).toBe(true) // es un objeto
    expect(pokemons.every((p) => p.name && p.id)).toBe(true) // tiene nombre y id
    expect(pokemons.every((p) => typeof p.id === 'number')).toBe(true) // id es un numero
    expect(pokemons.every((p) => typeof p.name === 'string')).toBe(true) // nombre es un string
    // un id no se repite en los elementos
    expect(pokemons.every((p) => pokemons.filter((p2) => p2.id === p.id).length === 1)).toBe(true)
  })
})
