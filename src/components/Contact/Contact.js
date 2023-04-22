import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import ph1 from './images/ph1.webp';
import './Contact.css'


const Contact = ({darkMode}) => {
  const form = useRef();

  const handleSend = () =>{
    alert("Mail has been sent!!")
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ds5atj",
        "template_tk8gjll",
        form.current,
        "27JceM2gG75iJkfXc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>

    <div className="containerc">
      <div className="contact-parent">
        <div className="contact-child child1">
            <p>
              <i className="fas fa-map-marker-alt"></i> Address <br />
              <span>1198-D, Modeltown Extension
              <br />
              Ludhiana, Punjab
              </span>
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> Let's Talk <br />
              <span>+91 78147 76634</span>
            </p>
            <p>
              <i className=" far fa-envelope"></i> General Support <br />
              <span>ekamjot.chugh1004@gmail.com</span>
            </p>
        </div>
        <div className="contact-child child2">
            <div className={!darkMode?"contact-form" :"contact-form-dark"}>
      <form ref={form} onSubmit={sendEmail} className='form2' >

      <div className="inside-contact">
            <h2>Contact Us</h2>
            <h3>
               <span id="confirm"/>
            </h3>
            <p>Name *</p>
            <input id="txt_name" name="user_name" type="text" Required="required"/>
            <p>Email *</p>
            <input id="txt_email" name="email" type="text" Required="required"/>
            <p>Phone *</p>
            <input id="txt_phone" type="text" Required="required"/>
            
            <label>Message</label>
            <textarea name="message" />
        <input type="submit" value="Send" onClick={handleSend} />
         </div>
      </form>
    </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), url('./images/ph1.webp') center;
  width: 400px;
  form {
    margin-right:40%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
    input[type="submit"]:hover{
        background-color:
    }
  }
`;