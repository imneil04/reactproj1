import React from "react";
import { Link } from "react-router-dom";
import "../webstyling/Navbar.css";
//datetime
import Date from "../js/DateTime";

export default function Navbar ()
{
    return (   
        <div className="Nav">
            <Date />
            <ul className="navCont">   
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/pricing">RATE OPTIONS</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>
            
        </div>        
    );
};