import React from 'react'
import Dynamic from '../../Components/DynamicBanner/Dynamic'
import './TechnicalService.css'

const features = [
    {
        id: 1,
        title: "Infrastructure Repairs and Maintenance",
        description: "Expert repairs and maintenance for all infrastructure needs.",
        icon: "bi-tools", // Change to appropriate icon
    },
    {
        id: 2,
        title: "Fabric Maintenance",
        description: "Specialized services for fabric care and maintenance. Our team ensures your fabrics are cleaned .",
        icon: "bi-basket", // Change to appropriate icon
    },
    {
        id: 3,
        title: "Lift and Escalator Maintenance",
        description: "Professional maintenance for lifts and escalators for lifts .",
        icon: "bi-shield-lock", // Change to appropriate icon
    },
    {
        id: 4,
        title: "Security System Repairs, Maintenance",
        description: "Comprehensive services for security systems.",
        icon: "bi-lock", // Change to appropriate icon
    },
    {
        id: 5,
        title: "Air-Conditioning and HVAC Maintenance",
        description: "Comprehensive maintenance services for air-conditioning and HVAC systems to ensure optimal .",
        icon: "bi-tools", // Snowflake icon for HVAC
    },
    {
        id: 6,
        title: "Energy and Utilities Management",
        description: "Strategic management of energy consumption and utilities to reduce costs and improve .",
        icon: "bi-lightning", // Lightning icon for energy
    },
    {
        id: 7,
        title: "Asset Management Services",
        description: "Professional asset management solutions to maximize asset performance and ensure effective .",
        icon: "bi-pie-chart", // Pie chart icon for asset management
    },
    {
        id: 8,
        title: "Handyman Services",
        description: "Reliable handyman services for all your repair and maintenance needs, ensuring your property remains in top condition.",
        icon: "bi-tools", // Tools icon for handyman services
    },

];

const TechnicalService = () => {
    return (

        <>
            <Dynamic
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Technical Services"
                subheading="Learn more about our company and values." />

            <div className="ltn__about-us-area"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={20}>
                <div className="container">
                    <div className="row pt-5 pb-5" >
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="about-us-img-wrap ltn__img-shape-left  about-img-left ">
                                <img src="assets/analog-landscape-city-with-buildings 1.jpg" alt="about-us-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4">
                            <div className="about-us-info-wrap">
                                <div className="section-title-area ltn__section-title-2--- mb-20">

                                    <h2 className="section-title">
                                        Technical Services
                                    </h2>
                                    <p>
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.

                                    </p>
                                    <p>
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                        Take your business beyond its existing limits.
                                        Implement tools, processes, and strategies that
                                        improve the value and performance of your real
                                        estate.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pb-3">
                        <h2 className="section-title text-center">Our Core Services</h2>
                    </div>
                </div>
                <div className="row justify-content-center"
                    data-aos="fade-up"
                    data-aos-duration={1200}
                    data-aos-delay={20}>
                    {features.map((feature) => (
                        <div className="col-lg-3 col-sm-6 col-12" key={feature.id}>
                            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1">
                                <div className="ltn__feature-icon">
                                    <span>
                                        <i className={`bi ${feature.icon} icon-red`}></i>
                                    </span>
                                </div>
                                <div className="ltn__feature-info">
                                    <h3>
                                        {feature.title}
                                    </h3>
                                    <p className='pt-2'>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechnicalService