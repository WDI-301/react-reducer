import React, { useState } from 'react'  
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [inputHandler, setInputHandler] = useState(0)

  const counterFuncAdd = () => {
    setCounter(counter+1)
  }

  const counterFuncSub = () => {
    setCounter(counter-1)
  }

  const counterFuncParam = (type) => {
    type === 'add' && setCounter(counter+1)
    type === 'sub' && setCounter(counter-1)
    type === 'divide' && setCounter(counter / 2)
    type === 'multiply' && setCounter(counter * 2)
  }
  // const counterFuncInput = (type) => {
  //   type === 'add' && setCounter(counter+inputHandler)
  //   type === 'sub' && setCounter(counter-inputHandler)
  //   type === 'divide' && setCounter(counter / inputHandler)
  //   type === 'multiply' && setCounter(counter * inputHandler)
  // }
    const counterFuncInput = (type) => {
      type === 'add' && setCounter(counter+inputHandler)
      type === 'sub' && setCounter(counter-inputHandler)
      type === 'divide' && setCounter(counter / inputHandler)
      type === 'multiply' && setCounter(counter * inputHandler)
    }



  return (
    <div className="App App-header">
      <h1>Counter: {counter}</h1>
      {/* <button onClick={counterFuncAdd}>Add 1</button>
      <button onClick={counterFuncSub}>Subtract 1</button> */}
      <button onClick={() => counterFuncParam('add')}>Add 1</button>
      <button onClick={() => counterFuncParam('sub')}>Subtract 1</button>
      <button onClick={() => counterFuncParam('divide')}>Divide by 2</button>
      <button onClick={() => counterFuncParam('multiply')}>Multiply by 2</button>
      <p>--------------------------------------------------------------------</p>
      <input type='number' onChange={(e)=>setInputHandler(parseInt(e.target.value))}></input>
      <button onClick={() => counterFuncInput('add')}>Add {inputHandler}</button>
      <button onClick={() => counterFuncInput('sub')}>Subtract {inputHandler}</button>
      <button onClick={() => counterFuncInput('divide')}>Divide by {inputHandler}</button>
      <button onClick={() => counterFuncInput('multiply')}>Multiply by {inputHandler}</button>
    </div>
  );
}

export default App;
