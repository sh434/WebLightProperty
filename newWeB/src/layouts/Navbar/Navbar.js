import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"; 

const Navbar = () => {
    return (
        <div className="ltn__header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 d-flex justify-content-center">
                        <div className="ltn__top-bar-menu">
                            <ul>
                                <li className='text-white'>
                                    <Link to="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you" >
                                        <i className="bi bi-envelope icon-white" /> info@wpmindia.com
                                    </Link>
                                </li>
                                <li className='text-white'>
                                    <Link to="/locations" className="text-white">
                                        <i className="bi bi-geo-alt icon-white" />
                                        C-70A, 7th Floor, Supermart-1, DLF phase 4, Gurgaon
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-bar-right text-end">
                            <div className="ltn__top-bar-menu">
                                <ul>
                                    <li>
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li>
                                                    <Link to="https://www.facebook.com" title="Facebook">
                                                        <i className="bi bi-facebook icon-white" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.twitter.com" title="Twitter">
                                                        <i className="bi bi-linkedin icon-white" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.instagram.com" title="Instagram">
                                                        <i className="bi bi-instagram icon-white" />
                                                    </Link>
                                                </li>
                                            
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
