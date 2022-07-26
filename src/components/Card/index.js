import React from 'react'
import './index.scss'


const Card = ({data}) => {
  return (
    <li className={'card ' + data.types[0].type.name}>
      <div className="card__info">
        <p>#{data.id}</p>
        <h2>{data.name}</h2>
        <div className="card__types">
          {data.types.map( ({type}) => {
            return(<p className={'badge ' + type.name}>{type.name}</p>)
          })}
        </div>
      </div>
      <picture className="card__image">
        <img src={data.image} alt={data.id}/>
      </picture>
    </li>
  )
}

export default Card