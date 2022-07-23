import React from 'react'
import Card from '../Card/Card'
import './Pokedex.scss'

const Pokedex = ({pokemons}) => {
  return (
    <div className="pokedex">
      <ul className="pokedex__wrapper container">
        { pokemons.map( (pokemon, key) => {
          return(<Card key={key} data={pokemon}/>)
        }) }
      </ul>
    </div>
  )
}

export default Pokedex