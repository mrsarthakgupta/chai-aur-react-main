/**
 * - useState: React hook to store and update changing values. (Here: length, checkboxes, password)
 * - useRef: React hook to directly access a DOM element. (Here: points to the input box to select & copy text)
 * - useEffect: React hook to run code when something changes. (Here: auto-generates a new password when options change)
 * - useCallback: React hook to memoize a function so it's not recreated every render. (Here: saves the passwordGenerator for better performance)
 * - passwordGenerator: Makes a random password using letters, numbers, characters.
 * - Copy button: Selects the input text and copies it to clipboard.
 */
import { useState, useCallback, useEffect, useRef } from 'react'



function App() {                                                      //useState returns an array:[value, functionToUpdateValue]
  const [length, setLength] = useState(8)                             //length: stores the length of the password.Default is 8.
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)               //charAllowed: true/false → should we include special characters? Default false
  const [password, setPassword] = useState("")                        //password: the generated password
 
  //useRef hook
  const passwordRef = useRef(null)                                    //Creates a reference to the input box.So that you can copy it to clipboard.

  const passwordGenerator = useCallback(() => {                       //useCallback hook to memoize(remembers) the passwordGenerator function
    let pass = ""                                                     //Format useCallback(() => {functionName}, [dependencies])
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])         //These are the dependencies of the passwordGenerator function. And useCallback will only recreate the function if any of these values change.

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();                              //Uses your useRef to get the input box and highlights all its text, like selecting it with your mouse.
    passwordRef.current?.setSelectionRange(0, 999);             //Ensures the entire text (from start to end) stays highlighted, no matter how long it is.
    window.navigator.clipboard.writeText(password)              //Copies the selected text to the clipboard using the Clipboard API(window.navigator.clipboard)
  }, [password])


  useEffect(() => {                                             //useEffect hook to run the passwordGenerator function when any of the dependencies change.
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 mb-5'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}                                    //It shows your generated password.
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}                                   //This connects your input box to the useRef hook.So when you click Copy, you can select all its text in code.
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"                                                 //This is a range input that lets you select the length of the password.
        min={6}
        max={100}
        value={length}                                               //It’s linked to your length state.
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}                //fires → setLength updates the length state,then useEffect runs → generates a new password instantly!
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}                            //It starts checked or unchecked based on your numberAllowed state.
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
