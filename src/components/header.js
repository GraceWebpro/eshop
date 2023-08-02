import React from 'react'
import './../components/header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function header() {
  return (
    <div className="header">

        <div className="header__logo">
            <StorefrontIcon fontSize="large" className="header__logoImage"/>
            <h2 className="header__logoTitle">eSHop</h2>
        </div>

        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
            <div className="nav-item">
                <span className="nav-item1">Hello Guest</span>
                <span className="nav-item2">Sign In</span>
            </div>
            <div className="nav-item">
                <span className="nav-item1">Your</span>
                <span className="nav-item2">Shop</span>
            </div>
            <div className="nav-itemBasket">
                <ShoppingBasketIcon />
                <span className="nav-item2 nav-basketCount">0</span>
            </div>
        </div>

    </div>
  )
}

export default header