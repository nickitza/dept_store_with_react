import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <Link to='/'>
      Home | 
    </Link>
    <Link to='/about'>
      About | 
    </Link> 
    <Link to='/departments'>
      Departments
    </Link>
    
  </ul>
)

export default Navbar