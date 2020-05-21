import React, { useState, useEffect, useCallback } from 'react'
import MyCart from '../../components/myCart/MyCart'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function ShoppingList() {

    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const cartItm = localStorage.getItem("cartItem") == null ? '[]' : localStorage.getItem("cartItem")
        const cartArr = JSON.parse(cartItm);
        const uniq = getUniqueObj(cartArr)
        setCartItem(uniq);
        return () => {
            // cleanup
        }
    }, []);


    const getUniqueObj = (data) => {
        var tempResult = {};
        for (let { name, product_code, image, price, discount } of data)
            tempResult[product_code] = {
                name, product_code, image, price, discount,
                count: tempResult[product_code] ? tempResult[product_code].count + 1 : 1
            }

        return Object.values(tempResult)

    }

    const removeCartItem = useCallback((id) => {

        const listToDelete = [];
        listToDelete.push(id);

        for (var i = 0; i < cartItem.length; i++) {
            var obj = cartItem[i];

            if (listToDelete.indexOf(obj.product_code) !== -1) {
                cartItem.splice(i, 1);
            }
        }
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        setCartItem(cartItem);
        window.location.reload();

    }, [cartItem])


    const addToCart = useCallback((param) => {
        
        const cartItm = localStorage.getItem("cartItem") == null ? '[]' : localStorage.getItem("cartItem")
        const cartArr = JSON.parse(cartItm)
        cartArr.push(param)
        localStorage.setItem("cartItem", JSON.stringify(cartArr))
        setCartItem([...cartItem, param]);
        window.location.reload();
    
    }, [cartItem])

    const removeOneItem = useCallback((id) => {
        debugger;
        
        const listToDelete = [];
        listToDelete.push(id);
        const cartItm = localStorage.getItem("cartItem") == null ? '[]' : localStorage.getItem("cartItem")
        const cartArr = JSON.parse(cartItm)

        for (var i = 0; i < cartArr.length; i++) {
            var obj = cartArr[i];

            if (listToDelete.indexOf(obj.product_code) !== -1) {
                cartArr.splice(i, 1);
                break;
            }
           
        }
        localStorage.setItem("cartItem", JSON.stringify(cartArr));
        setCartItem(cartArr);
        window.location.reload();
    
    }, [cartItem])


    return (
        <React.Fragment>
            <Header cartItem={[]} />
            <MyCart cartList={cartItem} addToCartEvent={addToCart} removeCartEvent={removeCartItem} reduceCountEvent={removeOneItem} />

            <Footer />
        </React.Fragment>
    )
}

export default ShoppingList
