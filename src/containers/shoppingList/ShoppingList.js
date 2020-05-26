import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import MyCart from '../../components/myCart/MyCart';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { getCartItem, addToCart, removeItem, removeOneItem } from '../../actions/rootAction';


function ShoppingList() {

    const dispatch = useDispatch();

    const cartItem = useSelector(state => state.HomeReducer.cartItem);
    const [allCartItem, setCartItem] = useState([]);

    useEffect(() => {
        dispatch(getCartItem())
    
        return () => {
            // cleanup
        }
    }, [dispatch]);

    const removeCartItemEvent = useCallback((id) => {

        dispatch(removeItem(id));
        setCartItem(cartItem);

    }, [dispatch, cartItem])

    const removeOneItemEvent = useCallback((id) => {
        dispatch(removeOneItem(id));
        setCartItem(cartItem);

    }, [dispatch, cartItem])

    const addToCartEvent = useCallback((param) => {
        dispatch(addToCart(param));
        setCartItem(cartItem);
    }, [dispatch,cartItem])



    return (
        <React.Fragment>
            <Header cartItem={[]} />
            <MyCart cartList={cartItem} addToCartEvent={addToCartEvent} removeCartEvent={removeCartItemEvent} reduceCountEvent={removeOneItemEvent} />

            <Footer />
        </React.Fragment>
    )
}

export default ShoppingList
