// import React from 'react'
import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
  // Cart component
import CartItem from '../components/home/CartItem'
  // Cart Action
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  }
  const getCartTotal = () => {
    return cartItems.reduce((price, item) => Number(item.qty * item.price) + price, 0);
  }
  return (
    <div className="cartScreen">
      <div className="cartScreen_left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            <h3>Cart is Empth <Link to="/">Go Back</Link></h3>
          </div>
        ) : cartItems.map(item => (
          <CartItem
            key={item.product}
            item={item}
            qtyChangeHandler={qtyChangeHandler}
            removeFromCart={removeHandler} />
        ))}
      </div>
      <div className="cartScreen_right">
        <div className="cartScreen_info">
          <p>In Total ({getCartCount()}) Items</p>
          <p>price: ${ getCartTotal().toFixed(2) }</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen