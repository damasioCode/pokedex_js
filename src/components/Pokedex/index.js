import React from 'react'
import Card from '../Card'
import './index.scss'

const Pokedex = ({pokemons, loading}) => {
  return (
    <div className="pokedex">
      { loading ? <div class="loading">Ta carregando mano</div> : ''}
      <ul className="pokedex__wrapper container">
        { pokemons.map( (pokemon, key) => {
          return(<Card key={key} data={pokemon}/>)
        }) }
      </ul>
    </div>
  )
}

export default Pokedex