import './App.css'
import { Outlet } from 'react-router-dom'
import NavBarComponent from './components/NavBar'
import Footer from './components/Footer'
function App() {

  return (
    <>
     <NavBarComponent/>
     <Outlet />
     <Footer/>
    </>
  )
}

export default App
