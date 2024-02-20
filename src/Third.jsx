import { useNavigate } from 'react-router-dom';
import Germany from './Assests/Germany.jpg';
import Italy from './Assests/italy.jpg';
import Mexico from './Assests/mexico.jpg';
import Turkey from './Assests/turkey.jpg';
import Paris from './Assests/Paris.jpg';
import Switer from './Assests/Switer.jpg';
import UK from './Assests/Uk.jpg';
import Canada from './Assests/Canada.jpg';
import './Third.css';
const Third = () => {
const navigate=useNavigate();
  function handlegermany()
  {
    navigate("/Germany")   
  };
  function handleitaly()
  {
    navigate("/Italy")   
  };
  function handlemexico()
  {
    navigate("/Mexico")   
  };
  function handleturkey()
  {
    navigate("/Turkey")   
  };
  function handleparis()
  {
    navigate("/Paris")   
  };
  function handleswitzerland()
  {
    navigate("/Switzerland")   
  };
  function handleuk()
  {
    navigate("/UK")   
  };
  function handlecanada()
  {
    navigate("/Canada")   
  };
    return(
        <>
        <div class="responsive">
  <div class="gallery">
      <img src={Germany} onClick={handlegermany} alt="Cinque Terre" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Germany</div>
  </div>
</div>
        <div class="responsive">
  <div class="gallery">
      <img src={Italy} onClick={handleitaly} alt="Forest" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Italy</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src={Mexico} onClick={handlemexico} alt="Northern Lights" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Mexico</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src={Turkey} onClick={handleturkey} alt="Mountains" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Turkey</div>
  </div>
</div>

<div class="clearfix"></div>

<div style={{padding:'6px'}}>
</div>
<div>
    <p style={{color:'white'}}>hello</p>
    <p style={{color:'white'}}>hello</p>
</div>
<div class="responsive">
  <div class="gallery">
      <img src={Paris} onClick={handleparis} alt="Cinque Terre" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Paris</div>
  </div>
</div>
        <div class="responsive">
  <div class="gallery">
      <img src={Switer} onClick={handleswitzerland} alt="Forest" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Switzerland</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src={UK} onClick={handleuk} alt="Northern Lights" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>UK</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src={Canada} onClick={handlecanada}alt="Mountains" style={{width:'320px',height:'200px'}}/>
    <div class="desc" style={{fontSize:'25px',fontFamily:'fantasy'}}>Canada</div>
  </div>
</div>

<div class="clearfix"></div>

<div style={{padding:'6px'}}>
</div>
 
      </> 
    );
        };
      
 
export default Third;