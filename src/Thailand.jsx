import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
import './Thailand.css';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from './data.json';
import { Rating } from '@mui/material';
import { Link,useParams } from 'react-router-dom';

export default function Thailand() {
  
  const navigate=useNavigate();
    function handleenquiry()
    {
      navigate("/Enquiry")   
    };
    function handlepay()
  {
    navigate("/Pay")   
  };

  // const navigate=useNavigate();
 
   const [items, setItems] = useState(data);

  //  console.log(items);

    const sitems= data.filter((curItem) => {
       return curItem.category === "Thailand" ;
     });
     console.log(sitems);
  return (
    <> 
    {/* <button onClick={filterItems("Thailand")}>Hii</button>
      <div >
        {sitems.map(p) => if (p.category == "Thailand") {
          return <h2 key={index}>{element}</h2>;
        }
      }
         */}
         {sitems.map((p)=>
        
          <Card
            key={p.id}
            sx={{
              maxWidth: 345,
              marginLeft: "30px",
              display: "inline-block",
              boxShadow: "2px grey",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="390"
              id="prodimg"
              image={p.image}
            />
            <CardContent>
              <Typography variant="body2" id="desc" color="text.secondary" className='Heading'>
                {p.description}
              </Typography>

              <Typography variant="body2" id="price">
                Price : {p.price}
              </Typography>
              <Rating name="read-only" value={p.rating} readOnly/>
            </CardContent>
          </Card>
          )}
         <div>
          <br></br>
          <button className='button' onClick={handleenquiry}>Enquiry Now</button>
          <button className='pay' onClick={handlepay}>PAY NOW</button>
          </div>
          </>
        );
          }
        
