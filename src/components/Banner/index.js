import React from 'react'
import logo from './logo.png'
import './index.scss'

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner__wrapper container">
        <div className="banner__img-wrapper">
          <img src={logo} alt="brand"/>
        </div>
        <h2 className="banner__subtitle">Find your favorite Pokemon😁</h2>
      </div>
    </header>
  )
}

export default Banner