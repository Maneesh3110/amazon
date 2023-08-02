import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
  const [{cart,user},dispatch]=useStateValue();
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
      dispatch({
        type: 'SET_USER',
        user:null
      })
    }
  }
  return (
    <div className='header'>
      <Link to="/"><img 
        className = "header_logo"
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'></img></Link>
       
        
        <div
        className='header__search'>
            <input className='header__searchInput'
            type='text' placeholder=''></input>
            <div className='header__searchPlaceholder'>Search in Amazon.in</div>
            <SearchIcon className='header__Icon'></SearchIcon>
        </div>
        <div className='header__nav'>
          <Link to ={!user && "/login"}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello {user ? user.email : 'Guest'}</span>
            <span className='header__optionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
          </div>
          </Link>
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