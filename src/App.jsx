import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import './css/nav.css'

function App() {

  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}

export default App
