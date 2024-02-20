import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from './Assests1/92443076.jpg';
import './index.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Enquiry = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
    }

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pf2n7oa', 'template_k35o2fj', form.current, {
          publicKey:'SW3x1PPt4pN698YIv',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <LoginPageContainer>
          <BackgroundImage  src={backgroundImage} alt="Background" />
          <Overlay>
            <LoginForm>
            <p style={{fontSize:'40px',textAlign:'center',color:'darkgreen',fontFamily:'cursive'}}>ENQUIRY NOW</p>
    <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Name' style={{width:'300px',backgroundColor:'darkgreen',color:'white',fontSize:'20px'}} name="from_name" />
      <br></br>
      <br></br>
      <input type="email" placeholder='Email'style={{width:'300px',backgroundColor:'darkgreen',color:'white',fontSize:'20px'}} name="from_email" />
      <br></br>
      <br></br>
      <input type="number" placeholder='****'style={{width:'300px',backgroundColor:'darkgreen',color:'white',fontSize:'20px'}} name="from_Phonenumber" />
      <br></br>
      <br></br>
      <textarea name="message"placeholder='Message' style={{width:'300px',backgroundColor:'darkgreen',color:'white',fontSize:'20px'}} />
      <br></br>
      <br></br>
      {/* </form>
      <form onSubmit={handleSubmit}> */}
      <input type="submit" value="SUBMIT" style={{backgroundColor:'darkgreen',fontFamily:'fantasy',fontSize:'20px',color:'white'}} />
    </form>
    {/* {showAlert && (
        <div className="alert">Submitted Successfully</div>
        )} */}
            </LoginForm>
          </Overlay>
        </LoginPageContainer>
     );
    };
    export default Enquiry;
    
    const LoginPageContainer = styled.div`
      position: relative; 
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    `;
    
    const BackgroundImage = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
    `;
    
    const Overlay = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
    `;
    
    const LoginForm = styled.div`
      text-align: center;
      padding: 20px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.8);
    `;
    
    const Title = styled.h2`
      color: #fff;
    `;
    
    const Input = styled.input`
      margin: 10px;
      padding: 10px;
      width: 100%;
    `;
    
    const ButtonsContainer = styled.div`
      display: flex;
             flex-direction: column;
    `;
    
    const LoginButton = styled.button`
      margin: 10px;
      padding: 10px;
      width: 100%;
      cursor: pointer;
      background: #007bff;
      color: #fff;
      border: none;
    `;
    
    
    