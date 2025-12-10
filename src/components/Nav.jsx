import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <h1>Our App</h1>
        <div>
            
            <Link to={'/'}  >Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/quotes'}>Our Quotes</Link>
            
        </div>
    </div>
  )
}

export default Nav