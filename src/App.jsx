import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Batsman from './batsman'

function App() {
  function handleclick() {
    alert("i am clicked")
  }
  const calculation = (num) => {
    const value = num + 10;
    alert(value);
  }
  const substract = (a, b) => {
    const value = (a - b);
    alert(value)
  }
  return (
    <>
      <h1>This is practice module 39</h1>
      {/* <button onClick={handleclick}> click 1</button>
      <button onClick={() => alert('i am click 2')}>click 2</button>
      <button onClick={() => calculation(34)}>click add</button>
      <button onClick={() => substract(13, 4)}>click substract</button> */}
      {/* <Counter></Counter> */}
      <h1>this is for batsman component</h1>
      <Batsman name='rifat'></Batsman>

    </>
  )
}

export default App
