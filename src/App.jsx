import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './css/App.css'
import './css/nav.css'

function App() {

  return (
    <>
      <main className="main">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
