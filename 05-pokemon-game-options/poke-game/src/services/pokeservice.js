import PokeAPI from '@/api/pokeapi'

const getPokemonsArray = () => {
  const pokemonsArray = Array.from(Array(650))
  return pokemonsArray.map((_, index) => index + 1)
}

const getPokemons = async () => {
  const mixedPokemons = getPokemonsArray().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))
  return pokemons
}

const getPokemonsNames = async ([a, b, c, d] = []) => {
  // Vamos a consumir la API de pokeapi para obtener los nombres de los pokemons

  const [p1, p2, p3, p4] = await Promise.all([
    PokeAPI.get(`/${a}/`),
    PokeAPI.get(`/${b}/`),
    PokeAPI.get(`/${c}/`),
    PokeAPI.get(`/${d}/`),
  ])
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
}

export default getPokemons
