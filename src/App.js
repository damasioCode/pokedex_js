import { useState, useEffect } from 'react';
import Pokedex from './components/Pokedex/Pokedex';
import { getPokemons, getPokemonData } from './services/pokeapi';


function App() {
  const[pokemons, setPokemons] = useState([])
  
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons()

      const pokePromises = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const resolvePokemons = await Promise.all(pokePromises)
      setPokemons(resolvePokemons)

    } catch(error) {
      console.log('fetchPokemons error:', error)
    }
  }
  
  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Pokedex
        pokemons={pokemons}
      />
    </div>
  );
}

export default App;
