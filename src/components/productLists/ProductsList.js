import React, { useCallback } from 'react'
import './products.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function ProductsList(props) {    

    const listItems = props.productList && props.productList.length > 0 ? props.productList.map((item, i) =>
        <div className="product-card" key={i}>
            <div className="product-image">
                <img src={item.image} alt={item.image} />
            </div>
            <div className="product-info">
                <h5>{item.name}</h5>
                <h6><span className="current-price"><FontAwesomeIcon icon={faRupeeSign} />{item.price.actual}</span> <del>{item.price.display}</del><span className="discount">{item.discount}% off</span></h6>
                <button type="button" onClick={() => props.addToCartEvent(item)}> Add to cart</button>
            </div>
        </div>
    ) : null;

    return (
        <React.Fragment>
            <section className="products">
                {listItems}
            </section>
        </React.Fragment>
    )
}
