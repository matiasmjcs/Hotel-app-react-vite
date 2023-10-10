import './App.css'
import { Outlet } from 'react-router-dom'
import NavBarComponent from './components/NavBar'
function App() {

  return (
    <>
     <NavBarComponent/>
     <Outlet />
    </>
  )
}

export default App
