import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    
    <img src= {require('../images/logo.png')} />
    <h1> header </h1>
    <Link to="/"> Home </Link>
    <Link to="/page 2"> Page 2</Link>


  </header>
)

export default Header
