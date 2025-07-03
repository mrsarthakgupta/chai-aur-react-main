import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});     // Store exchange rates

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())   // Convert response to JSON
      .then((res) => setData(res[currency]));       // Save rates for this currency
  }, [currency]);    // Runs again if `currency` changes

  return data;
}

export default useCurrencyInfo;
