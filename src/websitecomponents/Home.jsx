import React from "react";
import "../webstyling/Home.css";
import "../webstyling/Common.css"; //for background unity
import Footer from "./Footer";
//images
import p1 from "../images/nutrition.png";
import p2 from "../images/playground.png";
import p3 from "../images/toyspack.png";
import p4 from "../images/house.png";

export default function Home ()
{
    return (
        <div className="mainCont">
            <div className="Cont">         
                <div className="headerIntro">
                    <h1>Header Intro</h1>
                    <p>Some meaningful description here later. This is just a place holder</p>
                </div>
                {/**containes options */}
                <div className="homeOptions">
                    {/**option 1 */}
                    <div className="firstOption">
                        <div className="fliph1">
                            <div className="h1 kinfo1"> 

                                <h2>KEY INFORMATION 1</h2>
                                <span><p>Just a placeholder for now</p></span>                  
                                <img src={p1} alt="nutrition" title="nutrition facts" className="imgHome" />
                    
                                <ul className="ntDesc">
                                    <li>nutrition checklist</li>
                                    <li>healthy options</li>
                                    <li>allergy checker</li>
                                </ul>
                            </div>

                            <div className="k1infoback">
                                <p>More information about nutrition. How to be consistent with making sure proper nutrients are present in food.</p>
                            </div>
                        </div>
                    </div>
                
                    {/**option 2 */}
                    <div className="secondOption">
                        <div className="fliph2">

                            <div className="h1 kinfo1">
                                <h2>KEY INFORMATION 2</h2>
                                <span><p>Just a placeholder for now</p></span>  
                                <img src={p2} alt="playground" title="different options to play around" className="imgHome" />

                                <ul className="ntDesc">
                                    <li>indoor playground zones</li>
                                    <li>dance studio for all levels</li>
                                    <li>workshop zones</li>
                                    <li>playground zones</li>
                                </ul>
                            </div>
                            
                            <div className="k1infoback">
                                <p>More information about different activities available in our grounds. We priority safety first and make sure grounds are prepared 
                                    properly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/**option 3 */}
                    <div className="thirdOption">
                        <div className="fliph3">
                            <div className="h1 kinfo1">

                                <h2>KEY INFORMATION 3</h2>
                                <span><p>Just a placeholder for now</p></span>  
                                <img src={p3} alt="toys" title="toys and other playing items" className="imgHome" />

                                <ul className="ntDesc">
                                    <li>science and technology</li>
                                    <li>discovery centre zones</li>
                                </ul>
                            </div>

                            <div className="k1infoback">
                                <p>More information about toys. Toys are carefuly picked to make sure safety is the #1 priority
                                    and is stored in a secure way where no children can get it, if playtime is over.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/**option 4 */}
                    <div className="fourthOption">
                        <div className="fliph4">
                            <div className="h1 kinfo1">

                                <h2>KEY INFORMATION 4</h2>
                                <span><p>Just a placeholder for now</p></span>  
                                <img src={p4} alt="playhouse" title="playhouse" className="imgHome" />

                                <ul className="ntDesc">
                                    <li>math skills</li>
                                    <li>language and literacy training</li>
                                    <li>socializing activities</li>
                                    <li>creativity development</li>
                                </ul>
                            </div>

                            <div className="k1infoback">
                                <p>More information about skills and literacy. We make sure that every stages of 
                                    child development, learning numbers, socializing, and creativity are given to the highest standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  {/**home Option container closing element tag */}
            </div> {/**Cont closing element tag */}
            <Footer />
        </div>        
    );
};
