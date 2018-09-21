import React from 'react'
import './DeleteButton.css';

export const DeleteButton = (props) => (
    <div className="delete-btn" onClick={props.handleClick}>
        {props.children}
    </div>
)
