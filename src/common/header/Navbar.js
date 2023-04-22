import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = ({darkMode, name}) => {
  
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          

          <div className='navlink mob-links'>
            <ul className= "  link f_flex capitalize" >
              
              <li >
                <i className='fa fa-user icon-circle'></i>
                
              </li>

              <li >
                <h6 className={darkMode? "user-dark" :"user"}>{name}</h6>
                
              </li>

              

              <li >
                <Link to='/' className={darkMode?"nav-heads-dark":"nav-heads"}>home</Link>
              </li>

              <li >
                <Link to='/products' className={darkMode?"nav-heads-dark":"nav-heads"}>Products</Link>
              </li>
              
              <li >
                <Link to='/about' className={darkMode?"nav-heads-dark":"nav-heads"}>About</Link>
              </li>
              <li>
                <Link to='/login' className={darkMode?"nav-heads-dark":"nav-heads"}>Login</Link>
              </li>
              <li >
                <Link to='/register' className={darkMode?"nav-heads-dark":"nav-heads"}>Register</Link>
              </li>
              <li >
                <Link to='/contact' className={darkMode?"nav-heads-dark":"nav-heads"}>contact</Link>
              </li>
            </ul>

            
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
