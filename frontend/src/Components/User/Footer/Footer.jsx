import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className=" footer ">
            <footer className="site-footer  ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">
                                Our Panchayath is dedicated to fostering sustainable development, transparent
                                governance, and community well-being. We strive to improve infrastructure, education,
                                healthcare, and social welfare while preserving our rich cultural heritage. Through
                                citizen participation and digital initiatives, we ensure efficient service delivery and
                                responsive administration. Our vision is to create a self-reliant and progressive
                                community where every resident has access to essential amenities and opportunities for
                                growth. Join us in building a better future for our village, where tradition meets
                                modern development for a prosperous tomorrow.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li>
                                    <Link className="text-decoration-none">new Project</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">About Us</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">Contribute</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">map</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <Link className="text-decoration-none">About Us</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">Contribute</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none">map</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                Copyright &copy; 2024 All Rights Reserved by
                                <a> Ente Panchayath</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
