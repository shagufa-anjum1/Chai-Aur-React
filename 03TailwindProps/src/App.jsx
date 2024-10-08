import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    Name: "shagufa anjum",
    age: 21
  }
  let myArr = [1, 2, 3];

  return (
    <>
     <h1 className='bg-red-400 text-white, p-4, rounded-xl mb-4'>Tailwind test</h1>
    
     <Card userName="codewithsofi"  userSumy="Shagufa Anjum" />
     <br></br>
     <Card userName="Shaguga Anjum" />
    
    </>
  )
}

export default App
