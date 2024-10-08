import React from 'react'
import './Apptoach.css'
import TestimonialSlider from './Tesmonials'
import "../../ContactSection/ContactUs.css"
import { Link } from 'react-router-dom'

const Apptoach = () => {
    return (
        <>
            <section className="about__section about__page--section section--padding">
                <div className="container">
                    <div className="row pt-4"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={100}>
                        <div className="col-md-6 pt-5">
                            <h2>Our Approach</h2>
                            <p>
                                At <strong>WPM India</strong>, we <strong>simplify</strong> the complexities of property management, ensuring that every aspect of <strong>real estate operations</strong> is handled with <strong>care and expertise</strong>.
                                <br />
                                Our primary goal is to <strong>relieve</strong> developers and investors of the <strong>operational challenges</strong> they face, allowing them to focus on <strong>growth and profitability</strong>. We're not just consultants; we are <strong>trusted advisors</strong> who guide you through every phase of your property’s journey, ensuring <strong>long-term success</strong> and enhanced <strong>return on investment (ROI)</strong>.
                                <br />
                                What sets us apart is our <strong>commitment to ethical practices and integrity</strong>. Though we are new, our team is made up of <strong>enthusiastic professionals</strong> with a wealth of experience. We believe in delivering services that <strong>prioritize your success</strong> while maintaining the <strong>highest standards of honesty and transparency</strong>.
                                <br />With <strong> WPM India,  </strong>you can trust that your property is in the hands of a dedicated team that works relentlessly to achieve excellence and provide <strong> outstanding results </strong> for your investment.
                            </p>
                            <Link to="/about-us">   <button className="contact__form--btn solid__btn">
                                Know More
                            </button></Link>

                        </div>
                        <div className="col-md-6">
                            <div>
                                <img
                                    className='aprroaches'
                                    src="assets/download 1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <TestimonialSlider/> */}

        </>
    )
}

export default Apptoach