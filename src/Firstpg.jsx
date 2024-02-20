import React from 'react';
import bgimg from './Assests/travel-tourism-world-landmarks-suitcase-travel-tourism-102846136.webp';
import './index.css';
import { useNavigate } from 'react-router-dom';
const Firstpg = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',

  };

  const imageStyle = {
    maxWidth: '100%', // Make the image responsive
    height: 'auto',
    marginRight: '20px',
  };

  const textContainerStyle = {
    flex: 1,
    marginRight: '20px',
    fontSize:'50px',
  
    
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '25px',
    minWidth: '300px',
  
  };
  const navigate=useNavigate();
function handleClick()
{
  navigate("/Loginpage")
}
  return (
    <div style={containerStyle}>
      <img
        src={bgimg}
        alt="Responsive Image"
        style={imageStyle}
      />

      <div style={textContainerStyle}>
        <p style={{fontFamily:"cursive"}}>Travel,enjoy and</p>
        <p style={{position:'relative',bottom:'40px',fontFamily:"cursive"}}>live a new and</p>
        <p style={{position:'relative',bottom:'80px',fontFamily:"cursive"}}>full life...!! </p>
      </div>

      <button style={buttonStyle} className='responsive-button' onClick={handleClick}>Book Now</button>
    </div>
  );
};

export default Firstpg;
