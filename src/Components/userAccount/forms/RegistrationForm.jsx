import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import MyAlert from '../layout/Alert';
import ButtonMU from '../layout/ButtonMU'

import SignUpImg from '../asset/sign-up.png';
import '../userAccount.css';

//these two are third party MIT-licensed packages, see the source page info in the components themselves
import RegionCountrySelector from '../selector/RegionCountrySelector'
import AvatarUploader from '../upload-edit/AvatarUploader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    //faGithub,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

  library.add(
    //faGithub,
    faGoogle,
    faFacebook,
    faTwitter
  );

const RegistrationForm = (props) => {

    // const [country, setCountry] = useState(""); //for RegionCountrySelector package
    // const [region, setRegion] = useState(""); //for RegionCountrySelector package   
    
    // const clearUp = () => {
    //      setCountry("");
    //      setRegion("");  
    // }

    // async const waitSubmitHandler = () => {
    //     props.submitHandler? await clearUp(): console.log("wait");        
    // }

    // waitSubmitHandler();

    //  useEffect (()=> {               
    //     setCountry("");
    //     setRegion("");               
    // }, [props.submitHandler]);

    return (
        <>
            <div className="back">
            
            <div className="card div-center">                
            <div className="container-xl fluid">
            <div className="card-body">
            <ButtonMU buttonVariant={'outlined'} buttonColor={'primary'} buttonSize={'large'} />                           
            {/* <br />
            <img className="image-center" src={ SignUpImg } alt="sign-up" />  */}
            <br/>
            <form onSubmit={ props.submitHandler } action="#">

                <div className="form-row">
                <div className="form-group col-lg-6">
                    <label>
                    First Name
                    </label>
                    
                    <input type="text"
                            name="firstName"
                            value={props.firstName}
                            placeholder="your first name"
                            className="form-control"
                            onChange={ props.changeFirstName }                            
                            required
                            />                    
                </div>

                <div className="form-group col-lg-6">
                    <label>
                    Last Name
                    </label>
                    
                    <input type="text"
                            name="lastName"
                            value={props.lastName}
                            placeholder="your last name"
                            className="form-control"
                            onChange={props.changeLastName}
                            required
                            />                    
                </div>

                <div className="form-group col-lg-12">
                    <label>
                    Country
                    </label>                    
                    <RegionCountrySelector country={props.country} region={props.region} setParentCountry={val =>props.changeCountry(val)} setParentRegion={val => props.changeRegion(val)}/>               
                </div>          

                <div className="form-group col-lg-7">
                    <label>
                    Email
                    </label>
                    
                    <input type="text"
                            name="email"
                            value={props.email}
                            placeholder="your email address"
                            className="form-control"
                            onChange={props.changeEmail}
                            required
                            />                    
                </div>                              

                <div className="form-group col-lg-5">
                    <label>
                    User Name
                    </label>
                    
                    <input type="text"
                            name="username"
                            value={props.userName}
                            placeholder="unique, no space"
                            className="form-control"
                            onChange={props.changeUserName}
                            />                    
                </div>
               
                <div className="form-group col-lg-12">
                    <label>
                    Set Password (8-12 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character. Whitespace MAY NOT be used)
                    </label>
                    <br />
                    <input  type="password"
                            name="password"
                            value={props.passWord}
                            placeholder="Please ensure you follow the password setting request"
                            className="form-control"
                            onChange={props.changePassWord}
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
                            value={props.confirmPW}
                            placeholder="Please confirm your password"
                            className="form-control"
                            onChange={props.changeConfirmPW}
                            required
                            />               
                </div>               

                <div className="form-group col-lg-12">
                <label>Choose Your Avatar (Optional)</label>
                <div>
                    <AvatarUploader onClose = {props.onClose} onCrop={props.onCrop} onBeforeFileLoad={props.onBeforeFileLoad} preview={props.preview} savedImage={props.savedImage} />
                </div>
                </div>
                
                { props.alertEM &&  (<MyAlert alertType={'warning'} alertHeading={'Error!'} alertMessage={"Please Enter A Valid Email "}/>)}
                { props.alertPW &&  (<MyAlert alertType={'danger'} alertHeading={'Error}!'} alertMessage={"Please Enter A Valid Password "}/>)} 
                { props.alertPWCheck && (<MyAlert alertType={'warning'} alertHeading={'Error!'} alertMessage={"Inconsistent Password!"}/>)}                           

            <div className="form-group col-lg-12">  
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>                        

            <h2 className="form-group col-lg-12 mt-3 text-center">Or you can sign up</h2>

            <div className="col-lg-12 mt-3" aria-label="buttonExample">                
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
            </div>            
        </>
    )
}

export default RegistrationForm
