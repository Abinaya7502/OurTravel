import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Secondpg.css';
import thailand from './Assests/PHI-PHI-ISLANDS.jpg';
import Greece from './Assests/Most-Beautiful-Places-in-Greece-Featured-Image.webp';
import Spain from './Assests/spain-best-places-to-visit-madrid.jpg';
import HongKong from './Assests/best-ways-to-marvel-iconic-harbour-700x394.jpg';
import{Button} from 'react-bootstrap';
const Secondpg = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  const navigate=useNavigate();
  function handlevisit()
  {
    navigate("/Third")   
  };
  function handlethailand()
  {
    navigate("/Thailand")   
  };
  function handlegreece()
  {
    navigate("/Greece")   
  };
  function handlespain()
  {
    navigate("/Spain")   
  };
  function handlehongkong()
  {
    navigate("/HongKong")   
  };
  function logoutUser()
  {
    localStorage.removeItem('idToken');
   
    navigate('/')
  }
    return(
    <>
    <Button onClick={logoutUser} style={{float:'right',fontFamily:'cursive',marginRight:'30px',width:'80px',height:'40px',fontSize:'15px'}}>LogOut</Button>
        <div className="container">
          <div className="text" style={{fontSize:'50px',fontFamily:'cursive'}}>Discover</div>
          <div className="text" style={{fontSize:'50px',fontFamily:'cursive'}}>Destination</div>
          <div className="text" style={{fontSize:'20px',fontFamily:'inherit'}}>Find beautiful tourist destinations at affordable prices</div>
        </div>
        <div className="search-bar">
      <input
        type="text"
        placeholder="Search Your Destination"    
        className='search'
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
    <br></br>
    {/* <div><p style={{color:'white'}}>white</p></div> */}
    <div className="container">
          <div className="text" style={{fontSize:'35px',fontFamily:'initial'}}>Top Visited Destination</div>
          </div>
    <div class="responsive">
  <div class="gallery">
      <img src={thailand} onClick={handlethailand} alt="Cinque Terre" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Thailand</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
      <img src={Greece} onClick={handlegreece} alt="Forest" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Greece</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src={Spain} onClick={handlespain} alt="Northern Lights" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Spain</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src={HongKong} onClick={handlehongkong} alt="Mountains" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>HongKong</div>
  </div>
</div>
<button  className='responsive-button1'onClick={handlevisit}>Visit More</button>


<div class="clearfix"></div>

<div style={{padding:'6px'}}>
</div>
 
      </> 
    );
        };
   
export default Secondpg;                   
 