import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'

const Pokedex = ({pokemons, loading, search, pokemonType}) => {
  const[pokeFilter, setPokeFilter] = useState([])
  const[isFilter, setIsFilter] = useState(false)

  useEffect(()=>{
    const pokeFilterArray = pokemons.filter(pokemon => pokemon.name.indexOf(search) === 0 )  
    console.log(pokeFilter)
    if(search.length){
      setIsFilter(true)
    }
    setPokeFilter(pokeFilterArray)
  },[search])
  
  return (
    <div className="pokedex">
      {/* { loading ? <div class="loading">Ta carregando mano</div> : '' } */}
      <ul className="pokedex__wrapper container">
        { isFilter ? pokeFilter.map( (pokemon, key) => {
          return(<Card key={key} data={pokemon}/>)
        }) : pokemons.map( (pokemon, key) => {
          return(<Card key={key} data={pokemon}/>)
        }) }
      </ul>
    </div>
  )
}

export default Pokedex