import React from "react"
import img2 from './images/ph3.webp'
import img1 from './images/ph2.jpeg'
import './ann.css'
const Annocument = ({darkMode}) => {
  
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className={darkMode ? 'annocument-background2' :'annocument-background'}>
        <div className='container d_flex boxx'>
          <div className='img-one' >
            <img src={img2} width='100%' height='100%' />
          </div>
          <div className='img-two'>
            <img src={img1} width='117%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
