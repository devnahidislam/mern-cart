// import React from 'react'
import './product.css'
import {Link} from 'react-router-dom';

const Product = () => {
  return (
    <div className="product">
      <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="Product Name" />

      <div className="product_info">
        <p className="product_name">Smart Watch</p>
        <p className="product_desc">
        Find Description Of Watch. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply. Services: Compare, Search, Find Products, Many Offers.
        </p>
        <p className="product_price">$44.99</p>
        <Link to={`/product/${121}`} className="product_view">View</Link>
      </div>
    </div>
  )
}

export default Product