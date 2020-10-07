import React from 'react';

function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })
    })
}

export default props =>
    <div>
        <h1>{props.name} {props.surname}</h1>
        <h2>Children</h2>
        <ul>
            {/* {props.children} */}
            {
                childrenWithProps(props)
            }
        </ul>
    </div>