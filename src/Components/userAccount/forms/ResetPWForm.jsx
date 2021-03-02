import React from 'react'
import { Link } from 'react-router-dom'
import  MyAlert  from '../layout/Alert';
import ResetPwImg from '../asset/password-forgot.png'
import "../userAccount.css"

const ResetPWForm = (props) => {
    return (
        <>
            <div className="back">
            
            <div className="card div-center">                
            <div className="container-lg fluid">
            <div className="card-body">        
            {/* <br />            
            <img className="image-center mt-5" src={ ResetPwImg } alt="login" />             */}
            <br />               
            <form onSubmit={ props.submitHandler }>       
            <div className="form-row">
                <div className="form-group col-lg-12">
                    <label>
                    Enter your email and we will send you a link to get back into your account
                    </label>
                    
                    <input type="text"
                            name="email"
                            placeholder="your email account"
                            className="form-control"
                            onChange={ props.changeEmail }
                            required
                            />  
                    <div className="mt-3">  
                    <button type="submit" className="btn btn-lg btn-primary">Reset</button>
                    </div>

                    { props.alertEM && (<MyAlert alertType={'danger'} alertHeading={'Error!'} alertMessage={"Please Enter A Valid Email "}/>)}
                    
                    <Link to='/login'><button type="button" className="btn btn-lg btn-primary mt-5 mr-3">Back to Login</button></Link>                
                    <Link to='/'><button type="button" className="btn btn-primary btn-lg mt-5"> Back to Homepage</button></Link> 
                </div>
                
            </div>
            </form> 
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ResetPWForm
