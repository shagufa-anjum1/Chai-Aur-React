import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef to get a reference to the password input field
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (characterAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 
     h-[200px] text-center items-center mb-[500px] ml-[500px]'>
        <h1 className='text-4xl text-center text-white font-semibold mt-4 p-3'>Password Generator</h1>
        <div className='flex shadow overflow-hidden p-5'>
          {/* Flexbox wrapper for input and button */}
          <input 
            type='text'
            placeholder='Password'
            className='outline-none w-full py-1 px-3 rounded-lg' // Updated to rounded-l-lg for the left side
            readOnly
            ref={passwordRef} // Attach ref to the input element
            value={password} // Display the generated password
          />
          <button 
            onClick={copyPasswordToClipboard} // Use ref-based copy function
            className='rounded-r-lg outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(parseInt(e.target.value))} // Ensure it's a number
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              checked={characterAllowed}
              id='characterInput'
              onChange={() => setCharacterAllowed(prev => !prev)} // Corrected typo
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
