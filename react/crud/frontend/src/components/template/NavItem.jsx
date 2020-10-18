import React from 'react';
import { Link } from 'react-router-dom'

export default props =>
        <Link to={`${props.linkNav}`}>
                <i className={`fa fa-${props.itemIcon}`}></i> {props.itemName}
        </Link>


// export default props =>
//         <a href={`#${props.linkNav}`}>
//                 <i className={`fa fa-${props.itemIcon}`}></i> {props.itemName}
//         </a>
