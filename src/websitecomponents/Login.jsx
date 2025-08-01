import React from "react";
import { Link } from "react-router-dom";
import "../webstyling/Navbar.css";
import "../webstyling/Login.css";
//import { useState } from "react";
//import Footer from "../websitecomponents/Footer";
//import "../webstyling/Main.css";

export default function Login ()
{
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    return (
        <div className="parentloginCont">
            <div className="loginCont">

                <div className="memberLogin">
                    <div className="memberLoginHeader">
                        <h2>Login Here</h2>
                    </div>

                    {/**Login form fields */}
                    <div className="formCont">
                        <form>
                            <div className="input-wrap">
                                <i class="fa-solid fa-envelope"></i> <label htmlFor="email"></label> 
                                <input type="email" id="email" name="email" className="logFields" placeholder="Please enter email here" />
                                
                            </div>

                            <div>
                                 <i class="fa-solid fa-lock"></i> <label htmlFor="password"></label>
                                <input type="password" id="password" name="password" className="logFields"  placeholder="Please enter password here" />
                            </div>

                                
                            <div className="memberSignLogin">
                                <span id="memberSignUpLink" className="spanLink"><Link to="/">Not a member? Sign up here</Link></span>
                                <button type="submit" className="btnSubmit">Login Now</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/**right box login form styling */}
                <div className="nonmemberLogin">
                    <span></span>
                </div>
            </div>
        </div>
    );
};