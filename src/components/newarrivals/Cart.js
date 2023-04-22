import React, { useState } from "react"
import Ndata from "./Ndata"
import './new.css'


const Cart = ({ NewItems, addToCart, darkMode }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className={darkMode?'flash-dark content grid product':'content grid product'}>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div >
                <img src={val.cover} alt='new' className="new-pdts" />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
