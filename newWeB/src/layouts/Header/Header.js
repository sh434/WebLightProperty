import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as UserIcons } from "../../icons/user.svg";
import { ReactComponent as WishlishtIcons } from "../../icons/wishlisht.svg";
import { ReactComponent as SearchIcons } from "../../icons/search.svg";
import LoginModal from '../../pages/AuthModals/LoginModal';
import './Header.css';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginOpen = () => setShowLogin(true);
    const handleLoginClose = () => setShowLogin(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
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
                    {/* Toggle button for mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu items */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
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
                                <Link to="/service" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right-side icons */}
                    <div className="d-flex header-icons">
                        <Link to="/search" className="nav-link">
                            <SearchIcons />
                        </Link>
                        <Link to="/wishlist" className="nav-link">
                            <WishlishtIcons />
                        </Link>
                        <Link to="#" className="nav-link" onClick={handleLoginOpen}>
                            <UserIcons />
                        </Link>
                    </div>

                    {/* Login Modal */}
                    <LoginModal show={showLogin} handleClose={handleLoginClose} />
                </div>
            </nav>
        </>
    );
};

export default Header;
