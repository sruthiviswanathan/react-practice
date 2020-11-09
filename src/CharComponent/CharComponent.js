import React from 'react';
import './CharComponent.css';

// Displays each character in separate divs
const CharComponent = (props) => {
    return (
        <div className="character" onClick={props.click}>
            {props.character} 
        </div>
    );
}

export default CharComponent;