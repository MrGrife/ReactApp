import React from 'react'

const Button = (props) => {
    return (
        <button id="styled-btn" {...props}>{props.children}</button>
    )
}

export default Button
