// import React from 'react'
import './CartScreen.css'
import CartItem from '../components/home/CartItem'

const CartScreen = () => {
  return (
    <div className="cartScreen">
      <div className="cartScreen_left">
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
      </div>
      <div className="cartScreen_right">
        <div className="cartScreen_info">
          <p>Subtotal (0) Items</p>
          <p>price: $499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen