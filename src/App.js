import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Pokedex from './components/Pokedex/';
import { getPokemons, getPokemonData } from './services/pokeapi';


function App() {
  const[pokemons, setPokemons] = useState([])
  const[isLoading, setIsLoading] = useState(false);
  
  const fetchPokemons = async () => {
    try {
      setIsLoading(true)
      const data = await getPokemons(24)

      const pokePromises = data.results.map( async (pokemon) => {
        const pokemonData = await getPokemonData(pokemon.url)
        return {
          id: pokemonData.id,
          types: pokemonData.types,
          name: pokemonData.name,
          image: pokemonData.sprites.other['official-artwork'].front_default
        };
      });

      const resolvePokemons = await Promise.all(pokePromises)
      setPokemons(resolvePokemons)
      setIsLoading(false)

    } catch(error) {
      console.log('fetchPokemons error:', error)
    }
  }
  
  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Banner/>
      <Pokedex
        pokemons={pokemons}
        loading={isLoading}
        onLoading={setIsLoading}
      />
      <Footer/>
    </div>
  );
}

export default App;
