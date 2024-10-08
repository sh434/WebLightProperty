import React, { useEffect } from 'react';
import { ReactComponent as VideoIcon } from "../../../icons/video.svg";
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import './Approachs.css';

const amenitiesData = [
    {
        amount: "170+",
        description: "Owned from Properties transactions",
        iconClass: "bi bi-house"
    },
    {
        amount: "20k+",
        description: "Properties for Buy & sell Successfully",
        iconClass: "bi bi-shop"
    },
    {
        amount: "400",
        description: "Daily completed transactions",
        iconClass: "bi bi-calendar-check"
    },
    {
        amount: "200+",
        description: "Regular Clients",
        iconClass: "bi bi-person-check"
    }
];

const Approachs = () => {
    useEffect(() => {
        GLightbox({
            selector: '.glightbox'
        });
    }, []);

    return (
        <>
            <section>
                <div className="container">
                    <div className='row' style={{ marginBottom: "20px" }}>
                        <div className='col-md-6'>
                            <div
                                data-aos="fade-up"
                                data-aos-duration={1200}
                                data-aos-delay={150}
                            >
                                <h2 className="section__heading--title">
                                    Our Approach
                                </h2>
                                <p className="section__heading--desc">
                                    We champion <strong>simplicity</strong> while tackling the complex challenges of property operations with an <strong>uncomplicated</strong> approach.
                                </p>
                                <p className="section__heading--desc">
                                    Our mission is to <strong>streamline</strong> processes for developers and investors, removing operational <strong>obstacles</strong>. We are not merely consultants; we are <strong>dedicated advisors</strong> committed to ensuring your <strong>success</strong>. Our focus is on delivering substantial <strong>profitability</strong> and <strong>exceptional returns on investment</strong>. Although we are new, our team comprises <strong>passionate professionals</strong> who prioritize <strong>ethics</strong> and <strong>integrity</strong> in every aspect of our service.
                                </p>
                                <p className="section__heading--desc">
                                    We go beyond traditional consulting. We offer <strong>strategic guidance</strong> to developers and investors, driving success through <strong>innovative solutions</strong>. Our unwavering commitment to <strong>excellence</strong> and <strong>transparency</strong> defines our work ethic, ensuring that every project achieves its full potential with <strong>outstanding results</strong>.
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="about__thumbnail position-relative" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
                                <div className="about__thumbnail--list one position-relative">
                                    <img src="/assets/day-view-royal-palace 1.png" alt="Day view of the royal palace" className='aboutOne' />
                                </div>
                                <div className="about__thumbnail--list two">
                                    <img src="/assets/analog-landscape-city-with-buildings 1.jpg" alt="Analog landscape of a city with buildings" className='aboutTwo' />
                                    <div className="bideo__play" style={{ marginLeft: "249px" }}>
                                        <a className="bideo__play--icon glightbox" href="https://www.pexels.com/video/drone-flying-over-a-residential-neighborho-4770380/"  data-gallery="video">
                                            <VideoIcon />
                                            <span className="visually-hidden">Video Play</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "rgba(251, 244, 244, 1)", marginTop: "38px" }}>
                <div className='container'>
                    <div className='row' style={{ marginTop: "20px" }}>
                        <div className='col-md-4'>
                            <img src="/assets/_https___freepicdownloader-removebg-preview_1-removebg-preview.png" alt="" />
                        </div>
                        <div className='col-md-8'>
                            <h2 className="section__heading--title">Our Aim</h2>
                            <p>We aim to maximize your investment while ensuring...</p>
                            <div className='row pt-2'>
                                {amenitiesData.map((item, index) => (
                                    <div key={index} className='col-md-3'>
                                        <div className="amenities__icone text-center">
                                            <span>
                                                <i className={item.iconClass}></i>
                                            </span>
                                        </div>
                                        <h2 className='text-dark text-center'>{item.amount}</h2>
                                        <p className='text-dark text-center'>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Approachs;
