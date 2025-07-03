import React, { useId } from 'react'

function InputBox({
  label,                     // “From” or “To”
  amount,                    // Number shown in the input box
  onAmountChange,            // Function to call when user types a new amount
  onCurrencyChange,          
  currencyOptions = [],      // Array of currency codes: ["usd", "eur", "inr", ...]
  selectCurrency = "usd",    // Which currency is currently selected
  amountDisable = false,     
  currencyDisable = false,   // If true, disables the dropdown
  className = "",            // Extra styling if needed
}) 

  {
  const amountInputId = useId()  // useId() generates a unique ID for each input.
  //                                This is used for <label htmlFor={amountInputId}> so the label is connected to the input for accessibility.

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>            {/* ${className} — lets parent pass extra styling if needed. */} 
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}                                    // ID matches label's htmlFor
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          step="any"                                            // Allows decimals, not just integers
          placeholder="Amount"
          disabled={amountDisable}                              // True disables typing (for “To” box)
          value={amount}                                        // Controlled value from parent state ,shows the current amount
          onChange={(e) => {                                    // onChange → Runs onAmountChange whenever the user types → updates parent state → rerenders.
            if (onAmountChange) {                               // If a handler is passed:
              const val = e.target.value                        // Get new value from input
              onAmountChange(val === "" ? "" : Number(val))     // Pass empty if input is empty, else pass as number
            }
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}                                                 // Shows the currently selected currency (controlled by parent state)
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // When user selects a new currency, call parent's handler with new value
          disabled={currencyDisable}                                             // If true, user can't change the currency
        >
          {currencyOptions.length === 0 ?                       // ===""? true:false
          (
            <option value="">No currencies</option>             // If the array is empty, show fallback option
          ) : 
          (
            currencyOptions.map((currency) => (                 // Loop through each currency  
              <option key={currency} value={currency}>
                {currency.toUpperCase()}                        {/* Show currency code in uppercase */}
              </option>
            ))
          )
          }
        </select>
      </div>
    </div>
  )
}

export default InputBox
