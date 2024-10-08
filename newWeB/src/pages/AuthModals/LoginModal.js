// LoginModal.js
import React from 'react';
import { Modal } from 'react-bootstrap';

const LoginModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>   <img
             
                    src="./../assets/wpm-1 1.jpg"
                    alt="logo-img"
                /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="widget__form--input mb-20">
                        <input
                            className="widget__form--input__field"
                            placeholder="Enter Email"
                            type="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)} // Set email state
                        // required
                        />
                    </div>
                    <div className="widget__form--input mb-20">
                        <input
                            className="widget__form--input__field"
                            placeholder="Enter Password"
                            type="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)} // Set password state
                        // required
                        />
                    </div>
                    <button className="widget__form--btn solid__btn" type="submit">
                        Send Message
                    </button>
                </form>
            </Modal.Body>

        </Modal>
    );
};

export default LoginModal;
