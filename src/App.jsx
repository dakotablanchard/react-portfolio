import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './css/App.css'
import './css/nav.css'

function App() {

  return (
    <>
      <main className="main">
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default App
