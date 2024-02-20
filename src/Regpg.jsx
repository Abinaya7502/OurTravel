import { useState } from 'react'
import { RegisterApi  } from './Services/Api';
import {storeUserData } from './Services/Storage'
import { isAuthenticated } from './Services/Auth';
import './Regpg.css'
import './Loginpage.css'
import { Link, Navigate } from 'react-router-dom';
import{Button} from 'react-bootstrap';
export default function Regpg(){
    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        name:{required:false},
        custom_error:null
    };
    const [errors,setErrors] = useState(initialStateErrors);

    const [loading,setLoading]  =  useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        let errors =initialStateErrors; 
        let hasError = false; 
        if (inputs.name === "") {
            errors.name.required =true;
            hasError=true;
        }
        if (inputs.email ==="") {
            errors.email.required =true;
            hasError=true;
        }
        if (inputs.password ==="") {
            errors.password.required =true;
            hasError=true;
        }

        if (!hasError) {
            setLoading(true)
            //sending register api request
            RegisterApi(inputs).then((response)=>{
               storeUserData(response.data.idToken);
            }).catch((err)=>{
               if(err.response.data.error.message==="EMAIL_EXISTS"){
                    setErrors({...errors,custom_error:"Already this email has been registered!"})
               }else if(String(err.response.data.error.message).includes('WEAK_PASSWORD')){
                    setErrors({...errors,custom_error:"Password should be at least 6 characters!"})
               }

            }).finally(()=>{
                setLoading(false)
            })
        }
        console.log(initialStateErrors,errors);
        setErrors(errors);
    }

    const [inputs,setInputs] = useState({
        email:"",
        password:"",
        name:""
    })

    const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    if (isAuthenticated()) {
        //redirect user to dashboard
        return <Navigate to="/Secondpg" />
    }
    
    return (
        <div>
            <section className="register-block">
                <div className="container">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center" style={{textAlign:'center',color:'black',fontSize:'50px'}}>SignUp</h2>
                        <form onSubmit={handleSubmit} className="login-form" action="" >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase" style={{fontFamily:'cursive',fontSize:'30px',color:'white'}}>Name</label>
                            <br></br>

                            <input type="text" className="form-control" onChange={handleInput} name="name" id="" style={{backgroundColor:'white',color:'black',height:'40px',width:'250px'}} placeholder='Name'/>
                        { errors.name.required?
                            (<span className="text-danger" >
                                    Name is required.
                                </span>):null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"  className="text-uppercase" style={{fontFamily:'cursive',fontSize:'30px',color:'white'}}>Email</label>
                            <br></br>
                            <input type="text"  className="form-control" onChange={handleInput} name="email" id="" style={{backgroundColor:'white',color:'black',height:'40px',width:'250px'}} placeholder='Email' />
                            { errors.email.required?
                            (<span className="text-danger" >
                                Email is required.
                            </span>):null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase" style={{fontFamily:'cursive',fontSize:'30px',color:'white'}}>Password</label>
                            <br></br>
                            <input  className="form-control" type="password" onChange={handleInput}  name="password" id=""style={{backgroundColor:'white',color:'black',height:'40px',width:'250px'}} placeholder='Password' />
                            { errors.password.required?
                            (<span className="text-danger" >
                                Password is required.
                            </span>):null
                            }
                        </div>
                        <div className="form-group">
            
                            <span className="text-danger" >
                            { errors.custom_error?
                            (<p>{errors.custom_error}</p>)
                            :null
                            }
                            </span>
                            {loading ?
                            (<div  className="text-center">
                                <div className="spinner-border text-primary " role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>):null
                            }
                            <br></br>
            
            <Button
                    type="submit"
                    className="btn login7 float-right"
                    disabled={loading}
                    value="Login" style={{backgroundColor:'black',height:'40px',width:'100px',fontFamily:'fantasy',fontSize:'20px'}}>SignUp</Button>
    
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group" style={{color:'white'}}>
                        Already have account ? Please <Link to="/LoginPage" style={{color:'black',fontFamily:'cursive',fontSize:'20px'}}>Login</Link>
                        </div>
            
            
                        </form>
            
            
                    </div>
            
                </div>
            
            
                </div>
            </section>    
        </div>
        )
}