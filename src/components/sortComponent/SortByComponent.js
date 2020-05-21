import React from 'react'
import './sortBy.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

function SortByComponent(props) {

    return (
        <React.Fragment>
            <ul className="sort-by">
                <li className="desktop-d-i-f"><b>Sort By:</b></li>

                <li className="mobile-d-i-f">                
                    <div className="d-f">
                        <FontAwesomeIcon icon={faCaretUp} />
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <b> Sort</b>

                </li>
               
                <li className={`desktop-d-i-f ${props.isSortBy == 'asc' ? 'active' : ''}`} onClick={() => props.sortEventHandle("asc")}>Price -- High Low</li>
                <li className={`desktop-d-i-f ${props.isSortBy == 'dsc' ? 'active' : ''}`} onClick={() => props.sortEventHandle("dsc")}>Price -- Low High</li>
                <li className={`desktop-d-i-f ${props.isSortBy == 'discount' ? 'active' : ''}`} onClick={() => props.sortEventHandle("discount")}>Discount</li>
            </ul>
        </React.Fragment>
    )
}

export default SortByComponent
