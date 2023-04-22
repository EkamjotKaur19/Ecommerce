import React from "react"
import './check.css'
import {SubHeading} from "./SubHeading";
import {NeuomorphicCard} from "./NeumorphicCard";
import {PaymentMethod} from "./PaymentMethod";
import {Button} from "./Button";

export const Card = ({total}) => {
    return(
        <div className="card-head">
            <div className="card-check">
                <div className="card-title">
                    Checkout
                </div>
                {/* description section */}
                <div className="section description">
                    <SubHeading  text={"Description"}/>
                    <NeuomorphicCard text ={"Some brief description"}/>
                </div>
                {/* Payment Section*/}
                <div className="section payment">
                    <SubHeading text={"Payment Method"}/>
                    <PaymentMethod text={"Visa Payment"}/>
                    <PaymentMethod text={"Flutterwave Payment"}/>
                    <PaymentMethod text={"Stripe Payment"}/>

                </div>
                {/* Total*/}
                <div className="section total">
                    <SubHeading text={"Total"}/>
                    <SubHeading text={total}/>
                </div>
                {/*Checkout Button*/}
                <Button text="Pay Now"/>
            </div>
        </div>
    )
}