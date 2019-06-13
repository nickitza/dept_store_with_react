import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Navbar = () => (
  <ul>
    <StyledLink to='/' style={{ margin: '.5em'}}>
      Home 
    </StyledLink>
    <StyledLink to='/about' style={{ margin: '.5em'}}>
      About 
    </StyledLink> 
    <StyledLink to='/departments' style={{ margin: '.5em'}}>
      Departments
    </StyledLink>
  </ul>
)

const StyledLink = styled(Link) `
  text-decoration: none;
  color: #FFF8F5;
  text-transform: uppercase;
  font-weight: 700;
  transition: background 0.4s ease;
  padding: 1.3em .8em;

  &:hover {
    background-color: #f8dd74;
    border-radius: 10px;
    transition: background 0.4s ease;
  }

`

export default Navbar

// #eee2dc
// #123c69
// #AC3b61
// #bab2b5
// #edc7b7