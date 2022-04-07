// import React from 'react'
import './product.css'
import {Link} from 'react-router-dom';

const Product = ({image, name, description, price, productId}) => {
  return (
    <div className="product">
      <img src={image} alt={name} />

      <div className="product_info">
        <p className="product_name">{name}</p>
        <p className="product_desc">{description.substring(0,80)}....</p>
        <p className="product_price">${price}</p>
        <Link to={`/product/${productId}`} className="product_view">View</Link>
      </div>
    </div>
  )
}

export default Product