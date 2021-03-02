//installed fontawesome package of
//npm i --save @fortawesome/fontawesome-svg-core
//npm install --save @fortawesome/free-solid-svg-icons
//npm install --save @fortawesome/react-fontawesome
//npm install --save @fortawesome/free-brands-svg-icons

//https://fontawesome.com/how-to-use/on-the-web/using-with/react

import  { useState } from 'react';
import LoginForm from './forms/LoginForm'
// import { Link } from "react-router-dom";
// import LoginImg from './asset/login.png';

// import  MyAlert  from './layout/Alert';
// import ButtonMU from './layout/ButtonMU'
// import "../userAccount/userAccount.css"

// //import FontAweSomeIcon and library modules, then set up your own icon library to avoid overloading with other unused icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//     //faGithub,
//     faGoogle,
//     faFacebook,
//     faTwitter
//   } from '@fortawesome/free-brands-svg-icons';

//   library.add(
//     //faGithub,
//     faGoogle,
//     faFacebook,
//     faTwitter
//   );

const Login = () => {
    const [email, setEmail] = useState ("");
    const [passWord, setPassWord] = useState (""); 
    const [rememberMe, setRememberMe] = useState (false); 
    const [alertEM, setAlertEM] = useState (false);  
    const [alertPW, setAlertPW] = useState (false);

    const submitHandler = (e)=> {
        e.preventDefault();
        
        const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/
        const isEmValid = emailValidator.test(email);        
        
        if(!isEmValid ){
            setAlertEM(true)
            setTimeout(() => {
                setAlertEM(false)
            }, 5000);  
            return false;          
        }
        
        const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        const isPwValid = pwValidator.test(passWord);

        if(!isPwValid){
            setAlertPW(true)
            setTimeout(() => {
                setAlertPW(false)
            }, 5000); 
            return false;                   
        }        
       
        rememberMe===true? saveOnLocal(email, passWord): console.log("No email nor password saved in the browser");   
                   
        setEmail("");
        setPassWord("");
        setRememberMe(false);      
    }   
    
    const saveOnLocal = (email, passWord) => {
        
        let data = JSON.parse(localStorage.getItem('user'));

        if(data == null){
            data = {email, passWord};
        } else {
            data.email=email;
            data.passWord = passWord;
        }
        
        localStorage.setItem('user', JSON.stringify(data));        
        console.log(data);        
        }
    
    //set change handlers at the parent level 
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const changePW = (e) => {
        setPassWord(e.target.value);
    }

    const changeRM = (e) => {
        setRememberMe(e.target.checked);
    }

    return (
        <>
        <LoginForm submitHandler = { submitHandler }
                   changeEmail = { changeEmail }
                   changePW = { changePW }
                   changeRM = { changeRM }
                   email= { email }
                   passWord = { passWord }
                   rememberMe = { rememberMe }
                   alertEM = { alertEM }
                   alertPW = { alertPW }
                    />
        {/* <div className="back">
            
            <div className="card div-center">
                
            <div className="container-lg"> 
            <div className="card-body">       
            <ButtonMU buttonVariant={'outlined'} buttonColor={'primary'} buttonSize={'large'} />
            <img className="image-center" src={ LoginImg } alt="login" /> 

             { alertEM &&  (<MyAlert alertType={'warning'} alertHeading={'Error!'} alertMessage={"Please Enter A Valid Email "}/>)}
             { alertPW &&  (<MyAlert alertType={'danger'} alertHeading={'Incorrect!'} alertMessage={"Please Enter A Valid Password "}/>)}          

            <form onSubmit={ submitHandler }>
            <fieldset>
            
            <div className="form-row">
                <div className="form-group col-lg-12">
                    <label>
                    Your Email
                    </label>
                    
                    <input type="text"
                            name="email"
                            placeholder="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}    required                        
                            />                    
                </div>
                <div className="form-group col-lg-12">
                    <label>
                    Your Password
                    </label>
                    <br />
                    <input  type="password"
                            name="passWord"
                            placeholder="password"
                            className="form-control"
                            value={passWord} 
                            onChange={(e)=>{setPassWord(e.target.value)}} required                      
                            />               
                </div>
            </div>

            <div className="form-check form-group col-lg-12 ml-3">                    
                    <input type="checkbox" 
                           className="form-check-input" 
                           checked={rememberMe} 
                           //id="flexCheckDefault" 
                           onChange={(e)=>{setRememberMe(e.target.checked)}}  
                           //in theory onClick should be used but Chrome prefers onChange here                         
                    />
                    <label> Remember Me </label>                     
            </div>                
               
            <div className="for-check form-group col-lg-12">     
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </div>      
            
            <h2 className="form-group col-lg-12 mt-3 text-center">Or you can log in</h2>
                     
            <div className="col-lg-12 mt-3" aria-label="buttonExample">            
                <button type="button" className="btn btn-primary col-4"><a href="#"></a><FontAwesomeIcon icon={['fab', 'google']}  size="2x"/> with Google</button>
                <button type="button" className="btn btn-warning col-4"><a href="#"></a><FontAwesomeIcon icon={['fab', 'facebook']}  size="2x"/>with Facebook</button>
                <button type="button" className="btn btn-secondary col-4" style={{color: "white"}}><a href="#"></a><FontAwesomeIcon icon={['fab', 'twitter']}  size="2x"/>with Twitter</button>
           </div>               
            
           <div className="form-group col-lg-12 mt-5">    
                <Link to='/reset_password'><button type="button" className="btn btn-primary btn-lg mx-auto">Forgot Password?</button></Link>
                <Link to='/register'><button type="button" className="btn btn-primary btn-lg mx-auto" > Create an Account!</button></Link> 
                <Link to='/'><button type="button" className="btn btn-primary btn-lg mx-auto" > Back to Homepage</button></Link> 
            </div>                
                   
             </fieldset>
           </form>
           </div>
           </div>
           </div>
           </div> */}
     </>
    )
}

export default Login
