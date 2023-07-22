import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div>
          <h2 className='checkout__title'>Your Shopping cart</h2>
          {/* Add your shopping cart content here */}
          {/* For example: */}
          <div>
            <p>Product 1</p>
            <p>Product 2</p>
            {/* ... */}
          </div>
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal/>
        {/* You can add the subtotal value here dynamically */}
      </div>
    </div>
  );
}

export default Checkout;
