import React from 'react'
import DynamicBanner from '../../Components/DynamicBanner/Dynamic'
import LocationMap from './Map'
import OfficeAddress from './OfficeAddress'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <>
            <DynamicBanner
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Contact Us"
                subheading="Connect with us and bring your dreams to life !" />

            <section className="contact__section section--padding">
                <div className="container">
                    <div className="contact__inner">
                        <div className='row mb-30' style={{ marginTop: "33px" }}>
                            <div className='col-lg-7 col-md-7 contacts'>
                                <div
                                    className="contact__form"
                                    data-aos="fade-up"
                                    data-aos-duration={1200}
                                    data-aos-delay={20}
                                >
                                    <h2 className="contact__form--title">Get in Touch with Us</h2>
                                </div>
                                <div className="contact__form--header pb-5"
                                    data-aos="fade-up"
                                    data-aos-duration={1200}
                                    data-aos-delay={20}
                                >
                                    <form>
                                        <div className="row">
                                            {[
                                                { placeholder: "Full Name", type: "text", icon: <i className="bi bi-person-fill"></i> },
                                                { placeholder: "Enter Email Address*", type: "email", icon: <i className="bi bi-envelope-fill"></i> },
                                                { placeholder: "Company Name", type: "text", icon: <i className="bi bi-building"></i> },
                                                { placeholder: "Business Phone Number", type: "text", icon: <i className="bi bi-telephone-fill"></i> },
                                                { placeholder: "How Can I Help You", type: "text", icon: <i className="bi bi-question-circle-fill"></i> },
                                                { placeholder: "Management Level", type: "text", icon: <i className="bi bi-briefcase-fill"></i> },
                                                { placeholder: "City", type: "text", icon: <i className="bi bi-geo-alt-fill"></i> },
                                                { placeholder: "Country", type: "text", icon: <i className="bi bi-globe"></i> }
                                            ].map((input, idx) => (
                                                <div className="col-lg-6 col-md-6 mb-3" key={idx}>
                                                    <div className="contact__form--input position-relative">
                                                        <input className="contact__form--input__field" placeholder={input.placeholder} type={input.type} />
                                                        <span className="contact__form--input__icon" style={{ fontSize: "15px" }}>{input.icon}</span>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="col-12 mb-3">
                                                <div className="contact__form--textarea position-relative">
                                                    <textarea className="contact__form--textarea__field" placeholder="Enter Your Message here" />
                                                    <span className="contact__form--textarea__icon">
                                                        <i className="bi bi-chat"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="contact__form--btn solid__btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <LocationMap />
                            </div>

                        </div>

                        <div className="contact__wrapper  d-flex flex-row" style={{ marginBottom: "65px" }}>
                            <OfficeAddress />
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default ContactUs