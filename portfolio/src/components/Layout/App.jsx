import '../../App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Main from '../Layout/Main'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Main/>
    </BrowserRouter>
  )
}

export default App
