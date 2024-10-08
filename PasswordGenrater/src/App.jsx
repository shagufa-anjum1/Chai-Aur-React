import { useState, useCallback } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharactarAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }

    if(characterAllowed){
      str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }

    for(let i=1; i<=Array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 
     h-[150px] text-center items-center ml-96 mb-[500px]'>
      <h1 className='text-4xl text-center text-white font-semibold mt-4 p-3'>Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden p-5'>
        <input 
             type='text'
             placeholder='Password'
             className='outline-none w-full py-1 px-3 '
             readOnly >

             </input>
        </div>
      </div>
    </>
  )
}

export default App
