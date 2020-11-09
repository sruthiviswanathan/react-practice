import './App.css';
import { React , useState } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

function App() {

  // UserInput
  const [textState, setTextState] = useState({
    userInput: 'HAPPY'
  });

  // Characters in userInput
  const [characterState, setCharacterState] = useState({
    characters: textState.userInput.split("")
  })

  // Updates the values based on userInput
  const updateUserInputHandler = (inputValue) => {
    setTextState({
      userInput: inputValue
    });
    setCharacterState({
      characters: inputValue.split("")
    });
  }

  // Handler to remove the selected letter from userInput
  const removeLetterHandler = (index) => {
      let originalTextValue = [...textState.userInput];
      originalTextValue.splice(index, 1);
      let updatedTextValue = originalTextValue.join("")
      updateUserInputHandler(updatedTextValue);
  }

  return (
    <div className="App">
      <h1>Enter any Text of your choice:</h1>
      <input type="text" onChange={(event) => updateUserInputHandler(event.target.value)} value={textState.userInput}></input>
      <h1>Length of the entered text</h1>
      <p>{textState.userInput.length}</p>
      <ValidationComponent length={textState.userInput.length}></ValidationComponent>
      {characterState.characters.map((char, index) => {  
        return <CharComponent character={char} key={index} click={() => removeLetterHandler(index)}></CharComponent>
      }) 
      }   
    </div>
  );
}

export default App;
