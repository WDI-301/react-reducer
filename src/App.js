import React, { useState, useReducer } from 'react'  
import logo from './logo.svg';
import './App.css';
import counterReducer from './reducers/counterReducer'

function App() {

  const [counter, dispatch] = useReducer( counterReducer, 0)
  const [inputHandler, setInputHandler] = useState(10)

  const mathArr = ['Increment', 'Decrement', 'Add','Subtract','Multiply', 'Divide', 'Power', 'Remainder', 'Square Root']
  
  return (
    <div className="App App-header">
      <h1>Counter: {counter}</h1>
      <button onClick={() => 
        dispatch({
          type: 'RESET'
        })
      }>Reset</button> 
      <button onClick={() => dispatch({type: 42})}>The Ultimate Answer</button>
      <p>--------------------------------------------------------------------</p>
      <input type='number' 
        onChange={(e)=>setInputHandler(parseInt(e.target.value))} 
        value={inputHandler}
      />
       {
        mathArr.map((expression) => {
          return (
            <button onClick={() =>
              dispatch({
              type: expression,
              inputHandler: inputHandler
              })
            }>
              {expression}
              {
                expression === 'Decrement' ? '--' : 
                expression === 'Increment' ? '++' :
                expression === 'Square Root'? '' :
                ' ' + inputHandler
              }
              </button>
          )
        })
      }
    </div>
  );
}

export default App;
