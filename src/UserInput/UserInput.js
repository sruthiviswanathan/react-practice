import React from 'react';
import './UserInput.css'
const UserInput = (props) => {
    return (
        <div className ='userName'>
        <h1>Enter Your Name here: </h1>
        <input type = "text" onChange={props.changed} value={props.userName}></input>
        </div>
    );
}

export default UserInput;