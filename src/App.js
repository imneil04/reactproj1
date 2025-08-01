//import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./websitecomponents/Home";
import About from "./websitecomponents/About";
import Pricing from "./websitecomponents/Pricing";
import Login from "./websitecomponents/Login";
import Intro from "./websitecomponents/Intro";
//import Navbar from "./websitecomponents/Navbar";
import WelcomeControl from './websitecomponents/WelcomeControl';
//import './App.css';


export default function App() {

  //track state of each website visit
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="App">
      <Router>
        {/**<Navbar /> - comment out for now */}
          <Routes>
              <Route path="/" element={<Intro onEnter={() => setHasEntered(true)} />} />

              {/**Modified May 4 2025 -  
               * ternary operator (short if/else) - conditional rendering
               * if true - then display/navigate main page (home/about/etc..)
               * if false - then display welcome page
               * adds layer of consistency and rule to properly access main page (disable accessing pages via URL directly)
              */}
              <Route path="/home" element={hasEntered ? (<WelcomeControl ><Home /></WelcomeControl>) : <Navigate to="/" replace />}></Route>
              <Route path="/about" element={hasEntered ? (<WelcomeControl ><About /></WelcomeControl>) : <Navigate to="/" replace />}></Route>
              <Route path="/pricing" element={hasEntered ? (<WelcomeControl ><Pricing /></WelcomeControl>) : <Navigate to="/" replace />}></Route>
              <Route path="/login" element={hasEntered ? (<WelcomeControl ><Login /></WelcomeControl>) : <Navigate to="/" replace />}></Route>

              {/**Added May 4 2025 - re-route everything to the welcome page 
               * replace property avoids over polluting browser history with unecessary /home visits
              */}
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </Router>
    </div>
      
  );
};

//export default App;
