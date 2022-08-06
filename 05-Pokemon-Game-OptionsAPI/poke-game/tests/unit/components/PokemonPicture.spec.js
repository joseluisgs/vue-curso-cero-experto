import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture.vue'

describe('Pokemon Picture Component', () => {
  test('Debe hacer match con el snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Debe de mostrar la imagen oculta y el pokemon 100', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    })
     const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`
    const [img1, img2] = wrapper.findAll('img')
    expect(img1.exists()).toBe(true)
    expect(img2).toBe(undefined)
    expect(img1.attributes('src')).toContain('100')
    expect(img1.attributes('src')).toBe(url)
    expect(img1.classes('hidden-pokemon')).toBe(true)
  })

  test('Debe de mostrar el pokemon su showPokemon es true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    })
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`
    const img1 = wrapper.find('img')
    expect(img1.exists()).toBe(true)
    expect(img1.attributes('src')).toContain('100')
    expect(img1.attributes('src')).toBe(url)
    expect(img1.classes('hidden-pokemon')).toBe(false)
  })
})
