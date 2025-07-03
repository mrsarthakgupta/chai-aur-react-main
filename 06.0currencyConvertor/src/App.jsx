import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");                    // amount user inputs
  const [from, setFrom] = useState("usd");                     // base currency
  const [to, setTo] = useState("inr");                         // target currency
  const [convertedAmount, setConvertedAmount] = useState(0);   // result

  const currencyInfo = useCurrencyInfo(from);                  // This gets you all exchange rates for the `from` currency.
  const options = Object.keys(currencyInfo);                   // This gives you a list of all available currencies for the dropdown.

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const amt = Number(amount) || 0;                            // Makes sure amount is a number: '5' → 5 or '' → 0
    setConvertedAmount(amt * currencyInfo[to]);                 // So: 5 * 83.14 = 415.7, this updates convertedAmount = 415.7
  }; 

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();    // Stop page reload
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox                                              //Here we are giving the InputBox component all the props it needs and inputbox will handle the rest.
                label="From"
                amount={amount}                                      // The amount the user enters
                currencyOptions={options}                            // Dropdown options (e.g., ["usd", "eur", "inr"])
                onCurrencyChange={(currency) => setFrom(currency)}   // Updates "from" currency
                selectCurrency={from}                                // Which currency is selected as "From"
                onAmountChange={(amount) => setAmount(amount)}       // Updates the input amount
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"                        // So it doesn't submit the form
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}                         // Shows the converted result
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} 
                selectCurrency={to} 
                amountDisable                                    // Makes the amount box read-only
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
