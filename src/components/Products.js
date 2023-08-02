import React from 'react'
import './Products.css'

function Product({id, title, image, price, rating}) {
  return (
    <div className="product">

        <img src={image} alt="ProductImage" className="product__image" />


        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating).fill().map((_, i) => ( <p>⭐️</p> ))}
            </div>
        </div>

        <button>Add to Cart</button>

    </div>
  )
}

export default Product