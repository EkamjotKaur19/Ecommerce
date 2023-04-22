import React from "react";
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className=' head-nav'>
            <i className='head-icon fa fa-phone'></i>
            <label className="head-label"> +917814776634</label>
            <i className='head-icon fa fa-envelope'></i>
            <label className="head-label">ekam.chugh@gmail.com</label>
          </div>

          <div className='centre row'>
            <strong>50% OFF ON YOUR FIRST ORDER!!!!!!</strong>
          </div>

          <div className='right row RText'>
            <Link to='/contact'><label className="cont-text">Need Help?</label></Link>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
