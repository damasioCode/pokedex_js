
export const getPokemons = async (limit = 150, offset = 0) => {
  try {
    const pokeapiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    const fetchData = await fetch(pokeapiUrl)
    return await fetchData.json()
  } catch(error) {
    console.log('error to get pokemons:', error)
  }
} 

export const getPokemonData = async (url) => {
  try {
    const fetchData = await fetch(url)
    return await fetchData.json()
  } catch(error) {
    console.log('error to get pokemon data:', error)
  }
}