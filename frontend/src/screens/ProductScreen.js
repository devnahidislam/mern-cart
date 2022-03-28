// import React from 'react'
import './productScreen.css'

const ProductScreen = () => {
  return (
    <div className="productScreen">
      <div className="productScreen_left">
        <div className="left_img">
          <img src="https://ik.imagekit.io/nahidislam/tr:h-600,w-500,f-auto,pr-true/products/2_ch12J5eKN.jpg" alt="Product"/>
        </div>
        <div className="left_info">
          <p className="left_name">Smart Watch</p>
          <p className="left_price">$44.99</p>
          <p className="left_desc">Find Description Of Watch. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply. Services: Compare, Search, Find Products, Many Offers.</p>
        </div>
      </div>
      <div className="productScreen_right">
        <div className="right_info">
          <p>Price: <span>$44.99</span></p>
          <p>Status: <span>In Stock</span></p>
          <p>
            Quantity:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen