import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id,title, image, price, rating }) {
    const [{cart},dispatch]=useStateValue();
    console.log("This is the basket",cart);
    const addToCart =() =>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} role="img" aria-label="star">⭐️</span>);
    }
    return stars;
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {renderRating()}
        </div>
      </div>
      <img 
        src={image}
        alt=''
      />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
