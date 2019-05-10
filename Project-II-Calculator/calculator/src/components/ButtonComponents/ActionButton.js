import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button>{props.button.action}</button>
    )
}

export default ActionButton;