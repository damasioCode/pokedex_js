import React from 'react'
import './index.scss'


const SearchBar = ({search, onSearch}) => {
  return (
    <div className="search container">
      <input type="text" className="search__input" placeholder="Search your pokemon" onChange={(event)=> onSearch(event.target.value)}/>
    </div>
  )
}

export default SearchBar