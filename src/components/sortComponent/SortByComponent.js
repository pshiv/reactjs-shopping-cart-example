import React, { useState } from 'react'
import './sortBy.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

function SortByComponent(props) {
    const [showSorting, setShowSorting] = useState(false);

    const showSort = () => {

        setShowSorting(true)
    }

    const hideSort = () => {

        setShowSorting(false)
    }

    return (
        <React.Fragment>
            <ul className="sort-by desktop-d-i-f">
                <li className="desktop-d-i-f"><b>Sort By:</b></li>

                {/* <li className="mobile-d-i-f">                
                    <div className="d-f">
                        <FontAwesomeIcon icon={faCaretUp} />
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <b> Sort</b>

                </li> */}

                <li className={`${props.isSortBy === 'asc' ? 'active' : ''}`} onClick={() => props.sortEventHandle("asc")}>Price -- High Low</li>
                <li className={`${props.isSortBy === 'dsc' ? 'active' : ''}`} onClick={() => props.sortEventHandle("dsc")}>Price -- Low High</li>
                <li className={`${props.isSortBy === 'discount' ? 'active' : ''}`} onClick={() => props.sortEventHandle("discount")}>Discount</li>
            </ul>
            <div className="mobile-d-i-f mob-filter">
                <span onClick={() => showSort()}>Sort By</span>
                <span>Filter</span>
            </div>

            {showSorting ?
                <div className="modal">
                    <div className="modal-content">
                        <h6>Short Options</h6>
                        <ul>
                            <li className={`${props.isSortBy === 'asc' ? 'active' : ''}`} ><input type="radio" id="asc" name="sortby" onClick={() => props.sortEventHandle("asc")} /> <label htmlFor="asc">Price -- High Low</label></li>
                            <li className={`${props.isSortBy === 'dsc' ? 'active' : ''}`} ><input type="radio" id="dsc" name="sortby" onClick={() => props.sortEventHandle("dsc")} /> <label htmlFor="dsc">Price -- Low High </label></li>
                            <li className={`${props.isSortBy === 'discount' ? 'active' : ''}`} ><input type="radio" id="discount" name="sortby" onClick={() => props.sortEventHandle("discount")} /><label htmlFor="discount"> Discount</label></li>
                        </ul>
                        <div className="modal-footer">
                            <span onClick={() => hideSort()}>Cancel</span>
                            <span onClick={() => hideSort()}>Appy</span>
                        </div>
                    </div>


                </div>
                : ''}
        </React.Fragment>
    )
}

export default SortByComponent
