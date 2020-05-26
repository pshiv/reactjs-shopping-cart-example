import React from 'react'
import './header.scss';
import { Link, useRouteMatch } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

function Header(props) {


    return (
        <React.Fragment>
            <header>
                <Link to="/home" className="logo">
                    <FontAwesomeIcon icon={faStar} />
                </Link>

                {props.cartItem.length >= 1 ? <Link to="/my-cart">
                    <div className="shopping-cart">
                        <span className="cart-count">{props.cartItem.length}</span>
                        <FontAwesomeIcon icon={faShoppingCart} />

                    </div>
                </Link> : ''}
                <div className="searchBox">
                    <input className="searchInput" type="text" name="" placeholder="Search" />
                    <button className="searchButton" href="#">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

            </header>
        </React.Fragment>
    )
}

export default Header
