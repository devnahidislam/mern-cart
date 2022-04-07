// import React from 'react'
import './cartItem.css'
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => {
  return (
    <div className="cartItem">
      <div className="cartItem_img">
        <img src={item.image} alt={item.name}/>
      </div>
      <Link to={`/product/${item.product}`} className="product_name">
        <p>{item.name}</p>
      </Link>
      <p className="cartItem_price">${item.price}</p>
      <select
        className="cartItem_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>{x + 1}</option>
        ))}
      </select>
      <button type="button"
        className="cartItem_delete"
        onClick={() => removeFromCart(item.product)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem