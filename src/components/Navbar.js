import React from 'react'
import { Link ,NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='ui raised very padded segment'>
        <a className='ui teal inverted segment'>AVD</a>
        <div className='ui right floated header'>
            <button className='ui button'><Link to='/'>Home</Link></button>
            <button className='ui button'><Link to='/about'>About</Link></button>
            <button className='ui button'><Link to='/contact'>Contact</Link></button>
        </div>
    </nav>
    )
}
