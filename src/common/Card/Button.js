import React from "react"
import './Components.css'
export const Button = ({text}) => {
    return(
        <div className="button-container">
            <button className="button">
                🔏
                <span className="btn-text">{text}</span>
            </button>
        </div>
    )
}