import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../asset/login.png";

import MyAlert from "../layout/Alert";
import ButtonMU from "../layout/ButtonMU";
import "../userAccount.css";

//import FontAweSomeIcon and library modules, then set up your own icon library to avoid overloading with other unused icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  //faGithub,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  //faGithub,
  faGoogle,
  faFacebook,
  faTwitter
);

const LoginForm = (props) => {
  return (
    <>
      <div className="back">
        <div className="card div-center">
          <div className="container-lg fluid">
            <div className="card-body">
              <ButtonMU
                buttonVariant={"outlined"}
                buttonColor={"primary"}
                buttonSize={"large"}
              />
              {/* <br />
            <img className="image-center" src={ LoginImg } alt="login" /> */}
              <br />
              {props.alertEM && (
                <MyAlert
                  alertType={"warning"}
                  alertHeading={"Error!"}
                  alertMessage={"Please Enter A Valid Email "}
                />
              )}
              {props.alertPW && (
                <MyAlert
                  alertType={"danger"}
                  alertHeading={"Incorrect!"}
                  alertMessage={"Please Enter A Valid Password "}
                />
              )}

              <form onSubmit={props.submitHandler}>
                <fieldset>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <label>Your Email</label>

                      <input
                        type="text"
                        name="email"
                        placeholder="email"
                        className="form-control"
                        value={props.email}
                        onChange={props.changeEmail}
                        required
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label>Your Password</label>
                      <br />
                      <input
                        type="password"
                        name="passWord"
                        placeholder="password"
                        className="form-control"
                        value={props.passWord}
                        onChange={props.changePW}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-check form-group col-lg-12 ml-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={props.rememberMe}
                      //id="flexCheckDefault"
                      onChange={props.changeRM}
                      //in theory onClick should be used but Chrome prefers onChange here
                    />
                    <label> Remember Me </label>
                  </div>

                  <div className="for-check form-group col-lg-12">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Login
                    </button>
                  </div>

                  <h2 className="form-group col-lg-12 mt-3 text-center">
                    Or you can log in
                  </h2>

                  <div className="col-lg-12 mt-3" aria-label="buttonExample">
                    <button type="button" className="btn btn-primary col-4">
                      <a href="#"></a>
                      <FontAwesomeIcon
                        icon={["fab", "google"]}
                        size="2x"
                      />{" "}
                      with Google
                    </button>
                    <button type="button" className="btn btn-warning col-4">
                      <a href="#"></a>
                      <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                      with Facebook
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary col-4"
                      style={{ color: "white" }}
                    >
                      <a href="#"></a>
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                      with Twitter
                    </button>
                  </div>

                  <div className="form-group col-lg-12 mt-5">
                    <Link to="/reset_password">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg mx-auto"
                      >
                        Forgot Password?
                      </button>
                    </Link>
                    <Link to="/register">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg mx-auto"
                      >
                        {" "}
                        Create an Account!
                      </button>
                    </Link>
                    <Link to="/">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg mx-auto"
                      >
                        {" "}
                        Back to Homepage
                      </button>
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
