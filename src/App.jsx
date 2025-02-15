
import './App.css'
import Home from './pages/home'
import Introducere from './pages/introducere'
import Razboi from './pages/razboi'
import Razboi2 from './pages/razboi2'
import Consecinte from './pages/materiale/consecinte'
import RomaniaWW2 from './pages/materiale/romania_ww2'


import { Routes, Route } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'
import Holocaust from './pages/materiale/holocaust'


function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <>

      <ReactLenis root>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Introducere' element={<Introducere />} />
          <Route path='/Razboi' element={<Razboi />} />
          <Route path='/Razboi2' element={<Razboi2 />} />
          <Route path='/Consecinte' element={<Consecinte />} />
          <Route path='/Romania_in_razboi' element={<RomaniaWW2 />} />
          <Route path='/Holocaust' element={<Holocaust />} />
        </Routes>
      </ReactLenis>


    </>
  )
}

export default App
