import { React, useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  const [userNameState, setUserNameState] = useState({
    userName: 'Sruthi'
  });
  

  const userNameHandlerMethod = (event) => {
    setUserNameState({
      userName: event.target.value
    });
  };

  return (
    <div className="App">
      <UserInput changed={userNameHandlerMethod} userName={userNameState.userName}></UserInput>
      <UserOutput userName= {userNameState.userName}></UserOutput>
    </div>
  );
}




export default App;
