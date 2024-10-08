import React from 'react';
import { Link } from 'react-router-dom';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="ltn__footer-area">
                <div className="footer-top-area section-bg-2 plr--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-about-widget">
                                    <div className="footer-logo">
                                        <div className="site-logo">
                                            <img src="./../assets/wpm-1 1.jpg" alt="Logo" style={{ borderRadius: "7px" }} />
                                        </div>
                                    </div>
                                    <p className='text-white'>
                                    Diverse portfolio of services that provide complete turnkey solutions to the clients.
                                    </p>
                                    <form className="form-subscribe" action="#">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control input-lg"
                                                placeholder="Your email address"
                                                style={{ fontSize: "16px" }}
                                            />
                                            <span className="input-group-btn">
                                                <button className="btn btn-success btn-lg" type="submit">
                                                    Sends
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Company</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about-us">About</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/property-card">All Products</Link></li>
                                            <li><Link to="/contact-us">Contact us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Services</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/order-tracking">Terms & Conditions</Link></li>
                                            <li><Link to="/wishlist">Testimonials</Link></li>
                                            <li><Link to="/login">Safety Guide</Link></li>
                                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Featured Properties</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/sell">Sell</Link></li>
                                            <li><Link to="/buy">Buy</Link></li>
                                            <li><Link to="/rent">Rent</Link></li>
                                            <li><Link to="/lease">Lease</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                                <div className="footer-widget footer-newsletter-widget">
                                    <h4 className="footer-title">Contact Us</h4>

                                    <div className="footer-address">
                                        <ul>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="bi bi-geo-alt" style={{ fontSize: '14px' }} />
                                                </div>
                                                <div className="footer-address-info">
                                                    <p className='text-white'>
                                                        C-70A, 7th Floor, Supermart-1</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="bi bi-telephone" style={{ fontSize: '14px' }} />
                                                </div>
                                                <div className="footer-address-info">
                                                    <p className='text-white'>
                                                        <Link to="tel:+0123-456789">
                                                            9311254752
                                                        </Link>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="bi bi-envelope" style={{ fontSize: '14px' }} />
                                                </div>
                                                <div className="footer-address-info">
                                                    <p className='text-white'>
                                                        <Link to="mailto:example@example.com">
                                                            info@wpmindia.com
                                                        </Link>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ltns__social-media mt-20 text-center">
                                        <ul>
                                            <li>
                                                <Link to="#" title="Facebook">
                                                    <i className="bi bi-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" title="Twitter">
                                                    <i className="bi bi-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" title="Linkedin">
                                                    <i className="bi bi-linkedin" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" title="Youtube">
                                                    <i className="bi bi-youtube" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterCopyright />
                </div>
            </footer>
        </>
    );
}

export default Footer;
