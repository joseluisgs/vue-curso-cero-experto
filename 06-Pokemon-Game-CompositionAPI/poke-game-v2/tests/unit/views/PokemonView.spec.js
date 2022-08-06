import { describe, test, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import PokemonView from '@/views/PokemonView.vue'
import { pokemons } from '../mocks/pokemons.mocks'
import { createTestingPinia } from '@pinia/testing'

describe('Pokemon View Component', () => {
  test('Debe hacer match con el snapshot cuando cargan los pokemons', () => {
    // Vamos a montar el stubs!!!
    const wrapper = shallowMount(PokemonView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('Debe llamar a setPokemons() al montarse', () => {
    const wrapper = shallowMount(PokemonView, {
      mounted: vi.fn(), // De esta manera mockeamos el onMounted
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })
    //console.log(wrapper)
    // Creamos el spia
    const setPokemonsSpy = vi.spyOn(wrapper.vm, 'setPokemons')

    wrapper.vm.setPokemons()

    expect(setPokemonsSpy).toHaveBeenCalled()
  })

  test('debe mostrar los compo PokemonPicture y PokemonOptions', async () => {
    const wrapper = shallowMount(PokemonView, {
      mounted: vi.fn(), // De esta manera mockeamos el onMounted
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    // Asignamos las variables para que sean las que queremos
    // Ya no podemos usar data porque no lo tenemos!!!
    // console.log(wrapper.vm.$data)
    // No es lo mismo que
    // console.log(wrapper.vm)
    // Estamos usando composition
    wrapper.vm.pokemons = pokemons
    wrapper.vm.pokemon = pokemons[0]
    await wrapper.vm.$nextTick() // Esperamos cambios de renderizado
    // console.log(wrapper.vm.$data)
    // Mejor
    const pokemonPicture = wrapper.find('[data-testid="PokemonPicture"]')
    const pokemonOptions = wrapper.find('[data-testid="PokemonOptions"]')

    expect(pokemonPicture.exists()).toBe(true)
    expect(pokemonOptions.exists()).toBe(true)

    expect(pokemonPicture.isVisible()).toBe(true)
    expect(pokemonOptions.isVisible()).toBe(true)

    expect(pokemonPicture.attributes('pokemonid')).toBeTruthy() // Al ser computer la leo aleatoria, por eso debe estar
    expect(pokemonOptions.attributes('pokemons')).toBeTruthy()

    //console.log(pokemonPicture.html())
  })

  test('pruebas con check answer', async () => {
    // Montamos un componente igual que el que queremos probar
    // Aquí comenzamos!!!!
    const wrapper = shallowMount(PokemonView, {
      mounted: vi.fn(), // De esta manera mockeamos el onMounted
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    wrapper.vm.pokemons = pokemons
    wrapper.vm.pokemon = pokemons[0]
    await wrapper.vm.$nextTick()
    //console.log(wrapper.vm.pokemon)

    // Probamos el incorrecto
    await wrapper.vm.checkAnswer(5)
    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe(`¡Incorrecto! es ${pokemons[0].name}`)
    expect(wrapper.vm.showPokemon).toBe(false)
    expect(wrapper.vm.showAnswer).toBe(true)
    expect(wrapper.vm.estadisticas.partidas).toBe(1)
    expect(wrapper.vm.estadisticas.derrotas).toBe(1)

    // Probamos el correcto
    await wrapper.vm.checkAnswer(1)
    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe(`¡Correcto! es ${pokemons[0].name}`)
    expect(wrapper.vm.showPokemon).toBe(true)
    expect(wrapper.vm.showAnswer).toBe(true)
    expect(wrapper.vm.estadisticas.victorias).toBe(1)
  })

  test('Botón se ha pulsado', async () => {
    const wrapper = shallowMount(PokemonView, {
      mounted: vi.fn(), // De esta manera mockeamos el onMounted
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    // cargamos los datos
    wrapper.vm.pokemons = pokemons
    wrapper.vm.pokemon = pokemons[0]
    await wrapper.vm.$nextTick()

    // probamos a pulsar una
    await wrapper.vm.checkAnswer(1)

    const myButton = wrapper.find('button')
    // disparameos el evento
    await myButton.trigger('click')
    // Estadisticas aumenta la partida
    expect(wrapper.vm.estadisticas.partidas).toBe(2)
  })

  test('Estadisticas', async () => {
    const wrapper = shallowMount(PokemonView, {
      mounted: vi.fn(), // De esta manera mockeamos el onMounted
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    // cargamos los datos
    wrapper.vm.pokemons = pokemons
    wrapper.vm.pokemon = pokemons[0]
    await wrapper.vm.$nextTick()

    // Probamos el incorrecto y
    await wrapper.vm.checkAnswer(5)
    await wrapper.vm.checkAnswer(1)
    expect(wrapper.vm.estadisticas.partidas).toBe(1)
    expect(wrapper.vm.estadisticas.derrotas).toBe(1)
    expect(wrapper.vm.estadisticas.victorias).toBe(1)

    const [p1, a1, d1] = wrapper.findAll('h5')
    expect(p1.text()).toBe('Partidas: 1')
    expect(a1.text()).toBe('Aciertos: 1')
    expect(d1.text()).toBe('Derrotas: 1')

    // PulSAMOS EL BOTÓN
    const myButton = wrapper.find('button')
    await myButton.trigger('click')

    expect(wrapper.vm.estadisticas.partidas).toBe(2)
    expect(wrapper.vm.estadisticas.derrotas).toBe(1)
    expect(wrapper.vm.estadisticas.victorias).toBe(1)
  })

  test('Computed y Watcher', async () => {
    const wrapper = shallowMount(PokemonView, {
      mounted: vi.fn(), // De esta manera mockeamos el onMounted
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    // cargamos los datos
    wrapper.vm.pokemons = pokemons
    wrapper.vm.pokemon = pokemons[0]
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.pokemonData).toBe(
      `Pokemon: ${pokemons[0].name} tiene el id:(${pokemons[0].id})`
    )

    expect(wrapper.vm.idPokemon).toBe(0)
  })
})
