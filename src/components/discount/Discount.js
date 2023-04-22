import React from "react"
import Dcard from "./Dcard"
import './disc.css'

const Discount = ({darkMode}) => {
  return (
    <>
      <section className={darkMode ? 'deals flash-dark' : 'deals flash '}>
        <div className='container'>
          <div className='heading  f_flex'>
            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='disc' className="disc-img"  />
            <h2 className="disc-head" >Big Discounts</h2>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
