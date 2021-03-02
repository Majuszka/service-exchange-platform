import React, { useState } from 'react'
import ResetPWForm from '../userAccount/forms/ResetPWForm'
// import { Link } from 'react-router-dom'
// import  MyAlert  from './layout/Alert';
// import ResetPwImg from './asset/password-forgot.png'
import "../userAccount/userAccount.css"

const ResetPW = () => {
    const [email, setEmail] = useState (""); 
    const [alertEM, setAlertEM] = useState(false);   

    const submitHandler = (e) => {         
        e.preventDefault();

        const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/
        const isEmValid = emailValidator.test(email);        
        
        if(!isEmValid){
            setAlertEM(true)
            setTimeout(() => {
                setAlertEM(false)
            }, 5000);
            return false;           
        }
        setEmail("");
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
        <ResetPWForm submitHandler = { submitHandler }
                     changeEmail = { changeEmail }
                     email = {email}
                     alertEM = {alertEM}        
        />       
        {/* <div className="back">
            
            <div className="card div-center">                
            <div className="container-lg">
            <div className="card-body">                    
                        
            <img className="image-center mt-5" src={ ResetPwImg } alt="login" />            
                           
            <form onSubmit={ submitHandler }>       
            <div className="form-row">
                <div className="form-group col-lg-12">
                    <label>
                    Enter your email and we will send you a link to get back into your account
                    </label>
                    
                    <input type="text"
                            name="email"
                            placeholder="your email account"
                            className="form-control"
                            onChange={(e)=>setEmail(e.target.value)}                         
                            />  
                    <div className="mt-3">  
                    <button type="submit" className="btn btn-lg btn-primary">Reset</button>
                    </div>

                    { alertEM && (<MyAlert alertType={'danger'} alertHeading={'Error!'} alertMessage={"Please Enter A Valid Email "}/>)}
                    
                    <Link to='/login'><button type="button" className="btn btn-lg btn-primary mt-5 mr-3">Back to Login</button></Link>                
                    <Link to='/'><button type="button" className="btn btn-primary btn-lg mt-5"> Back to Homepage</button></Link> 
                </div>
                
            </div>
            </form> 
            </div>
            </div>
            </div>
            </div> */}
        </>
    ) 
}

export default ResetPW