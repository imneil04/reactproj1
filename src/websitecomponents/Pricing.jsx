import React from "react";
import "../webstyling/Navbar.css";
import "../webstyling/Pricing.css";
import "../webstyling/Common.css"; //for background unity
import p1 from "../images/kidsinsand-unsplash.jpg";
import p2 from "../images/toys-unsplash.jpg";
import Footer from "./Footer";

export default function Pricing ()
{
    return (
        <div className="mainCont">
            <div className="Cont">
                
                {/**Title description */}
                <div className="pricingTitleHeader">
                    <h2>More Information About Rates</h2>
                    <p>This is just a placeholder. More information about this section will be placed later on.
                        For now a placeholder description will be placed on this section here. Stay tuned.
                    </p>
                </div>

                <div className="pricingOptionCont">

                    <div className="pricingOpt">
                        <h2>RATE 1</h2>
                        <img src={p1} alt="image1" title="full-time rate info" className="pricingpic" />
                        <p className="pricedesc">This is paragraph is just a placeholder or dummy text paragraph. A more relevant information will be placed in replacement 
                                                of this dummy text paragraph in the future. </p>
                    </div>

                    <div className="pricingOpt">
                        <h2>SUBSIDY INFORMATION</h2>
                        <p className="pricedesc">This is paragraph is just a placeholder or dummy text paragraph. A more relevant information will be placed in replacement 
                                                of this dummy text paragraph in the future. </p>
                    </div>

                    <div className="pricingOpt">
                        <h2>RATE 3</h2>
                        <img src={p2} alt="image2" title="part-time rate info" className="pricingpic" />
                        <p className="pricedesc">This is paragraph is just a placeholder or dummy text paragraph. A more relevant information will be placed in replacement 
                                                of this dummy text paragraph in the future. </p>
                    </div>
                </div>
            </div> {/**closing tag Cont element */}
            <Footer />
        </div>
    );
};
