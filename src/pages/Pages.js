import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import Reviews from "../components/Reviews/Reviews"

const Pages = ({ productItems, addToCart, CartItem, shopItems , NewItems, darkMode, name}) => {
  
  return (
    <>
      <Home CartItem={CartItem} darkMode={darkMode} name={name}/>
      <FlashDeals productItems={productItems} addToCart={addToCart} darkMode={darkMode}/>
      <TopCate darkMode={darkMode}/>
      <NewArrivals NewItems={NewItems} addToCart={addToCart} darkMode={darkMode}/>
      <Discount darkMode={darkMode}/>
      <Shop shopItems={shopItems} addToCart={addToCart} darkMode={darkMode}/>
      <Annocument darkmode={darkMode}/>
      <Wrapper darkMode={darkMode}/>
      <Reviews darkMode={darkMode}/>
      
    </>
  )
}

export default Pages
