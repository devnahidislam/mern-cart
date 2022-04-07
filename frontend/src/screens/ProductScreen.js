// import React from 'react'
import './productScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
// Action
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = () => {
  
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, error, product } = productDetails;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);
  
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate("/cart");
  }
  // const stockCheck = () => {
  //   dispatch(product.countInStock > 0 ? "" : "disabled");
  // }
  // console.log(stockCheck());
  return (
    <div className="productScreen">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
      <>
        <div className="productScreen_left">
          <div className="left_img">
            <img src={ product.image } alt={ product.name }/>
          </div>
          <div className="left_info">
            <p className="left_name">{ product.name }</p>
            <p className="left_price"><b>Price:</b> ${ product.price }</p>
            <p className="left_desc"><b>Description:- </b> { product.description }</p>
          </div>
        </div>
        <div className="productScreen_right">
          <div className="right_info">
            <p>Price: <span>${ product.price }</span></p>
                  <p>Status: <span>{ product.countInStock > 0 ? "In Stock" : "Out of stock" }</span></p>
            <p>
              Quantity:
              <select
                value={qty}
                onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1} >{x + 1}</option>
                  ))}
              </select>
            </p>
            <p>
              <button type="button" onClick={addToCartHandler}>Add To Cart</button>
            </p>
          </div>
        </div>        
      </>  
      )}
      
    </div>
  )
}

export default ProductScreen