import React, { useState } from 'react'
import Nav from './components/Nav'



const MyButton = ({onSmash, children}) => {
  return (
    <button onClick={(e)=>{
        e.stopPropagation();
        onSmash();
    }}>{children}</button>
  )
}





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
    <div className='home-button-div' onClick={()=>alert('Parent div clicked')}>
      
      <MyButton  onSmash={()=>alert('Uploading')}>Upload image</MyButton>
      <MyButton onSmash={()=>alert('Playing')}>Play music</MyButton>

    </div>
    </div>
   </>
  )
}

export default Home