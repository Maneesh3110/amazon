import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
  const [{cart},dispatch]=useStateValue();
  return (
    <div className='header'>
      <Link to="/"><img 
        className = "header_logo"
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'></img></Link>
       
        
        <div
        className='header__search'>
            <input className='header__searchInput'
            type='text'></input>
            <SearchIcon className='header__Icon'></SearchIcon>
        </div>
        <div className='header__nav'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>

          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>

          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </div>
        <Link to ="/checkout">
        <div className='header_optionBasket'><ShoppingCartIcon/>
          <span className='header__optionLineTwo
          header__basketCount'>
            {cart?.length}
          </span>
        </div> 
        </Link>

    </div>
  );
}

export default Header