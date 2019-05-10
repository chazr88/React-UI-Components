import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.buttonStyle}>{props.button.display}</button>
    )
}

export default ActionButton;