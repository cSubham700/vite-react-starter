import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/style.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './About'
import Home from './Home'
import OurQuotes from './OurQuotes'
import Array from './Array'
import Immer from './Immer'
import Form from './Form'
import Task from './Task'
import TravelSnack from './TravelSnack'
import Resetting from './Resetting'
import TaskApp from './ReducerList'
import Context from './Context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/quotes' element={<OurQuotes/>} />
        <Route path='/array' element={<Array/>} />
        <Route path='/immer' element={<Immer/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/task' element={<Task/>} />
        <Route path='/travelsnack' element={<TravelSnack/>} />
        <Route path='/resetting' element={<Resetting/>} />
        <Route path='/reducerlist' element={<TaskApp/>} />
        <Route path='/usecontext' element={<Context/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
