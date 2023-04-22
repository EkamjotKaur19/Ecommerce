import React from "react"
import Cart from "./Cart"
import "./new.css"

const NewArrivals = ({ NewItems, addToCart, darkMode }) => {
  return (
    <>
      <section className={darkMode ? 'new-mob flash-dark' : 'new-mob flash'}>
        <div className='container'>
          <div className='heading f_flex'>
            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt='new' className="new-img" />
            <h2 className="new-head">New Arrivals </h2>
          </div>
          <Cart NewItems={NewItems} addToCart={addToCart} darkMode={darkMode}/>
        </div>
      </section>
    </>
  )
}

export default NewArrivals
