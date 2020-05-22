import React from 'react'
import './cart.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function MyCart(props) {

    const listItems = props.cartList && props.cartList.length > 0 ? props.cartList.map((item, i) =>
        <div className="cart-item" key={i}>
            <div className="product-img"><img src={item.image} alt={item.image} /></div>
            <div className="product-price-detail">
                <span className="p-name">{item.name}
                    <div className="p-detail"><span className="current-price"><FontAwesomeIcon icon={faRupeeSign} />{item.price.actual}</span> <del><FontAwesomeIcon icon={faRupeeSign} />{item.price.display}</del><span className="discount">{item.discount}% off</span></div>
                </span>

                <div className="product-qty">
                    <button className="minus" onClick={() => props.reduceCountEvent(item.product_code)}>-</button> <input type="text" value={item.count}></input> <button className="plus" onClick={() => props.addToCartEvent(item)}>+</button>
                </div>
                <div className="remove">
                    <h6 onClick={() => props.removeCartEvent(item.product_code)}>Remove</h6>
                </div>
            </div>


        </div>
    ) : null;

    const totalItems = props.cartList.length;
    const totalPrice = props.cartList && props.cartList.length > 0 ? getTotal(props.cartList) : ''

    function getTotal(item) {
        var actual = 0
        var display = 0
        for (let i = 0; i < item.length; i++) {
            actual = actual + item[i].price.actual * item[i].count
            display = display + item[i].price.display * item[i].count
        }
        return { actual: actual, display: display }
    }


    return (
        <React.Fragment>
            <div className="cart-container">
                <section className="cart-item-wrapper">
                    {listItems}
                </section>

                <section className="total-wrapper">
                    <div className="total">
                        <h4>Price Details</h4>
                        <div><span>Price ({totalItems} Items)</span> <span><FontAwesomeIcon icon={faRupeeSign} />{totalPrice.display ? totalPrice.display : 0}</span></div>
                        <div><span>Discount </span> <span><FontAwesomeIcon icon={faRupeeSign} />{totalPrice.display ? totalPrice.display - totalPrice.actual : 0}</span></div>
                        <div className="total-payable"><span>Total Payable  </span> <span><FontAwesomeIcon icon={faRupeeSign} />{totalPrice.actual ? totalPrice.actual : 0}</span></div>
                    </div>

                </section>

            </div>
        </React.Fragment>
    )
}
