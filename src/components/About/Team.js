import React from 'react'
import { member } from './data'
import "./Team.css"

const Team = ({darkMode}) => {
  return (
    <div className="responsive-container-block container">
  <p className={darkMode ? "text-blk-dark team-head-text" : "text-blk team-head-text"}>
    Our Team
  </p>
  
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
        </div>
        <p className="text-blk name">
          Ekamjot 
        </p>
        <p className="text-blk position">
          Web Developer
        </p>
        <p className="text-blk feature-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="social-icons">
          <a href="https://www.twitter.com" target="_blank">
            <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"/>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"/>
          </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"/>
        </div>
        <p className="text-blk name">
          Ekamjot
        </p>
        <p className="text-blk position">
          CEO
        </p>
        <p className="text-blk feature-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="social-icons">
          <a href="https://www.twitter.com" target="_blank">
            <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"/>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"/>
          </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"/>
        </div>
        <p className="text-blk name">
          Ekamjot
        </p>
        <p className="text-blk position">
          Web Developer
        </p>
        <p className="text-blk feature-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="social-icons">
          <a href="https://www.twitter.com" target="_blank">
            <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"/>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"/>
          </a>
        </div>
      </div>
  </div>
</div>
  )
}

export default Team
