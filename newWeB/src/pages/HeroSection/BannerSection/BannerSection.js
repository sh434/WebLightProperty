import React from 'react'
import './Banner.css'
import "../Service/Service.css"

const amenitiesData = [
  {
    text: "19+ Years of Experience",
    iconClass: "bi bi-award",
  },
  {
    text: "10+ Cities",
    iconClass: "bi bi-geo-alt",
  },
  {
    text: "200+ Projects",
    iconClass: "bi bi-building",
  },
  {
    text: "5000+ Clients",
    iconClass: "bi bi-people",
  },
  {
    text: "100+ Awards",
    iconClass: "bi bi-trophy",
  },
  {
    text: "24/7 Support",
    iconClass: "bi bi-headset",
  }
];
const BannerSection = () => {
  return (
    <div className="hero__section hero__section--bg">
      <div className="container-fluid">
        <div className="hero__section--inner">
          <div className="hero__section--wrapper">
            <div className="hero__content text-center">
              <h1
                className="hero__content--title h1"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={100}
              >
                Your One and Only <span className="color-hover">  Trusted Property
                  Management </span> Partner
              </h1>
              <p
                className="hero__content--desc"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={50}
              >
                Do you have a property in <strong>(Location)</strong> and are looking for the best property management company?
                We&#39;re here for you. 
                Welcome to <strong>WPM India</strong>, your one-stop solution for comprehensive property management services.
                We specialize in providing tailored solutions to meet the unique needs of property owners and residents.
                Our team of experts is dedicated to solving all your property management issues quickly and efficiently.
              </p>

            </div>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              {amenitiesData.map((amenity, index) => (
                <div key={index} className='col-4 col-sm-4 col-md-3 col-lg-2'
                  data-aos="fade-up"
                  data-aos-duration={1200}
                  data-aos-delay={100}>
                  <div className="amenities__icone text-center">
                    <span>
                      <i className={amenity.iconClass}></i> {/* Icon using Bootstrap Icons */}
                    </span>
                    <p className='text-white text-center'>{amenity.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BannerSection