import React from "react"
import SlideCard from "./SlideCard"

const SliderHome = ({darkMode}) => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard darkMode={darkMode}/>
        </div>
      </section>
    </>
  )
}

export default SliderHome
