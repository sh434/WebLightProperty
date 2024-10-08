import React from 'react'
// import EMICalculator from './EmiCalucator'
import Form from '../../Components/Form/Form'
import HeroSlider from './HeroSlider'
import Faq from './Faq'
import LocationMap from '../ContactSection/Map'
import { ReactComponent as CircleIcons } from '../../icons/circle.svg'

const PropertiesDetail = () => {
  return (
    <>
      <section className="listing__details--section section--padding">
      
          <div className="row px-5">
            <div className="col-lg-8">
              <HeroSlider />
              <div className="listing__details--wrapper">
                <div className="listing__details--content">
                  <div className="listing__details--content__top mb-25 d-flex align-items-center justify-content-between">
                    <div className="listing__details--meta">
                      <ul className="listing__details--meta__wrapper d-flex align-items-center">
                        <li>
                          <span className="listing__details--badge">Featured</span>
                        </li>
                        <li>
                          <span className="listing__details--badge two">
                            For sale
                          </span>
                        </li>
                        <li>
                          <span className="listing__details--meta__icon">
                            <svg
                              width={13}
                              height={15}
                              viewBox="0 0 13 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13.0469H3.25V10.7969H1V13.0469ZM3.75 13.0469H6.25V10.7969H3.75V13.0469ZM1 10.2969H3.25V7.79687H1V10.2969ZM3.75 10.2969H6.25V7.79687H3.75V10.2969ZM1 7.29687H3.25V5.04688H1V7.29687ZM6.75 13.0469H9.25V10.7969H6.75V13.0469ZM3.75 7.29687H6.25V5.04688H3.75V7.29687ZM9.75 13.0469H12V10.7969H9.75V13.0469ZM6.75 10.2969H9.25V7.79687H6.75V10.2969ZM4 3.54687V1.29687C4 1.22917 3.97396 1.17187 3.92188 1.125C3.875 1.07292 3.81771 1.04687 3.75 1.04687H3.25C3.18229 1.04687 3.1224 1.07292 3.07031 1.125C3.02344 1.17187 3 1.22917 3 1.29687V3.54687C3 3.61458 3.02344 3.67448 3.07031 3.72656C3.1224 3.77344 3.18229 3.79687 3.25 3.79687H3.75C3.81771 3.79687 3.875 3.77344 3.92188 3.72656C3.97396 3.67448 4 3.61458 4 3.54687ZM9.75 10.2969H12V7.79687H9.75V10.2969ZM6.75 7.29687H9.25V5.04688H6.75V7.29687ZM9.75 7.29687H12V5.04688H9.75V7.29687ZM10 3.54687V1.29687C10 1.22917 9.97396 1.17187 9.92188 1.125C9.875 1.07292 9.81771 1.04687 9.75 1.04687H9.25C9.18229 1.04687 9.1224 1.07292 9.07031 1.125C9.02344 1.17187 9 1.22917 9 1.29687V3.54687C9 3.61458 9.02344 3.67448 9.07031 3.72656C9.1224 3.77344 9.18229 3.79687 9.25 3.79687H9.75C9.81771 3.79687 9.875 3.77344 9.92188 3.72656C9.97396 3.67448 10 3.61458 10 3.54687ZM13 3.04687V13.0469C13 13.3177 12.901 13.5521 12.7031 13.75C12.5052 13.9479 12.2708 14.0469 12 14.0469H1C0.729167 14.0469 0.494792 13.9479 0.296875 13.75C0.0989583 13.5521 0 13.3177 0 13.0469V3.04687C0 2.77604 0.0989583 2.54167 0.296875 2.34375C0.494792 2.14583 0.729167 2.04687 1 2.04687H2V1.29687C2 0.953124 2.1224 0.658853 2.36719 0.414062C2.61198 0.16927 2.90625 0.046874 3.25 0.046874H3.75C4.09375 0.046874 4.38802 0.16927 4.63281 0.414062C4.8776 0.658853 5 0.953124 5 1.29687V2.04687H8V1.29687C8 0.953124 8.1224 0.658853 8.36719 0.414062C8.61198 0.16927 8.90625 0.046874 9.25 0.046874H9.75C10.0938 0.046874 10.388 0.16927 10.6328 0.414062C10.8776 0.658853 11 0.953124 11 1.29687V2.04687H12C12.2708 2.04687 12.5052 2.14583 12.7031 2.34375C12.901 2.54167 13 2.77604 13 3.04687Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span className="listing__details--meta__text">
                            2 years ago
                          </span>
                        </li>
                        <li>
                          <span className="listing__details--meta__icon">
                            <svg
                              width={17}
                              height={14}
                              viewBox="0 0 17 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.37483 2.17857C8.58316 1.86905 7.73197 1.71428 6.82126 1.71428C5.91054 1.71428 5.05935 1.86905 4.26768 2.17857C3.47602 2.48809 2.84507 2.90774 2.37483 3.4375C1.91054 3.96726 1.6784 4.53571 1.6784 5.14286C1.6784 5.63095 1.83614 6.10119 2.15161 6.55357C2.46709 7.00595 2.91054 7.39881 3.48197 7.73214L4.34804 8.23214L4.03554 8.98214C4.23792 8.8631 4.42245 8.74702 4.58911 8.63393L4.98197 8.35714L5.45518 8.44643C5.91947 8.52976 6.37483 8.57143 6.82126 8.57143C7.73197 8.57143 8.58316 8.41667 9.37483 8.10714C10.1665 7.79762 10.7945 7.37798 11.2588 6.84821C11.729 6.31845 11.9641 5.75 11.9641 5.14286C11.9641 4.53571 11.729 3.96726 11.2588 3.4375C10.7945 2.90774 10.1665 2.48809 9.37483 2.17857ZM3.66054 1.1875C4.63078 0.776785 5.68435 0.571428 6.82126 0.571428C7.95816 0.571428 9.00876 0.776785 9.97304 1.1875C10.9433 1.59226 11.7082 2.14583 12.2677 2.84821C12.8272 3.55059 13.107 4.31548 13.107 5.14286C13.107 5.97024 12.8272 6.73512 12.2677 7.4375C11.7082 8.13988 10.9433 8.69643 9.97304 9.10714C9.00876 9.5119 7.95816 9.71429 6.82126 9.71429C6.30935 9.71429 5.78554 9.66667 5.24983 9.57143C4.51173 10.0952 3.68435 10.4762 2.76768 10.7143C2.5534 10.7679 2.29745 10.8155 1.99983 10.8571H1.97304C1.90757 10.8571 1.84507 10.8333 1.78554 10.7857C1.73197 10.7381 1.69923 10.6756 1.68733 10.5982C1.68137 10.5804 1.6784 10.5625 1.6784 10.5446C1.6784 10.5208 1.6784 10.5 1.6784 10.4821C1.68435 10.4643 1.6903 10.4464 1.69626 10.4286C1.70816 10.4107 1.71709 10.3958 1.72304 10.3839C1.72899 10.372 1.73792 10.3571 1.74983 10.3393C1.76768 10.3155 1.77959 10.3006 1.78554 10.2946C1.79745 10.2827 1.81233 10.2679 1.83018 10.25C1.84804 10.2262 1.85995 10.2113 1.8659 10.2054C1.89566 10.1696 1.96411 10.0952 2.07126 9.98214C2.1784 9.86905 2.25578 9.78274 2.3034 9.72321C2.35102 9.65774 2.41649 9.57143 2.49983 9.46429C2.58911 9.35119 2.66352 9.23512 2.72304 9.11607C2.78852 8.99702 2.85102 8.86607 2.91054 8.72321C2.17245 8.29464 1.59209 7.76786 1.16947 7.14286C0.746851 6.51786 0.535542 5.85119 0.535542 5.14286C0.535542 4.31548 0.815303 3.55059 1.37483 2.84821C1.93435 2.14583 2.69626 1.59226 3.66054 1.1875ZM14.1605 11.0089C14.2201 11.1518 14.2796 11.2827 14.3391 11.4018C14.4046 11.5208 14.479 11.6369 14.5623 11.75C14.6516 11.8571 14.7201 11.9405 14.7677 12C14.8153 12.0655 14.8927 12.1548 14.9998 12.2679C15.107 12.381 15.1754 12.4554 15.2052 12.4911C15.2111 12.497 15.223 12.5089 15.2409 12.5268C15.2588 12.5506 15.2707 12.5655 15.2766 12.5714C15.2885 12.5833 15.3004 12.5982 15.3123 12.6161C15.3302 12.6399 15.3421 12.6577 15.348 12.6696C15.354 12.6815 15.3599 12.6964 15.3659 12.7143C15.3778 12.7321 15.3838 12.75 15.3838 12.7679C15.3897 12.7857 15.3927 12.8036 15.3927 12.8214C15.3927 12.8452 15.3897 12.8661 15.3838 12.8839C15.3659 12.9673 15.3272 13.0327 15.2677 13.0804C15.2082 13.128 15.1427 13.1488 15.0713 13.1429C14.7736 13.1012 14.5177 13.0536 14.3034 13C13.3867 12.7619 12.5594 12.381 11.8213 11.8571C11.2855 11.9524 10.7617 12 10.2498 12C8.63673 12 7.23197 11.6071 6.03554 10.8214C6.38078 10.8452 6.64268 10.8571 6.82126 10.8571C7.77959 10.8571 8.69923 10.7232 9.58018 10.4554C10.4611 10.1875 11.2469 9.80357 11.9373 9.30357C12.6814 8.75595 13.2528 8.125 13.6516 7.41071C14.0504 6.69643 14.2498 5.94048 14.2498 5.14286C14.2498 4.68452 14.1814 4.23214 14.0445 3.78571C14.8123 4.20833 15.4195 4.73809 15.8659 5.375C16.3123 6.0119 16.5355 6.69643 16.5355 7.42857C16.5355 8.14286 16.3242 8.8125 15.9016 9.4375C15.479 10.0565 14.8986 10.5804 14.1605 11.0089Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span className="listing__details--meta__text">
                            7214 views
                          </span>
                        </li>
                      </ul>
                    </div>

                  </div>
                  {/* <div className="listing__details--content__step">
                    <h2 className="listing__details--title mb-25">
                      House In Vasant Kunj, New Delhi
                    </h2>
                    <div className="listing__details--price__id d-flex align-items-center">
                      <div className="listing__details--price d-flex">
                        <span className="listing__details--price__new">
                          <i className="bi bi-currency-rupee me-1 icon-blue"></i>13,00,000
                        </span>
                        <span className="listing__details--price__old">
                          <i className="bi bi-currency-rupee me-1 icon-blue"></i>16,00,000
                        </span>
                      </div>
                      <span className="listing__details--property__id">
                        Property ID: HZ24
                      </span>
                    </div>
                    <p className="listing__details--location__text d-flex align-items-center">
                      <i className="bi bi-geo-alt-fill me-1 icon-blue" ></i>
                      1421 MG Road, Gurugram, Haryana
                    </p>
                  </div> */}

                </div>

                <div className="listing__details--main__content">
                  <div className="listing__details--content__step mb-80">
                    <h3 className="listing__details--content__title">Description:</h3>
                    <p className="listing__details--content__desc">
                      Description It is a long established fact that a reader will be
                      distrac by any websites look for ways prevent AdBlock from
                      blocking annoying ads. As a result, we've focused on improving
                      our funct so that we can overcome these anti-ad blocking
                      attempts. Of course, you can help us continue to improve our ad
                      blocking ability by reporting any time you run into a website
                      that won't allow you to block the readable content of a page
                      when looking at its layout. It is a long established fact
                    </p>
                  </div>
                  <div className="listing__details--content__step properties__info mb-80">
                    <h3 className="listing__details--content__title mb-40">
                      Details:
                    </h3>
                    <ul className="properties__details--info__wrapper d-flex">
                      <li className="properties__details--info__list d-flex justify-content-between">
                        <span className="properties__details--info__title">
                          Price:
                        </span>
                        <span className="properties__details--info__subtitle">
                          $268,000
                        </span>
                      </li>
                      <li className="properties__details--info__list d-flex justify-content-between">
                        <span className="properties__details--info__title">
                          Property ID:
                        </span>
                        <span className="properties__details--info__subtitle">
                          Th26157096
                        </span>
                      </li>
                      <li className="properties__details--info__list d-flex justify-content-between">
                        <span className="properties__details--info__title">
                          Area Size:
                        </span>
                        <span className="properties__details--info__subtitle">
                          400 SqFt
                        </span>
                      </li>
                      <li className="properties__details--info__list d-flex justify-content-between">
                        <span className="properties__details--info__title">
                          Land Area Size:
                        </span>
                        <span className="properties__details--info__subtitle">
                          1300 Sq Ft
                        </span>
                      </li>
                      <li className="properties__details--info__list d-flex justify-content-between">
                        <span className="properties__details--info__title">
                          Rooms:
                        </span>
                        <span className="properties__details--info__subtitle">
                          03
                        </span>
                      </li>
                      <li className="properties__details--info__list d-flex justify-content-between">
                        <span className="properties__details--info__title">
                          Washroom:
                        </span>
                        <span className="properties__details--info__subtitle">
                          03
                        </span>
                      </li>
                      <li className="properties__details--info__list d-flex justify-content-between">
                        <span className="properties__details--info__title">
                          Garage:
                        </span>
                        <span className="properties__details--info__subtitle">
                          04
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="listing__details--content__step properties__amenities mb-80">
                    <h3 className="listing__details--content__title mb-40">
                      Properties Amenities
                    </h3>
                    <div className="properties__amenities--wrapper d-flex">
                      <ul className="properties__amenities--step">
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Air Conditioning
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Microwave
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Central Heating
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">Washer</span>
                        </li>
                      </ul>
                      <ul className="properties__amenities--step">
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">Laundry</span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Outdoor Shower
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Swimming Pool
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">Wifi</span>
                        </li>
                      </ul>
                      <ul className="properties__amenities--step">
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Window Covering
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          < CircleIcons />
                          <span className="properties__amenities--text">
                            Refrigerator
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Alarm System
                          </span>
                        </li>
                        <li className="properties__amenities--list d-flex align-items-center">
                          <span className="properties__amenities--mark__icon">
                            < CircleIcons />
                          </span>
                          <span className="properties__amenities--text">
                            Window Coverings
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listing__details--content__step mb-80">
                    <div className="properties__floor--plans d-flex">
                      <div className="properties__floor--plans__content">
                        <h3 className="listing__details--content__title mb-40">
                          Floor Plans
                        </h3>
                        <ul className="properties__floor--plans__info">
                          <li>
                            <i className="bi bi-house me-2 icon-blue"></i>
                            <span>Total Size: 900 </span>
                          </li>
                          <li>
                            <i className="bi bi-door-open me-2 icon-blue"></i>
                            <span>Bedrooms: 2 </span>
                          </li>
                          <li>
                            <i className="bi bi-droplet me-2 icon-blue"></i>
                            <span>Bathrooms: 2 </span>
                          </li>
                          <li>
                            <i className="bi bi-currency-rupee me-2 icon-blue"></i>
                            <span>Price: $800,000</span>
                          </li>
                        </ul>
                      </div>
                      <div className="properties__floor--plans__gallery">
                        <ul className="nav floor__plans--tab__btn">
                          <li className="nav-item floor__plans--tab__btn--list">
                            <button
                              className="floor__plans--tab__btn--field active"
                              data-bs-toggle="tab"
                              data-bs-target="#floor1"
                              type="button"
                            >
                              First Floor
                            </button>
                          </li>
                          <li className="nav-item floor__plans--tab__btn--list">
                            <button
                              className="floor__plans--tab__btn--field "
                              data-bs-toggle="tab"
                              data-bs-target="#floor2"
                              type="button"
                            >
                              2nd Floor
                            </button>
                          </li>
                          <li className="nav-item floor__plans--tab__btn--list">
                            <button
                              className="floor__plans--tab__btn--field "
                              data-bs-toggle="tab"
                              data-bs-target="#floor3"
                              type="button"
                            >
                              3nd Floor
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content pt-3">
                          <div className="tab-pane fade show active" id="floor1">
                            <div className="properties__floor--plans__display">
                              <img
                                src="/assets/property/featured-list2.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="tab-pane fade " id="floor2">
                            <div className="properties__floor--plans__display">
                              <img
                                src="assets/img/other/floor-display.png"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="tab-pane fade " id="floor3">
                            <div className="properties__floor--plans__display">
                              <img
                                src="assets/img/other/floor-display.png"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing__details--content__step mb-80">
                    <div className="listing__details--location__header d-flex justify-content-between mb-40">
                      <div className="listing__details--location__header--left">
                        <h3 className="listing__details--content__title m-0">
                          Address
                        </h3>
                      </div>
                      <div className="location__google--maps">
                        <details>
                          <summary>Open on Google Maps</summary>
                          <LocationMap />
                        </details>
                      </div>
                    </div>
                    <div className="location__google--maps__info d-flex">
                      <ul className="location__google--maps__info--step">
                        <li className="location__google--maps__info--list d-flex">
                          <span className="location__google--maps__info--title">
                            Address:
                          </span>
                          <span className="location__google--maps__info--subtitle">
                            1024 MG Road, Gurugram
                          </span>
                        </li>
                        <li className="location__google--maps__info--list d-flex">
                          <span className="location__google--maps__info--title">
                            Country:{" "}
                          </span>
                          <span className="location__google--maps__info--subtitle">
                            India
                          </span>
                        </li>
                        <li className="location__google--maps__info--list d-flex">
                          <span className="location__google--maps__info--title">
                            Province/State:{" "}
                          </span>
                          <span className="location__google--maps__info--subtitle">
                            Haryana
                          </span>
                        </li>
                      </ul>
                      <ul className="location__google--maps__info--step">
                        <li className="location__google--maps__info--list d-flex">
                          <span className="location__google--maps__info--title">
                            City/Town:
                          </span>
                          <span className="location__google--maps__info--subtitle">
                            Gurugram
                          </span>
                        </li>
                        <li className="location__google--maps__info--list d-flex">
                          <span className="location__google--maps__info--title">
                            Neighborhood:
                          </span>
                          <span className="location__google--maps__info--subtitle">
                            DLF Phase 3
                          </span>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <div className="listing__details--content__step mb-80">
                    <h3 className="listing__details--content__title mb-40">Video</h3>
                    <div className="listing__details--video__thumbnail position-relative">
                      <img
                        src="/assets/property/project2.jpg"
                        alt="img"
                      />
                      <div className="bideo__play">
                        <a
                          className="bideo__play--icon glightbox"
                          href="https://vimeo.com/115041822"
                          data-gallery="video"
                        >
                          <span className="visually-hidden">Video Play</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="listing__details--content__step mb-80">
                    <h3 className="listing__details--content__title mb-40">Faqs</h3>
                    <div className="listing__details--video__thumbnail position-relative">
                      <Faq />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">

              <Form />
              {/* <EMICalculator /> */}
            </div>
          </div>
       
      </section>

    </>

  )
}

export default PropertiesDetail 
