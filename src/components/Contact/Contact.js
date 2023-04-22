import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import ph1 from './images/ph1.webp';
import './Contact.css'


const Contact = ({darkMode}) => {
  const form = useRef();

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
    <div className="bg-contact">
    <div className={!darkMode?"contact-form" :"contact-form-dark"}>
      <form ref={form} onSubmit={sendEmail} className='form2' >
        <label>Name</label>
        <input type="text" name="user_name" className="cont-ip" />
        <label>Email</label>
        <input type="email" name="user_email" className="cont-ip"/>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
    </div>
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