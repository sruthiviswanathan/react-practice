import React from 'react';
import './ValidationComponent.css';


// Displays helper text based on the userInput length
const ValidationComponent = (props) => {
    const textLength = props.length;
    let helperText =  null;
    if(textLength < 5) {
        helperText = 'Text too short'
    } else {
        helperText = 'Text long enough'
    }
    return(
        <div className="helperText">
            <p>
                {helperText}
            </p>     
        </div>
    );
}

export default ValidationComponent;