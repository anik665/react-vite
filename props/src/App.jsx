import Navbar from "./component/Navbat"
import Card from "./component/Card"
function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title='Card-1' des='This is card 1' />
        <Card title='Card-2' des='This is card 2' />
        <Card title='Card-3' des='This is card 3' />
        <Card title='Card-4' des='This is card 4' />


      </div>

    </>
  )
}

export default App
