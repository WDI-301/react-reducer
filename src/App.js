import React, { useState, useReducer } from 'react'  
import logo from './logo.svg';
import './App.css';


const counterReducer = (counter, action) => {
  console.log(action)
  switch (action.type) {
      case 'Increment':
        return counter+1
      case 'Decrement':
        return counter-1
      case 'Add':
        return counter+action.inputHandler
      case 'Subtract':
        return counter-action.inputHandler
      case 'Divide':
        return counter / action.inputHandler
      case 'Multiply':
        return counter * action.inputHandler
      case 'Power' :
        return counter ** action.inputHandler
      case 'Remainder':
        return counter % action.inputHandler
      case 'Square Root':
        return Math.sqrt(counter)
      case 'RESET':
        return 0
      case 42:
        return 42
      default:
        alert("Not a Math function")
        break;
    }
}


function App() {

  // const [counter, setCounter] = useState(0)
  let initialCounter = 0
  const [counter, dispatch] = useReducer( counterReducer, initialCounter )
  const [inputHandler, setInputHandler] = useState(10)

  const mathArr = ['Increment', 'Decrement', 'Add','Subtract','Multiply', 'Divide', 'Power', 'Remainder', 'Square Root']
  // const counterFuncAdd = () => {
  //   setCounter(counter+1)
  // }

  // const counterFuncSubtract = () => {
  //   setCounter(counter-1)
  // }

  // const counterFuncParam = (type) => {
  //   type === 'Add' && setCounter(counter+1)
  //   type === 'Subtract' && setCounter(counter-1)
  //   type === 'Divide' && setCounter(counter / 2)
  //   type === 'Multiply' && setCounter(counter * 2)
  // }
  // const counterFuncInput = (type) => {
  //   type === 'Add' && setCounter(counter+inputHandler)
  //   type === 'Subtract' && setCounter(counter-inputHandler)
  //   type === 'Divide' && setCounter(counter / inputHandler)
  //   type === 'Multiply' && setCounter(counter * inputHandler)
  // }
    // const counterFuncInput = (type) => {
    //   dispatch({
    //     type: type,
    //     inputHandler: inputHandler
    //   })
    // }



  return (
    <div className="App App-header">
      <h1>Counter: {counter}</h1>
      {/* <button onClick={() => setCounter(0)}>Reset</button> */}
      <button onClick={() => 
        dispatch({
          type: 'RESET'
        })
      }>Reset</button> 


      {/* not in the map
      Button 'The Ultimate Answer'
      Counter = 42 */}
      <button onClick={() => dispatch({type: 42})}>The Ultimate Answer</button>

      {/* 
      <button onClick={counterFuncAdd}>Add 1</button>
      <button onClick={counterFuncSubtract}>Subtracttract 1</button> 
      */}
      {/* 
      <button onClick={() => counterFuncParam('Add')}>Add 1</button>
      <button onClick={() => counterFuncParam('Subtract')}>Subtracttract 1</button>
      <button onClick={() => counterFuncParam('Divide')}>Divide by 2</button>
      <button onClick={() => counterFuncParam('Multiply')}>Multiply by 2</button> 
      */}
      <p>--------------------------------------------------------------------</p>
      <input type='number' 
        onChange={(e)=>setInputHandler(parseInt(e.target.value))} 
        value={inputHandler}
      />

      {/* 
      <button onClick={() => counterFuncInput('Add')}>Add {inputHandler}</button>
      <button onClick={() => counterFuncInput('Subtract')}>Subtracttract {inputHandler}</button>
      <button onClick={() => counterFuncInput('Divide')}>Divide by {inputHandler}</button>
      <button onClick={() => counterFuncInput('Multiply')}>Multiply by {inputHandler}</button> */}
      {
        mathArr.map((expression) => {
          return (
            // <button onClick={() => counterFuncInput(expression)}>
            <button onClick={() =>
              dispatch({
              type: expression,
              inputHandler: inputHandler
              })
            }>
              {expression}
              {
                expression === 'Decrement' ? 
                '--' 
                : 
                expression === 'Increment' ? 
                '++' 
                :
                expression === 'Square Root'?
                ''
                :
                ' ' + inputHandler
              }
              </button>
              // in the map 
              // Button 'Square Root'
              // Counter = square root the counter
              


          )
        })
      }
    </div>
  );
}

export default App;
