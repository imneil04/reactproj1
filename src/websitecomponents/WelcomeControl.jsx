import React from "react-router-dom";
import "../webstyling/WelcomeControl.css";
import Navbar from "./Navbar";

//<></> - called react fragments, for grouping multiple elements w/o adding <div> to the DOM
export default function WelcomeControl ({ children })
{
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};