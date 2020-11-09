import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {

    // Inline styling
    const style = {
        color : 'blue',
        fontSize: '20px'
    };

    return (
        <div className="userInfo" style={style}>
            <p>
                Hi! I am {props.userName}.
            </p>
            <p>
               This is my first react application!!!
            </p>  
        </div> 
    );
}

export default UserOutput;