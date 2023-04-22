import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, darkMode, name }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} darkMode={darkMode}/>
      <Navbar darkMode={darkMode} name={name}/>
    </>
  )
}

export default Header
