import React, { useState } from 'react'
import Nav from './components/Nav'

const Home = () => {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
    console.log(count);
    
  }

  return (
   <>
   <Nav/>
   <div className='home'>
    
    <h1>Home Page</h1>
    <h1>{count}</h1>
    <button onClick={handleClick}>Click</button>
    </div>
   </>
  )
}

export default Home