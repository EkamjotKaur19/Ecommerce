import React from "react"
import "./style.css"

const Wrapper = ({darkMode}) => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <div className="wrap-cont">
      <section className={darkMode?'flash-dark wrapper background product' :'wrapper background product'}>
     
        <h1 className="wrapper-head">Customer Facts</h1>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className={darkMode?'black product':'product'} key={index}>
                <div className= {darkMode? 'dark img icon-circle':'img icon-circle'}>
                  <i>{val.cover}</i>
                </div>
                <h3 >{val.title}</h3>
                <p >{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
      </div>
    </>
  )
}

export default Wrapper
