// import React from 'react'
import './HomeScreen.css'
import Product from '../components/home/Product'
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <h2 className="homeScreen_title">Latest Products</h2>
      <div className="homeScreen_products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen