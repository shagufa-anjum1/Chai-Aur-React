import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
     setCounter(counter + 1);
     if(counter == 20){
      setCounter(counter);
     }
  }

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
    if(counter == 0){
      setCounter(counter);
    }
  }

  return (
    <>
     <h1>Sofi Aur React</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <br/>
     <br/>
     <button onClick = {removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
