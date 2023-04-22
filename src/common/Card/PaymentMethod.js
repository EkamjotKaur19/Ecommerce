import React from "react"
import './Components.css'
export const PaymentMethod = ({text}) => {
    return(
        <>
            <div className="payment-input">
                <div className="payment-type">
                    {/*{icon}*/}
                    🎃
                    <span>{text}</span>
                </div>

                <input type="radio" name="" id=""/>
            </div>
        </>

)
}