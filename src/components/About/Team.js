import React from 'react'
import { member } from './data'
import "./About.css"

const Team = ({darkMode}) => {
  return (
    <div className={darkMode? 'team-cont flash-dark': 'team-cont'}>
        <div className="team-heads">
            <h1 className={darkMode?'white':'head-strong'}>Our Amazing Team</h1>
            <h5 className='head-light'>We are strong together</h5>
        </div>
        <hr className='team'/>
        <div className={darkMode?'flash-dark box-team' : "box-team"}>
            <div className="row row-box">
            {member.map((member)=>{
                return(
                <div className={darkMode?  'flash-dark col-md-4 mb-4 mt-4 mr-4 ml-4 box2':'col-md-4 mb-4 mt-4 mr-4 ml-4 box2'} key={member.id}>
                    <div className="card text-center p-4 cardss">
                        <img src={member.image} className='card-img-top img' alt={member.id}  height="250px" />
                        <div className="card-body">
                            <h5 className="card-title title2 mb-0">
                                {member.name}
                            </h5>
                            <p className="card-text title3 lead fw-bold">
                                {member.role}
                            </p>
                            <p className="desc-member">
                                {member.text}
                            </p>

                            <div className="social">
                                <i class="fa-brands fa-facebook-f foot-icon fb"></i>
                                <i className="fa-brands fa-instagram foot-icon insta"></i>
                            </div>
                        </div>
                    </div>
                </div>
                )})}
                
            </div>
        </div>
      
    </div>
  )
}

export default Team
