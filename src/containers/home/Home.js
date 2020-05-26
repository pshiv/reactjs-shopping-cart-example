import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProductList, getProductBySort, getTotalCartItem , addToCart} from '../../actions/rootAction';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SortByComponent from '../../components/sortComponent/SortByComponent'
import ProductsList from '../../components/productLists/ProductsList';
import Filter from '../../components/filterComponent/fliter'
import './home.scss';

function Home() {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.HomeReducer.productList);
    const cartItem = useSelector(state => state.HomeReducer.totalCartItem);

    const [sortBy, setSortBY] = useState('');
    const [cartItemState, setCartItem] = useState([]);


    useEffect(() => {
        dispatch(getProductList());
        dispatch(getTotalCartItem());

        return () => {
            // cleanup
        };
    }, [dispatch, productList]);

    const accendingSortBy = useCallback((param) => {
        setSortBY(param)
        dispatch(getProductBySort(param));
    }, [dispatch])


    const addToCartEvent = useCallback((param) => {
        dispatch(addToCart(param));
        dispatch(getTotalCartItem());
        setCartItem(cartItem);
    }, [dispatch, cartItem])

    return (
        <React.Fragment>
            <Header cartItem={cartItem} />
            <div className="container">
                <div className="filter-warpper">
                    <Filter />
                </div>
                <div className="products-wrapper">
                    <div>
                        <SortByComponent sortEventHandle={accendingSortBy} isSortBy={sortBy} />
                    </div>
                    <div>
                        <ProductsList productList={productList} addToCartEvent={addToCartEvent}></ProductsList>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home
