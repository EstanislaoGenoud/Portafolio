import '../../App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Main from '../Layout/Main'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Main/>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
