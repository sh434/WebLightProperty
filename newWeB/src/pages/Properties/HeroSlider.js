import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const heroItems = [
    {
        title: "House In Vasant Kunj, New Delhi",
        price: "₹13000",
        address: "1421 San Pedro St, Los Angeles, CA",
        imgSrc: "/assets/hero/listing-details-hero.png",
    },
    {
        title: "Another House In Vasant Kunj, New Delhi",
        price: "₹15000",
        address: "1421 San Pedro St, Los Angeles, CA",
        imgSrc: "/assets/hero/home-five-hero-section-bg.png",
    },
];

const HeroSlider = () => {
    return (
        <section className="listing__hero--section">
            <div className="listing__hero--section__inner position-relative">
                <div className="listing__hero--slider">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        className="listing__hero--swiper"
                    >
                        {heroItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="listing__hero--slider__items position-relative">
                                    <img
                                        style={{ borderRadius: "5px" }}
                                        className="listing__hero--slider__media"
                                        src={item.imgSrc}
                                        alt={item.title}
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Small thumbnail slider */}
                <div className="listing__small--hero__slider">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        className="hero__swiper--column3"
                    >
                        {["slider-small1.png", "slider-small2.png", "slider-small3.png", "slider-small4.png", "slider-small5.png", "slider-small6.png"].map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="listing__small--hero__slider--items">
                                    <img src={`/assets/hero/${src}`} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
