import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProductList, getProductBySort, getOptionList } from '../../actions/rootAction';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SortByComponent from '../../components/sortComponent/SortByComponent'
import ProductsList from '../../components/productLists/ProductsList';
import Filter from '../../components/filterComponent/fliter'
import './home.scss';

function Home() {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.HomeReducer.productList);
    const [sortBy, setSortBY] = useState('');
    const [cartItem, setCartItem] = useState([]);


    useEffect(() => {
        dispatch(getProductList())

        const cartItm = localStorage.getItem("cartItem") == null ? '[]' : localStorage.getItem("cartItem")
        const cartArr = JSON.parse(cartItm);
        setCartItem(cartArr);

        return () => {
            // cleanup
        };
    }, [dispatch]);

    const accendingSortBy = useCallback((param) => {
        setSortBY(param)
        dispatch(getProductBySort(param));
    }, [dispatch])


    const addToCart = useCallback((param) => {
        const cartItm = localStorage.getItem("cartItem") == null ? '[]' : localStorage.getItem("cartItem")
        const cartArr = JSON.parse(cartItm)
        cartArr.push(param)
        localStorage.setItem("cartItem", JSON.stringify(cartArr))
        setCartItem([...cartItem, param])
    }, [cartItem])

    
    return (
        <React.Fragment>
            <Header cartItem={cartItem} />
            <div className="container">
                <div className="filter-warpper">
                    <Filter/>
                </div>
                <div className="products-wrapper">
                    <div>
                        <SortByComponent sortEventHandle={accendingSortBy} isSortBy={sortBy}/>
                    </div>
                    <div>
                        <ProductsList productList={productList} addToCartEvent={addToCart}></ProductsList>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home
