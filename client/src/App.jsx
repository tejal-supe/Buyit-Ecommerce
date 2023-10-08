import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './navigator'

function App() {

  return (
    <div className='bg-blue-50 min-h-screen' >   
      <BrowserRouter>
      <Navbar />
      <Navigator />
      </BrowserRouter>
  </div >
  )
}

export default App
