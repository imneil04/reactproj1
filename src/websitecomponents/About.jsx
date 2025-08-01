import React from "react";
import "../webstyling/About.css";
import "../webstyling/Common.css";
import l1 from "../images/calgarypic-unsplash.jpg";
import l2 from "../images/edmpic-unsplash.jpg";
import u1 from "../images/user-icon.png";
import Footer from "./Footer";

export default function About ()
{
    return (
        <div className="mainCont">
            <div className="Cont">       
                {/**Title description */}
                <div className="aboutTitleHeader">
                    <h2>Get to Know How we Started</h2>
                    <p>This is just a placeholder. More information about this section will be placed later on.
                        For now a placeholder description will be placed on this section here. Stay tuned.
                    </p>
                </div>

                <div className="aboutOption">

                    <div className="abtlocation">

                        <label for="calgaryloc"><h2>LOCATION 1</h2></label>
                        <img src={l1} alt="calgaryloc" title="main branch" className="cities" />
                            <ul className="branchinfo">
                                <li>123 Placeholder Dr NW, Calgary, AB</li>
                                <li>111-111-1111</li>
                                <li>Placeholder123@gmail.com</li>
                            </ul>
                    </div>

                    <div className="abtlocation">

                        <label for="edmloc"><h2>LOCATION 2</h2></label>
                        <img src={l2} alt="edmloc" title="alt branch" className="cities" />
                            <ul className="branchinfo">
                                    <li>123 Placeholder Dr SW, Edmonton, AB</li>
                                    <li>111-111-1111</li>
                                    <li>Placeholder123@gmail.com</li>
                            </ul>
                    </div>

                    <div className="abtlocation">

                         <label for="calgaryloc"><h2>LOCATION 3</h2></label>
                         <img src={l1} alt="calgaryloc" title="main branch" className="cities" />
                            <ul className="branchinfo">
                                    <li>123 Placeholder Dr NW, Calgary, AB</li>
                                    <li>111-111-1111</li>
                                    <li>Placeholder123@gmail.com</li>
                            </ul>
                    </div>
                </div> {/**closing tag aboutOption element tag */}

                <div className="aboutTeamCont">

                    <div className="abtTeam">
                        <label for="tmember1"><h2>TEAM MEMBER 1</h2></label>
                        <img src={u1} alt="tmember1" title="tmember1" className="tmember"/>
                        <ul className="branchinfo">
                            <li>Placeholder Title</li>
                            <li>Placeholder Member</li> 
                            <li>Placeholder Contact Info</li>
                        </ul>
                    </div>

                    <div className="abtTeam">
                        <label for="tmember2"><h2>TEAM MEMBER 2</h2></label>
                        <img src={u1} alt="tmember2" title="tmember2" className="tmember"/>
                        <ul className="branchinfo">
                            <li>Placeholder Title</li>
                            <li>Placeholder Member</li> 
                            <li>Placeholder Contact Info</li>  
                        </ul>
                    </div>

                    <div className="abtTeam">
                        <label for="tmember3"><h2>TEAM MEMBER 3</h2></label>
                        <img src={u1} alt="tmember3" title="tmember2" className="tmember"/>
                        <ul className="branchinfo">
                            <li>Placeholder Title</li>
                            <li>Placeholder Member</li> 
                            <li>Placeholder Contact Info</li>  
                        </ul>
                    </div>
                </div>
            </div> {/**closing tag Cont element tag */}
            <Footer />
        </div>
        
    );
};
