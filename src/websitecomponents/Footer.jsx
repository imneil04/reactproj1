import React from "react";
import "../webstyling/Footer.css";
import { Link } from "react-router-dom";

function Footer ()
{
    return (
        <div className="footer">
            <div className="innerFooterCont">
                <div className="row">

                    <div className="footer-col">
                        <h4>MAIN INFORMATION</h4>
                        <ul className="ulistFooter">
                            <li><Link to="/" className="nav-link">Testimonials</Link></li>
                            <li><Link to="/" className="nav-link">Book a Tour</Link></li>
                            <li><Link to="/" className="nav-link">Communication</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>GENERAL INFORMATION</h4>
                        <ul className="ulistFooter">
                            <li><Link to="/" className="nav-link">Subsidy information</Link></li>
                            <li><Link to="/" className="nav-link">Full-time and Part time information</Link></li>
                            <li><Link to="/" className="nav-link">Drop-Off Rates</Link></li>
                            <li><Link to="/" className="nav-link">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>TEAM QUESTIONS</h4>
                        <ul className="ulistFooter">
                            <li><Link to="/" className="nav-link">FAQ's</Link></li>
                            <li><Link to="/" className="nav-link">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">

                        <h4>FOLLOW US ON:</h4>
                            <div class="social-links">
                                <Link to="/" className="nav-link"><i class="fa-brands fa-facebook"></i></Link>
                                <Link to="/" className="nav-link"><i class="fa-brands fa-x-twitter"></i></Link>
                                <Link to="/" className="nav-link"><i class="fa-brands fa-instagram"></i></Link>
                                <Link to="/" className="nav-link"><i class="fa-brands fa-youtube"></i></Link>
                            </div>

                            <div className="contactno">
                                <p className="cupar">Contact Numbers: 
                                    <br />Placeholder #: 111-111-1111
                                    <br />Placeholder #: 222-222-2222
                                    <br />Placeholder #: 123-123-3312
                                </p> 
                            </div>
                    </div>
                </div> {/**closing tag for row tag */}
            </div> {/**closing tag innerfootercont tag */}
        </div> 
    );
};

export default Footer;