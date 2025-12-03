import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/style.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './About'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
