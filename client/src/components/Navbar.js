import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <Link to='/' style={{ margin: '.5em'}}>
      Home 
    </Link>
    <Link to='/about' style={{ margin: '.5em'}}>
      About 
    </Link> 
    <Link to='/departments' style={{ margin: '.5em'}}>
      Departments
    </Link>
    
  </ul>
)

export default Navbar