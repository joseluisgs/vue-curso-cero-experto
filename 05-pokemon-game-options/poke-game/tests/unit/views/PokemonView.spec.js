import { describe, test, expect, beforeEach, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import PokemonView from '@/views/PokemonView.vue'
import { pokemons } from '../mocks/pokemons.mocks'
import { setActivePinia, createPinia } from 'pinia'

describe('Pokemon View Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonView)
    setActivePinia(createPinia())
  })

  test('Debe hacer match con el snapshot cuando cargan los pokemons', () => {
    // Vamos a montar el stubs!!!
    wrapper = shallowMount(PokemonView, {
      data() {
        return {
          pokemons: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('Debe llamar a setPokemons() al montarse', () => {
    // Vamos a espiar el metodo setPokemons()
    const setPokemonsSpy = vi.spyOn(PokemonView.methods, 'setPokemons')
    // Ojo debemos montarlo ya con el spia, si no nos daria el error al estar montado en el beforeEach
    wrapper = shallowMount(PokemonView)
    expect(setPokemonsSpy).toHaveBeenCalled()
  })

  test('debe mostrar los compo PokemonPicture y PokemonOptions', () => {
    wrapper = shallowMount(PokemonView, {
      data() {
        return {
          pokemons: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })
    // Muy cutre
    expect(wrapper.find('pokemon-picture-stub').exists()).toBe(true)
    expect(wrapper.find('pokemon-options-stub').exists()).toBe(true)
    // Mejor
    const pokemonPicture = wrapper.find('[data-testid="PokemonPicture"]')
    const pokemonOptions = wrapper.find('[data-testid="PokemonOptions"]')

    expect(pokemonPicture.exists()).toBe(true)
    expect(pokemonOptions.exists()).toBe(true)

    expect(pokemonPicture.isVisible()).toBe(true)
    expect(pokemonOptions.isVisible()).toBe(true)

    expect(pokemonPicture.attributes('pokemonid')).toBe('1')
    expect(pokemonOptions.attributes('pokemons')).toBeTruthy()

    console.log(pokemonPicture.html())
  })

  test('pruebas con check answer', async () => {
    // Montamos un componente igual que el que queremos probar
    // Aquí comenzamos!!!!
    wrapper = shallowMount(PokemonView, {
      data() {
        return {
          pokemons: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })

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
    wrapper = shallowMount(PokemonView, {
      data() {
        return {
          pokemons: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })

    // probamos a pulsar una
    await wrapper.vm.checkAnswer(1)

    const myButton = wrapper.find('button')
    // disparameos el evento
    await myButton.trigger('click')
    // Se ha llamado a newGame()

    // Estadisticas aumenta la partida
    expect(wrapper.vm.estadisticas.partidas).toBe(2)
  })

  test('Estadisticas', async () => {
    wrapper = shallowMount(PokemonView, {
      data() {
        return {
          pokemons: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      },
    })

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
})
