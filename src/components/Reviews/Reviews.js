import React from 'react'
import './style.css'
const Reviews = ({darkMode}) => {
  return (
    <>

    <div className={darkMode?'flash-dark body':'body'} >
    <h1 className='review-head' >Testimonials</h1>
        
        <div className={darkMode?'dark-outerdiv':'light outerdiv'}>
        
            
            <div className="innerdiv">
            
            <div className="div1 eachdiv">
                <div className="userdetails">
                <div className="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt=""/>
                </div>
                <div className="detbox">
                    <p className="name">Daniel Clifford</p>
                    <p className="designation">Premium Member</p>
                </div>
                </div>
                <div className="review">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quos!</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem incidunt, in debitis, repellendus temporibus rem qui tempora amet sapiente ex odio ipsa totam, repellat earum ipsum consectetur impedit officia dolorem pariatur atque! Incidunt, assumenda doloremque obcaecati aperiam autem officia sequi veniam laborum sapiente blanditiis commodi itaque quis deleniti corporis quisquam maiores amet sit pariatur vero harum velit. Exercitationem laborum cupiditate molestias? Deserunt culpa deleniti aperiam. Soluta quos magnam repellat possimus modi necessitatibus. Aliquid repudiandae corrupti reiciendis alias maxime enim?</p>
                </div>
            </div>
            <div className="div2 eachdiv">
                <div className="userdetails">
                <div className="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt=""/>
                </div>
                <div className="detbox">
                    <p className="name">Jonathan Walters</p>
                    <p className="designation">Verified Graduate</p>
                </div>
                </div>
                <div className="review">
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, recusandae.</h4>
                <p>“ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis obcaecati ipsam et tenetur perspiciatis tempore ad labore eum nisi nam! ”</p>
                </div>
            </div>
            <div className="div3 eachdiv">
                <div className="userdetails">
                    <div className="imgbox">
                        <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt=""/>
                    </div>
                    <div className="detbox">
                        <p className="name ">Kira Whittle</p>
                        <p className="designation ">Verified Graduate</p>
                    </div>
                </div>
                <div className="review ">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, molestiae.!</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae quas assumenda sit aut molestias temporibus ratione tenetur necessitatibus laborum deserunt ut illum porro animi deleniti voluptatum nobis similique, explicabo maiores incidunt labore, neque ab nulla eveniet? Voluptate expedita rem distinctio obcaecati odit magnam adipisci minima tenetur odio ipsa eaque facere perspiciatis sit sapiente iure eveniet, similique nemo asperiores enim?</p>
                </div>
            </div>
            <div className="div4 eachdiv">
                <div className="userdetails">
                <div className="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt=""/>
                </div>
                <div className="detbox">
                    <p className="name ">Jeanette Harmon</p>
                    <p className="designation ">Verified Graduate</p>
                </div>
                </div>
                <div className="review ">
                <h4>An overall wonderful and rewarding experience</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse sed dicta fugit ab ipsam explicabo pariatur! Optio, explicabo autem.</p>
                </div>
            </div>
            <div className="div5 eachdiv">
                <div className="userdetails">
                <div className="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt=""/>
                </div>
                <div className="detbox">
                    <p className="name">Patrick Abrams</p>
                    <p className="designation">Verified Graduate</p>
                </div>
                </div>
                <div className="review">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptates!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad inventore commodi laborum vitae quas autem. Consequuntur sint quam ad numquam incidunt provident commodi eligendi, dolor cum error ducimus quisquam adipisci, voluptate recusandae nulla, voluptates ea eos? Consectetur dignissimos libero cumque, corrupti neque ad quaerat quisquam sit ipsa, a mollitia voluptatibus!</p>
                </div>
            </div>
            </div>
            </div>
    </div>
    </>
  )
}

export default Reviews
