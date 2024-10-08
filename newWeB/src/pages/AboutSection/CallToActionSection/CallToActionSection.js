import React from 'react'
import './CallToActionSection.css'
import { Link } from 'react-router-dom'

const CallToActionSection = () => {
    return (
        <div>
            <section
                className="call__action--section section--padding"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={100}
                style={{ marginBottom: '54px' }}
            >
                <div className="container">
                    <div className="call__action--container mt-5">
                        <div className="call__action--inner ">
                            <div className='row '>
                                <div className='col-md-8'>
                                    <h2 className="call__action--title">Give Your Property Management Needs to Us Today!</h2>
                                    <p className='text-white'>WPM India can help you whether you own a portfolio or just one property. Contact us to
                                        learn more about our offerings and how we can support you in realizing your property
                                        management objectives.</p>
                                </div>
                                <div className='col-md-4 d-flex justify-content-end'>
                                    <div className="call__action--right d-flex align-items-center">
                                        <Link className="call__action--btn solid__btn" to="/contact-us">
                                            Click Here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CallToActionSection