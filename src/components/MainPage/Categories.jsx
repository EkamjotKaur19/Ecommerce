import React from "react"
import { Link } from "react-router-dom"
import p1 from "../assets/images/category/cat1.png"
import p2 from "../assets/images/category/cat2.png"
import p3 from "../assets/images/category/cat3.png"
import p4 from "../assets/images/category/cat4.png"
import p5 from "../assets/images/category/cat5.png"
import p6 from "../assets/images/category/cat6.png"
import p7 from "../assets/images/category/cat7.png"
import p8 from "../assets/images/category/cat8.png"
import p9 from "../assets/images/category/cat9.png"
import p10 from "../assets/images/category/cat10.png"
import p11 from "../assets/images/category/cat11.png"

const Categories = () => {
  const data = [
    {
      cateImg: p1,
      cateName: "Fashion",
    },
    {
      cateImg: p2,
      cateName: "Electronic",
    },
    {
      cateImg: p3,
      cateName: "Cars",
    },
    {
      cateImg: p4,
      cateName: "Home & Garden",
    },
    {
      cateImg: p5,
      cateName: "Gifts",
    },
    {
      cateImg: p6,
      cateName: "Music",
    },
    {
      cateImg: p7,
      cateName: "Health & Beauty",
    },
    {
      cateImg: p8,
      cateName: "Pets",
    },
    {
      cateImg: p9,
      cateName: "Baby Toys",
    },
    {
      cateImg: p10,
      cateName: "Groceries",
    },
    {
      cateImg: p11,
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='catg-box box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <Link to='/products' className="cat-heads"><span>{value.cateName}</span></Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
