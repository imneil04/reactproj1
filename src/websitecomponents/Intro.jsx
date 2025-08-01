import React from "react";
import { useNavigate } from "react-router-dom";
import "../webstyling/Navbar.css";
//import "../webstyling/Main.css";
import "../App.js";

export default function Intro ({ onEnter })
{
    const navigate = useNavigate();

    const handleEnter = () => {
        onEnter(); //set hasEntered to true, means to go to main page
        navigate('/home');
    }

    return (
       <div className="welcome">
            <div className="welcomeTitle fadeInTitle">
                <h1>Placeholder CHILDCARE</h1>
                <h2>Placeholder1, Placeholder2</h2>
            </div>

            <div className="overlay">
                <button className="enter-button" onClick={handleEnter}>LET'S EXPLORE</button>
            </div>           
       </div>
    );
};

