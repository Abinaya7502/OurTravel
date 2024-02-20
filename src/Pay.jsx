import Upi from './Assests1/IMG_4412.jpg';
import React from 'react';
import './index.css';
const Pay = () => {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
  
    };
  
    const imageStyle = {
      maxWidth: '500px', // Make the image responsive
      height: 'auto',
      marginRight: '20px',
    };
  
    const textContainerStyle = {
      flex: 1,
      marginRight: '10px',
      fontSize:'50px',
    
      
    };
  
    const buttonStyle = {
      padding: '10px',
      fontSize: '25px',
      minWidth: '300px',
    
    };
    return (
      <div style={containerStyle}>
        <img
          src={Upi}
          alt="Responsive Image"
          style={imageStyle}
        />
  
        <div style={textContainerStyle}>
          <p style={{fontFamily:'inherit',color:'darkgreen',paddingLeft:'300px'}}>A Vacation is Having</p>
          <p style={{position:'relative',bottom:'40px',paddingLeft:'300px',fontFamily:"inherit",color:'darkgreen'}}>Nothing to do And</p>
          <p style={{position:'relative',bottom:'80px',paddingLeft:'300px',fontFamily:"inherit",color:'darkgreen'}}>All day to do it in...</p>
        </div>
      </div>
    );
  };
  
  export default Pay;
  
// function Pay(){
//  return(
//  <>
//  <img src={Upi} style={{width:'500px',height:'600px',alignItems:'center'}}/>
//  </>
//  )
// }
// export default Pay;