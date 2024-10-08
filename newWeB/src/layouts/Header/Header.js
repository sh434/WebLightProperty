import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as UserIcons } from "../../icons/user.svg"
import { ReactComponent as WishlishtIcons } from "../../icons/wishlisht.svg"
import { ReactComponent as SearchIcons } from "../../icons/search.svg"
import LoginModal from '../../pages/AuthModals/LoginModal';
import './Header.css'


const Header = () => {

    const [showLogin, setShowLogin] = useState(false);
    const handleLoginOpen = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <nav
                className="navbar navbar-expand-lg ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <div className="header__logo">
                        <Link to="/">
                            <img
                                className="footer__logo--img"
                                src="./../assets/wpm-1 1.jpg"
                                alt="logo-img"
                            />
                        </Link>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu"></span> 
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="ftco-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/advisory-management" className="nav-link">Advisory Management</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/technical-service" className="nav-link">Technical Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/property-card" className="nav-link">Properties</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/service"
                                >
                                    Services
                                </Link>

                            </li>
                        
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex">
                        <li className="nav-item">
                            <SearchIcons />
                        </li>
                        <li className="nav-item">
                            <Link to="/wishlist.html" className="nav-link">
                                <WishlishtIcons />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" onClick={handleLoginOpen}>
                                <UserIcons />
                            </Link>
                        </li>

                        <LoginModal show={showLogin} handleClose={handleLoginClose} />
                    </div>

                </div>
            </nav>
            
        </>
    );
};

export default Header;
