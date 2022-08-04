const getPokemons = () => {
  const pokemonsArray = Array.from(Array(650))
  return pokemonsArray.map((_, index) => index + 1)
}

const getPokemonsOptions = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  getPokemonsNames(mixedPokemons.splice(0, 4))
  // getPokemons()
}

const getPokemonsNames = (pokemons = []) => {
  console.log(pokemons)
}

export default getPokemonsOptions
