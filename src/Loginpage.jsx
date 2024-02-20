import './Loginpage.css';

import { useState } from 'react';
import { LoginApi } from './Services/Api';
import {storeUserData } from './Services/Storage'
import { isAuthenticated } from './Services/Auth';
import { Link, Navigate, } from 'react-router-dom';
import{Button} from 'react-bootstrap';

export default function Loginpage(){   
//   const navigate=useNavigate();
//     function handlereg()
//     {
  
//       navigate("/Regpg")   
//     };

    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        custom_error:null
    };
    const [errors,setErrors] = useState(initialStateErrors);
    
    const [loading,setLoading]  =  useState(false);

    const [inputs,setInputs] = useState({
        email:"",
        password:"",
    })
    const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        console.log(inputs);
        event.preventDefault();
        let errors =initialStateErrors; 
        let hasError = false; 
        
        if (inputs.email === "") {
            errors.email.required =true;
            hasError=true;
        }
        if (inputs.password === "") {
            errors.password.required =true;
            hasError=true;
        }
       
        if (!hasError) {
            setLoading(true)
            //sending login api request
            LoginApi(inputs).then((response)=>{
               storeUserData(response.data.idToken);
            }).catch((err)=>{
               if (err.code==="ERR_BAD_REQUEST") {
                    setErrors({...errors,custom_error:"Invalid Credentials."})
               }

            }).finally(()=>{
                setLoading(false)
            })
        }
        setErrors({...errors});

    }

    if (isAuthenticated()) {
        //redirect user to dashboard
        return <Navigate to="/Secondpg" />
    }


    return (
    <>
        
        <div>
      {/* <NavBar /> */}
      <section className="login-block">
        <div className="container7">
          <div className="row ">
            <div className="col login-sec">
              <h2 className="text-center" style={{textAlign:'center',color:'darkgreen',fontSize:'50px'}}>Login Now</h2>
              <form onSubmit={handleSubmit} className="login-form" action="">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                    style={{fontFamily:'cursive',fontSize:'30px',color:'white'}}
                  >
                    Email:
                  </label>
                  <br></br>
                  <input
                    type="email"
                    className="form-control"
                    onChange={handleInput}
                    name="email"
                    id=""
                    placeholder="email"
                    style={{backgroundColor:'darkgreen',height:'40px',width:'250px'}}
                  />
                  {errors.email.required ? (
                    <span className="text-danger">Email is required.</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                    style={{fontFamily:'cursive',fontSize:'30px',color:'white'}}
                  >
                    Password
                  </label>
                  <br></br>
                  <input
                    className="form-control"
                    type="password"
                    onChange={handleInput}
                    name="password"
                    placeholder="password"
                    id=""
                    style={{backgroundColor:'darkgreen',height:'40px',width:'250px'}}
                  />
                  {errors.password.required ? (
                    <span className="text-danger">Password is required.</span>
                  ) : null}
                </div>
                <div className="form-group">
                  {loading ? (
                    <div className="text-center">
                      <div
                        className="spinner-border text-primary "
                        role="status"
                      >
                        <span className="sr-only"></span>
                      </div>
                    </div>
                  ) : null}
                  <span className="text-danger">
                    {errors.custom_error ? <p>{errors.custom_error}</p> : null}
                  </span>
                  <br></br>
                  <br></br>
                  <Button
                    type="submit"
                    className="btn login7 float-right"
                    disabled={loading}
                    value="Login" style={{backgroundColor:'darkgreen',height:'40px',width:'100px',fontFamily:'fantasy',fontSize:'20px'}}>LOGIN</Button>
                  
                </div>
                <div className="clearfix"></div>
                <div className="form-group" style={{color:'white'}}>
                  Create new account ? Please{" "}
                  <Link to="/Regpg" style={{color:'black',fontFamily:'cursive',fontSize:'20px'}}>Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>        </>
    )
}

