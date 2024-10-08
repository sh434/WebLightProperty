import React from 'react'
import BannerSection from './BannerSection/BannerSection'
import Approach from "./Approach/Apptoach"
import PopularCites from './PopularCites/PopularCites'
import Regular from "./Regular/Regular"
import Service from './Service/Service'
// import CityRealEstateExplorer from './CityRealEstateExplorer/CityRealEstateExplorer'
import JoinAsRealEstateAgent from './JoinAsRealEstateAgent/JoinAsRealEstateAgent'
import { Link } from 'react-router-dom'
// import SwiperSlider from '../../Components/SwiperSlider/SwiperSlider'
// import { ReactComponent as HouseIcons } from "../../icons/house.svg"

const blogData = [
    {
        id: 1,
        imgSrc: "assets/blog/blog1.png",
        badge: "Real Estate",
        date: "02 Apr 2024",
        title: "Top 8 Real Estate Trends",
        description: "Explore the latest trends shaping the real estate market in 2024. From emerging technologies to market shifts",
        link: "blog-details.html"
    },
    {
        id: 2,
        imgSrc: "assets/blog/blog2.png",
        badge: "Investment",
        date: "15 Mar 2024",
        title: "Maximizing Real Estate Investment",
        description: "Learn strategies for optimizing your real estate investments to achieve the highest returns. This guide covers key tactics .",
        link: "blog-details.html"
    },
    {
        id: 3,
        imgSrc: "assets/blog/blog3.png",
        badge: "Market Insights",
        date: "20 Feb 2024",
        title: "Real Estate Market Cycles",
        description: "Gain insights into the different phases of real estate market cycles and how they impact property values. ",
        link: "blog-details.html"
    },
    {
        id: 4,
        imgSrc: "assets/blog/blog4.png",
        badge: "Home Buying",
        date: "10 Jan 2024",
        title: "Tips for First-Time Buyers",
        description: "Buying your first home can be overwhelming. This blog provides essential tips and advice to help first-time buyer .",
        link: "blog-details.html"
    }
];



const Home = () => {
    return (
        <>
            <BannerSection />
            <Approach />
            <Regular />
            <PopularCites />
            <Service />
            <div className='container'>
                <div className='row pt-4 mb-2'>
                    <h2 className='text-center'>Blogs</h2>
                    {blogData.map((blog, index) => (
                        <div className='col-md-3 mb-30 pt-3' key={index}>
                            <article className="blog__items">
                                <div className="blog__thumbnail position-relative">
                                    <a href="blog-details.html">
                                        <img
                                            className="blog__thumbnail--media"
                                            src="assets/blog/blog1.png"
                                            alt="blog-img"
                                        />
                                    </a>
                                    <span className="blog__badge">
                                        Business
                                    </span>
                                </div>
                                <div className="blog__content">
                                    <ul className="blog__meta d-flex">
                                        <li className="blog__meta--list d-flex align-items-center">
                                            <span className="blog__meta--icon">
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
                                            <span className="blog__meta--date">{blog.date}</span>
                                        </li>
                                    </ul>
                                    <h3 className="blog__title">
                                        <a href="blog-details.html">{blog.title}</a>
                                    </h3>
                                    <p className="blog__desc">
                                        {blog.description}
                                    </p>
                                    <Link to={`/BlogDetail/${blog.id}`} className="read-more">
                                        Read more <span className="sr-only">about this is some title</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

{/* 
            <CityRealEstateExplorer /> */}
            <JoinAsRealEstateAgent />

        </>



    )
}

export default Home