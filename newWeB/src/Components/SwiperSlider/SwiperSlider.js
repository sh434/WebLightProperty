import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideData } from '../../data/SlideData';
import { SwiperSettings } from '../../utils/swiperConfig/SwiperSettings';
import BlogCard from '../../pages/BlogSection/Blog';
import './SwiperSlider.css';

const SwiperSlider = () => {
    return (
        <div className="slider-container">
            <Swiper {...SwiperSettings}>
                {SlideData.map((blog, index) => (
                    <SwiperSlide key={index}>
                        <BlogCard
                            imageUrl={blog.imageUrl}
                            altText={blog.altText}
                            badge={blog.badge}
                            date={blog.date}
                            comments={blog.comments}
                            heading={blog.heading}
                            paragraph={blog.pargraph}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSlider;
