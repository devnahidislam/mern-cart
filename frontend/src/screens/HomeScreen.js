// import React from 'react'
import './HomeScreen.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// Component
import Product from '../components/home/Product';
// actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {
  
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homeScreen">
      <h2 className="homeScreen_title">Latest Products</h2>
      <div className="homeScreen_products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
              products.map((product) =>(
                <Product
                  key={product._id}
                  productId={product._id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />))
        )}
      </div>
    </div>
  )
}

export default HomeScreen