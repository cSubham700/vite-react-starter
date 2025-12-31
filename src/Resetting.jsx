import React, { useState } from 'react'
import Nav from './components/Nav'

const Resetting = () => {

    const [showB, setShowB] = useState(true);

    const [isFancy, setIsFancy] = useState(false);

        

  return (
    <>
    <Nav/>
    <div className="home">
      {isFancy ? <Counter key={true} isFancy={true}/> :  <Counter key={false} isFancy={false}/>}
      
      
      <label>
        <input type="checkbox" checked={isFancy} onChange={e => {
            setIsFancy(e.target.checked);
        }} />
        Use fancy styling
      </label>
    </div>
    </>
  )
}


const Counter = ({isFancy}) => {


        const [score, setScore] = useState(0);


        return (
            <div className={isFancy ? ' resetting-counter  resetting-counter-fancy' : 'resetting-counter'}>
                      <h1>{score}</h1>
                      <button onClick={()=> setScore(score + 1)}>Add one</button>
            </div>
        )
}

export default Resetting