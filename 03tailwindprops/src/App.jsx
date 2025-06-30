import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <div className='flex gap-4'>
      <Card username="chaiaurcode" btnText="click me" />  {/* Using the Card component and passing props(means property) ,Here card gets username="chaiaurcode" and btnText="click me"  */}
      <Card username="hitesh" />    {/* Here, btnText is undefined it will either be blank or takes default values*/}
      </div>
    </>
  )
}

export default App
