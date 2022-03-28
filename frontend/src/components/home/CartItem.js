// import React from 'react'
import './cartItem.css'
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="cartItem_img">
        <img src="https://ik.imagekit.io/nahidislam/products/10_5y2DeBB1a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648274982511" alt="Product"/>
      </div>
      <Link to={'/product/:1'} className="product_name">
        <p>Product 1</p>
      </Link>
      <p className="cartItem_price">$44.99</p>
      <p>
          <select className="cartItem_select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
      </p>
      <button type="button" className="cartItem_delete">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem