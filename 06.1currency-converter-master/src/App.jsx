import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

const bgUrl = "https://images.unsplash.com/photo-1671691981143-83e34591ffff?ixid=M3w4ODczOHwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQzMnw&ixlib=rb-4.1.0&w=1536&h=864&dpr=1.25&auto=format&q=75&fit=crop&quote";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}  // ✅ Use inline style for dynamic URL
    >
      <div className="container">
        <CurrencyConvertor/>
      </div>
    </div>
  );
}

export default App;
