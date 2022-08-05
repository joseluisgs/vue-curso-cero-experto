import { describe, test, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions.vue'
import { pokemons } from '../mocks/pokemons.mocks'

describe('Pokemon Options Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemons,
      },
    })
  })

  test('Debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Debe mostrar las cuatro opciones correctamente', () => {
    const liTags = wrapper.findAll('li')
    expect(liTags.length).toBe(4)
    expect(liTags.at(0).text()).toBe('bulbasaur')
    expect(liTags.at(1).text()).toBe('ivysaur')
    expect(liTags.at(2).text()).toBe('venusaur')
    expect(liTags.at(3).text()).toBe('charmander')
  })

  test('Debe emitir selection-pokemon con sus datos', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li')
    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')
    expect(wrapper.emitted('selection-pokemon').length).toBe(4)
    expect(wrapper.emitted('selection-pokemon')[0][0]).toStrictEqual(pokemons[0].id)
    expect(wrapper.emitted('selection-pokemon')[1][0]).toStrictEqual(pokemons[1].id)
    expect(wrapper.emitted('selection-pokemon')[2][0]).toStrictEqual(pokemons[2].id)
    expect(wrapper.emitted('selection-pokemon')[3][0]).toStrictEqual(pokemons[3].id)
  })
})
