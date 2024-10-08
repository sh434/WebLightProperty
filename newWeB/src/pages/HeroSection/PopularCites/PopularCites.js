import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './PopularCites.css';
import '../../../Components/SwiperSlider/SwiperSlider.css'
import { SwiperSettings } from '../../../utils/swiperConfig/SwiperSettings';


const citiesData = [
    {
        name: 'Delhi',
        propertiesCount: 13,
        imageUrl: 'assets/property/popular-properties1.png',
    },
    {
        name: 'Mumbai',
        propertiesCount: 22,
        imageUrl: 'assets/property/popular-properties2.png',
    },
    {
        name: 'Bengaluru',
        propertiesCount: 18,
        imageUrl: 'assets/property/popular-properties3.png',
    },
    {
        name: 'Chennai',
        propertiesCount: 9,
        imageUrl: 'assets/property/popular-properties4.png',
    },
    {
        name: 'Kolkata',
        propertiesCount: 5,
        imageUrl: 'assets/property/popular-properties5.png',
    },
    {
        name: 'Delhi',
        propertiesCount: 13,
        imageUrl: 'assets/property/popular-properties1.png',
    },
    {
        name: 'Mumbai',
        propertiesCount: 22,
        imageUrl: 'assets/property/popular-properties2.png',
    },
    {
        name: 'Bengaluru',
        propertiesCount: 18,
        imageUrl: 'assets/property/popular-properties3.png',
    },
    {
        name: 'Chennai',
        propertiesCount: 9,
        imageUrl: 'assets/property/popular-properties4.png',
    },
    {
        name: 'Kolkata',
        propertiesCount: 5,
        imageUrl: 'assets/property/popular-properties5.png',
    },
];


const PopularCites = () => {
    return (
        <>
            <div className="container mt-4">
                <div
                    className="section__heading text-center "
                    data-aos="fade-up"
                    data-aos-duration={1200}
                    data-aos-delay={100}
                >
                    <h2 className="section__heading--title text-dark">
                        Discover <span>Top</span> Real Estate Destinations
                    </h2>
                    <p className='text-center'>
                        Explore the most sought-after cities for real estate investment and living. 
                    </p>

                </div>
            </div>
            <div
                className="popular__featured--inner pt-4"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={150}
            >
                <Swiper {...SwiperSettings}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    className="popular__featured--column5"
                >
                    {citiesData.map((city, index) => (
                        <SwiperSlide key={index}>
                            <article className="popular__featured--card">
                                <div className="popular__featured--thumbnail position-relative">
                                    <a className="popular__featured--link" href="listing-details.html">
                                        <img
                                            className="popular__featured--img"
                                            src={city.imageUrl}
                                            alt={city.name}
                                        />
                                    </a>
                                    <span className="popular__featured--badge">{city.propertiesCount}</span>
                                    <div className="popular__featured--content">
                                        <h3 className="popular__featured--title">{city.name}</h3>
                                        <h5 className="popular__featured--subtitle">
                                            {city.propertiesCount} properties
                                            <span>
                                                <svg
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M17.4219 1.67528L17.3926 13.422C17.3918 13.7573 17.2595 14.0725 17.0207 14.3101C16.7816 14.548 16.4657 14.6784 16.1306 14.6777L15.0639 14.6749C14.729 14.6742 14.4135 14.5421 14.1757 14.3031C13.938 14.0643 13.8 13.7405 13.801 13.4056L13.8106 6.54525L2.89752 17.4038C2.40548 17.8934 1.63343 17.895 1.14372 17.4028L0.391553 16.6469C-0.098156 16.1547 -0.131297 15.3438 0.360739 14.8543L11.3128 3.95695L4.39453 3.95165C4.05934 3.95068 3.74986 3.82469 3.51207 3.5857C3.27453 3.34697 3.14693 3.03368 3.14777 2.69863L3.15202 1.63372C3.15286 1.29841 3.28561 0.984048 3.52473 0.746117C3.76359 0.50845 4.07993 0.378344 4.41525 0.379184L16.1618 0.408607C16.4981 0.40958 16.8147 0.542466 17.0521 0.782382C17.2914 1.02191 17.423 1.33917 17.4219 1.67528Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default PopularCites;
