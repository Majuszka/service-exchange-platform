import React, { useState } from 'react'
import RegistrationForm from './forms/RegistrationForm'

// import { Link } from "react-router-dom"

// import MyAlert from './layout/Alert';
// import ButtonMU from './layout/ButtonMU'

// import SignUpImg from './asset/sign-up.png';
// import "../userAccount/userAccount.css";

// //these two are third party MIT-licensed packages, see the source page info in the components themselves
// import RegionCountrySelector from '../userAccount/selector/RegionCountrySelector'
// import AvatarUploader from '../userAccount/upload-edit/AvatarUploader'

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

const Register = () => {
     
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState(""); 
     const [email, setEmail] = useState("");     
     const [userName, setUserName] = useState("");
     const [passWord, setPassWord] = useState("");
     const [confirmPW, setConfirmPW] = useState(""); 

     const [country, setCountry] = useState(""); //for RegionCountrySelector package
     const [region, setRegion] = useState(""); //for RegionCountrySelector pack
     
     const [preview, setPreview] = useState("");
     const [savedImage, setSavedImage] = useState("");
    
     const [alertEM, setAlertEM] = useState (false);  
     const [alertPW, setAlertPW] = useState (false);
     const [alertPWCheck, setAlertPWCheck] = useState (false);  
    
     const submitHandler = (e) => {
         e.preventDefault();  
        
        //email validator source: 
        //At least 8 characters long;
        //One lowercase, one uppercase, one number and one special character;
        //No whitespaces. use https://regexr.com/ and https://regex101.com/ for writing up and testing regex
        //source: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a (section 6)
        
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
       
        if ((isEmValid && isPwValid) && (passWord!==confirmPW)) {
            setAlertPWCheck(true)
            setTimeout(() => {
                setAlertPWCheck(false)
            }, 5000); 
            return false;
        }

         setFirstName("");
         setLastName("");
         setCountry("");
         setRegion("");
         setEmail("");
         setUserName("");
         setPassWord("");
         setConfirmPW("");
         setPreview(null);
         setSavedImage(null);        
    }    

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const changeLastName = (e) => {
        setLastName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changePassWord = (e) => {
        setPassWord(e.target.value);
    }

    const changeConfirmPW = (e) => {
        setConfirmPW(e.target.value);
    }  

    const changeCountry = (val) => {
        setCountry(val)
    }

    const changeRegion = (val) => {
        setRegion(val)
    }

    const onClose = () => {
        setPreview(null);
        setSavedImage(preview);    
      }
    
    const onCrop = (preview) => {
        setPreview(preview);
        setSavedImage(null);
      }
    
    const onBeforeFileLoad = (e) => {
        if(e.target.files[0].size >=71680) {
          alert("File is too big! The maximal file size is 71860 kbs");
          e.target.value="";
        }
      }
    

     return (
        <>
        <RegistrationForm submitHandler = { submitHandler }
                          changeFirstName = { changeFirstName}
                          changeLastName = { changeLastName }
                          changeEmail = { changeEmail }
                          changeUserName = { changeUserName }
                          changePassWord = { changePassWord }
                          changeConfirmPW = { changeConfirmPW } 
                          changeCountry = {changeCountry} 
                          changeRegion = {changeRegion}
                          firstName = { firstName }
                          lastName = { lastName }
                          email = { email }
                          userName = { userName }
                          country = {country}
                          region = {region}
                          passWord = { passWord }
                          confirmPW = { confirmPW }
                          alertEM = { alertEM }
                          alertPW = { alertPW }
                          alertPWCheck = { alertPWCheck }
                          
                          onClose = {onClose}
                          onCrop = {onCrop}
                          onBeforeFileLoad ={onBeforeFileLoad}
                          preview={preview}
                          savedImage={savedImage}
                />
        {/* <div className="back">
            
            <div className="card div-center">                
            <div className="container-lg fluid">
            <div className="card-body">
            <ButtonMU buttonVariant={'outlined'} buttonColor={'primary'} buttonSize={'large'} />                           
            <br />
            <img className="image-center" src={ SignUpImg } alt="sign-up" /> 
            <br/>
            <form onSubmit={ submitHandler } action="#">

                <div className="form-row">
                <div className="form-group col-lg-6">
                    <label>
                    First Name
                    </label>
                    
                    <input type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="your first name"
                            className="form-control"
                            onChange={(e)=>setFirstName(e.target.value)}                            
                            required
                            />                    
                </div>

                <div className="form-group col-lg-6">
                    <label>
                    Last Name
                    </label>
                    
                    <input type="text"
                            name="lastName"
                            value={lastName}
                            placeholder="your last name"
                            className="form-control"
                            onChange={(e)=>setLastName(e.target.value)}
                            required
                            />                    
                </div>

                <div className="form-group col-lg-12">
                    <label>
                    Country
                    </label>                    
                    <RegionCountrySelector country={country} region={region} setParentCountry={val =>setCountry(val)} setParentRegion={val => setRegion(val)}/>               
                </div>          

                <div className="form-group col-lg-7">
                    <label>
                    Email
                    </label>
                    
                    <input type="text"
                            name="email"
                            value={email}
                            placeholder="your email address"
                            className="form-control"
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                            />                    
                </div>                              

                <div className="form-group col-lg-5">
                    <label>
                    User Name
                    </label>
                    
                    <input type="text"
                            name="username"
                            value={userName}
                            placeholder="unique, no space"
                            className="form-control"
                            onChange={(e)=>setUserName(e.target.value)}
                            />                    
                </div>
               
                <div className="form-group col-lg-12">
                    <label>
                    Set Password (8-12 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character. Whitespace MAY NOT be used)
                    </label>
                    <br />
                    <input  type="password"
                            name="password"
                            value={passWord}
                            placeholder="Please ensure you follow the password setting request"
                            className="form-control"
                            onChange={(e)=>{setPassWord(e.target.value)}}
                            required
                            />               
                </div>               

                <div className="form-group col-lg-12">
                    <label>
                    Confirm Password
                    </label>
                    <br />
                    <input  type="password"
                            name="confirmPassword"
                            value={confirmPW}
                            placeholder="Please confirm your password"
                            className="form-control"
                            onChange={(e)=>setConfirmPW(e.target.value)}
                            required
                            />               
                </div>               

                <div className="form-group col-lg-12">
                <label>Choose Your Avatar (Optional)</label>
                <div>
                    <AvatarUploader />
                </div>
                </div>
                
                { alertEM &&  (<MyAlert alertType={'warning'} alertHeading={'Error!'} alertMessage={"Please Enter A Valid Email "}/>)}
                { alertPW &&  (<MyAlert alertType={'danger'} alertHeading={'Error!'} alertMessage={"Please Enter A Valid Password "}/>)} 
                { alertPWCheck && (<MyAlert alertType={'warning'} alertHeading={'Error!'} alertMessage={"Inconsistent Password!"}/>)}                           

            <div className="form-group col-lg-12">  
            <button type="submit" value="Submit" className="btn btn-primary btn-lg">Submit</button>
            </div>                        

            <h2 className="form-group col-lg-12 mt-3 text-center">Or you can sign up</h2>
            <div className="col-lg-12" aria-label="buttonExample">                
                <button type="button" className="btn btn-primary col-4"><a href="#"></a><FontAwesomeIcon icon={['fab', 'google']}  size="2x"/> with Google</button>
                <button type="button" className="btn btn-warning col-4"><a href="#"></a><FontAwesomeIcon icon={['fab', 'facebook']}  size="2x"/>with Facebook</button>
                <button type="button" className="btn btn-secondary col-4" style={{color: "white"}}><a href="#"></a><FontAwesomeIcon icon={['fab', 'twitter']}  size="2x"/>with Twitter</button>
            </div> 
            
            <div className="form-group col-lg-12 mt-3">   
            <Link to='/login'><button type="button" className="btn btn-primary btn-lg mt-3 mr-3">Back to Login</button></Link>
            <Link to='/'><button type="button" className="btn btn-primary btn-lg mt-3"> Back to Homepage</button></Link> 
            </div>                                
            </div>           
            </form>
            </div> 
            </div>
            </div>
            </div>           */}
        </>
    )
}

export default Register