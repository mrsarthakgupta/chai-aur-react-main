import { useState } from 'react'                   // Import useState hook from React
import './App.css'                

function App() {
  const [counter, setCounter]  = useState(15)      //Declare a state variable 'counter' with initial value 15,'setCounter' is the function to update 'counter'
//                                                  we can assign any variable name [tea,drinktea] = useState(15)
  const addValue = () => {
  setCounter(prev => Math.min(prev + 4, 20))
  }

  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter <= 0) {
        return 0;  // If the current value is 0 or less, keep it at 0
      } 
      else {
        return prevCounter - 1; // Otherwise, decrease by 1
      }
    });
  };

  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>
        Counter value: {counter}  
      </h2>
      <button
        onClick={addValue}  
      >
        Add value {counter}
      </button> 
      <br /> 
      <button
        onClick={removeValue} 
      >
        remove value {counter}
      </button>
      <p>footer: {counter}</p>
      </>
  )
}

export default App   


// const addValue = () => {
//   // counter = counter + 1          // ❌ Not allowed – direct state change
//   // setCounter(counter + 1)        // ❌ Uses stale 'counter' (value when function runs)
//   //                                // ❗ React batches updates, so multiple calls don't update correctly

//   setCounter(prev => prev + 1)     // ✅ 'prev' gets latest state value
//   setCounter(prev => prev + 1)     // ✅ Each call uses updated value
//   setCounter(prev => prev + 1)     // ✅ Total +3 so far
//   setCounter(prev => prev + 1)     // ✅ Final +4, accurate and safe
// }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }
