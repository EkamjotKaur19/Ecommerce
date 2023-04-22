import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = ({darkMode}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className={darkMode ?'slide-box boxx box d_flex top' : ' slide-box box d_flex top'}key={index}>
                <div className='left'>
                  <h1 className="slide-head">{value.title}</h1>
                  <p className="slide-para">{value.desc}</p>
                  <Link to='/products'><button className='btn-primary'>Visit Collections</button></Link>
                </div>
                <div className='slide-right right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
