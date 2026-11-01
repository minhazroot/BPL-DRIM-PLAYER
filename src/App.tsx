

import './App.css'
import Banner from './Component/Banner/Banner'
import Nav from './Component/Nab_bar/Nav'

function App() {
 

  return (
    <>
  <Nav/>
  <Banner/>
    <h2 className='text-6xl'color='black-400'>Hello React</h2>
  <button className="btn btn-warning">Warning</button>
    </>
  )
}

export default App
