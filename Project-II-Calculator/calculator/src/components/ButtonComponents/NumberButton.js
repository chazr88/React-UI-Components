import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button>{props.button.number}</button>
    )
}

export default NumberButton;