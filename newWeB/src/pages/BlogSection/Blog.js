import React from 'react'
import Form from '../../Components/Form/Form';
import Dynamic from '../../Components/DynamicBanner/Dynamic'
import Pagination from '../../Components/Pagination/Pagination';
import './Blog.css'
import { Link } from 'react-router-dom';

const blogData = [
    {
        id: 1,
        imgSrc: "assets/blog/blog1.png",
        badge: "Business",
        date: "02 Apr 2024",
        title: "The 8 Best Things About Real Estate",
        description: "Business is the activity of making or buying and selling products.",
        link: "blog-details.html"
    },
    {
        id: 2,
        imgSrc: "assets/blog/blog2.png",
        badge: "Finance",
        date: "15 Mar 2024",
        title: "How to Save Money Effectively",
        description: "Finance is the science of managing funds.",
        link: "blog-details.html"
    },
    {
        id: 2,
        imgSrc: "assets/blog/blog2.png",
        badge: "Finance",
        date: "15 Mar 2024",
        title: "How to Save Money Effectively",
        description: "Finance is the science of managing funds.",
        link: "blog-details.html"
    },
    {
        id: 2,
        imgSrc: "assets/blog/blog2.png",
        badge: "Finance",
        date: "15 Mar 2024",
        title: "How to Save Money Effectively",
        description: "Finance is the science of managing funds.",
        link: "blog-details.html"
    },
    {
        id: 2,
        imgSrc: "assets/blog/blog2.png",
        badge: "Finance",
        date: "15 Mar 2024",
        title: "How to Save Money Effectively",
        description: "Finance is the science of managing funds.",
        link: "blog-details.html"
    },
    {
        id: 2,
        imgSrc: "assets/blog/blog2.png",
        badge: "Finance",
        date: "15 Mar 2024",
        title: "How to Save Money Effectively",
        description: "Finance is the science of managing funds.",
        link: "blog-details.html"
    },
    // Add more blog items as needed
];

const Blog = ({ }) => {
    return (
        <>
            <Dynamic
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Blogs"
                subheading="Learn more about our company and values." />

            <div className='container'>
                <div className='row pt-4 mb-2'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <h2>All Blogs</h2>
                            {blogData.map((blog, index) => (
                                <div className='col-md-4 mb-30' key={index}
                                    data-aos="fade-up"
                                    data-aos-duration={1200}
                                    data-aos-delay={20}>
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
                                                    <span className="blog__meta--date">02 Apr 2024</span>
                                                </li>
                                            </ul>
                                            <h3 className="blog__title">
                                                <a href="blog-details.html">The 8 Best Things About Real Estate</a>
                                            </h3>
                                            <p className="blog__desc">
                                                Business is the activity of making on cing or buying and selling pro
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

                    <div className='col-md-4' style={{ paddingTop: "45px" }}
                        data-aos="fade-left"
                        data-aos-duration={1200}
                        data-aos-delay={20}>
                        <div className="listing__widget">
                            <div className="blog__widget--step mb-30">
                                <h2 className="widget__step--title">Recent Post</h2>
                                <div className="widget__featured">
                                    <div className="widget__featured--items d-flex">
                                        <div className="widget__featured--thumb">
                                            <a
                                                className="widget__featured--thumb__link"
                                                href="blog-details.html"
                                            >
                                                <img
                                                    className="widget__featured--media"
                                                    src="/assets/property/featured1.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="widget__featured--content">
                                            <span className="widget__featured--date">
                                                <svg
                                                    width={14}
                                                    height={14}
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.5332 13H3.7832V10.75H1.5332V13ZM4.2832 13H6.7832V10.75H4.2832V13ZM1.5332 10.25H3.7832V7.75H1.5332V10.25ZM4.2832 10.25H6.7832V7.75H4.2832V10.25ZM1.5332 7.25H3.7832V5H1.5332V7.25ZM7.2832 13H9.7832V10.75H7.2832V13ZM4.2832 7.25H6.7832V5H4.2832V7.25ZM10.2832 13H12.5332V10.75H10.2832V13ZM7.2832 10.25H9.7832V7.75H7.2832V10.25ZM4.5332 3.5V1.25C4.5332 1.18229 4.50716 1.125 4.45508 1.07812C4.4082 1.02604 4.35091 0.999999 4.2832 0.999999H3.7832C3.71549 0.999999 3.6556 1.02604 3.60352 1.07812C3.55664 1.125 3.5332 1.18229 3.5332 1.25V3.5C3.5332 3.56771 3.55664 3.6276 3.60352 3.67969C3.6556 3.72656 3.71549 3.75 3.7832 3.75H4.2832C4.35091 3.75 4.4082 3.72656 4.45508 3.67969C4.50716 3.6276 4.5332 3.56771 4.5332 3.5ZM10.2832 10.25H12.5332V7.75H10.2832V10.25ZM7.2832 7.25H9.7832V5H7.2832V7.25ZM10.2832 7.25H12.5332V5H10.2832V7.25ZM10.5332 3.5V1.25C10.5332 1.18229 10.5072 1.125 10.4551 1.07812C10.4082 1.02604 10.3509 0.999999 10.2832 0.999999H9.7832C9.7155 0.999999 9.6556 1.02604 9.60352 1.07812C9.55664 1.125 9.5332 1.18229 9.5332 1.25V3.5C9.5332 3.56771 9.55664 3.6276 9.60352 3.67969C9.6556 3.72656 9.7155 3.75 9.7832 3.75H10.2832C10.3509 3.75 10.4082 3.72656 10.4551 3.67969C10.5072 3.6276 10.5332 3.56771 10.5332 3.5ZM13.5332 3V13C13.5332 13.2708 13.4342 13.5052 13.2363 13.7031C13.0384 13.901 12.804 14 12.5332 14H1.5332C1.26237 14 1.02799 13.901 0.830078 13.7031C0.632161 13.5052 0.533203 13.2708 0.533203 13V3C0.533203 2.72917 0.632161 2.49479 0.830078 2.29687C1.02799 2.09896 1.26237 2 1.5332 2H2.5332V1.25C2.5332 0.906249 2.6556 0.611978 2.90039 0.367187C3.14518 0.122395 3.43945 -9.53674e-07 3.7832 -9.53674e-07H4.2832C4.62695 -9.53674e-07 4.92122 0.122395 5.16602 0.367187C5.41081 0.611978 5.5332 0.906249 5.5332 1.25V2H8.5332V1.25C8.5332 0.906249 8.6556 0.611978 8.90039 0.367187C9.14518 0.122395 9.43945 -9.53674e-07 9.7832 -9.53674e-07H10.2832C10.627 -9.53674e-07 10.9212 0.122395 11.166 0.367187C11.4108 0.611978 11.5332 0.906249 11.5332 1.25V2H12.5332C12.804 2 13.0384 2.09896 13.2363 2.29687C13.4342 2.49479 13.5332 2.72917 13.5332 3Z"
                                                        fill="#FA4A4A"
                                                    />
                                                </svg>
                                                Jan 01,2024
                                            </span>
                                            <h3 className="widget__featured--title m-0">
                                                <a href="blog-details.html">
                                                    Budget Issues Force The Our To Become
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="widget__featured--items d-flex">
                                        <div className="widget__featured--thumb">
                                            <a
                                                className="widget__featured--thumb__link"
                                                href="listing-details.html"
                                            >
                                                <img
                                                    className="widget__featured--media"
                                                    src="/assets/property/featured2.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="widget__featured--content">
                                            <span className="widget__featured--date">
                                                <svg
                                                    width={14}
                                                    height={14}
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.5332 13H3.7832V10.75H1.5332V13ZM4.2832 13H6.7832V10.75H4.2832V13ZM1.5332 10.25H3.7832V7.75H1.5332V10.25ZM4.2832 10.25H6.7832V7.75H4.2832V10.25ZM1.5332 7.25H3.7832V5H1.5332V7.25ZM7.2832 13H9.7832V10.75H7.2832V13ZM4.2832 7.25H6.7832V5H4.2832V7.25ZM10.2832 13H12.5332V10.75H10.2832V13ZM7.2832 10.25H9.7832V7.75H7.2832V10.25ZM4.5332 3.5V1.25C4.5332 1.18229 4.50716 1.125 4.45508 1.07812C4.4082 1.02604 4.35091 0.999999 4.2832 0.999999H3.7832C3.71549 0.999999 3.6556 1.02604 3.60352 1.07812C3.55664 1.125 3.5332 1.18229 3.5332 1.25V3.5C3.5332 3.56771 3.55664 3.6276 3.60352 3.67969C3.6556 3.72656 3.71549 3.75 3.7832 3.75H4.2832C4.35091 3.75 4.4082 3.72656 4.45508 3.67969C4.50716 3.6276 4.5332 3.56771 4.5332 3.5ZM10.2832 10.25H12.5332V7.75H10.2832V10.25ZM7.2832 7.25H9.7832V5H7.2832V7.25ZM10.2832 7.25H12.5332V5H10.2832V7.25ZM10.5332 3.5V1.25C10.5332 1.18229 10.5072 1.125 10.4551 1.07812C10.4082 1.02604 10.3509 0.999999 10.2832 0.999999H9.7832C9.7155 0.999999 9.6556 1.02604 9.60352 1.07812C9.55664 1.125 9.5332 1.18229 9.5332 1.25V3.5C9.5332 3.56771 9.55664 3.6276 9.60352 3.67969C9.6556 3.72656 9.7155 3.75 9.7832 3.75H10.2832C10.3509 3.75 10.4082 3.72656 10.4551 3.67969C10.5072 3.6276 10.5332 3.56771 10.5332 3.5ZM13.5332 3V13C13.5332 13.2708 13.4342 13.5052 13.2363 13.7031C13.0384 13.901 12.804 14 12.5332 14H1.5332C1.26237 14 1.02799 13.901 0.830078 13.7031C0.632161 13.5052 0.533203 13.2708 0.533203 13V3C0.533203 2.72917 0.632161 2.49479 0.830078 2.29687C1.02799 2.09896 1.26237 2 1.5332 2H2.5332V1.25C2.5332 0.906249 2.6556 0.611978 2.90039 0.367187C3.14518 0.122395 3.43945 -9.53674e-07 3.7832 -9.53674e-07H4.2832C4.62695 -9.53674e-07 4.92122 0.122395 5.16602 0.367187C5.41081 0.611978 5.5332 0.906249 5.5332 1.25V2H8.5332V1.25C8.5332 0.906249 8.6556 0.611978 8.90039 0.367187C9.14518 0.122395 9.43945 -9.53674e-07 9.7832 -9.53674e-07H10.2832C10.627 -9.53674e-07 10.9212 0.122395 11.166 0.367187C11.4108 0.611978 11.5332 0.906249 11.5332 1.25V2H12.5332C12.804 2 13.0384 2.09896 13.2363 2.29687C13.4342 2.49479 13.5332 2.72917 13.5332 3Z"
                                                        fill="#FA4A4A"
                                                    />
                                                </svg>
                                                Jan 01,2024
                                            </span>
                                            <h3 className="widget__featured--title m-0">
                                                <a href="listing-details.html">
                                                    tos lobortis des mollis ut risus
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="widget__featured--items d-flex">
                                        <div className="widget__featured--thumb">
                                            <a
                                                className="widget__featured--thumb__link"
                                                href="listing-details.html"
                                            >
                                                <img
                                                    className="widget__featured--media"
                                                    src="assets/property/featured3.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="widget__featured--content">
                                            <span className="widget__featured--date">
                                                <svg
                                                    width={14}
                                                    height={14}
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.5332 13H3.7832V10.75H1.5332V13ZM4.2832 13H6.7832V10.75H4.2832V13ZM1.5332 10.25H3.7832V7.75H1.5332V10.25ZM4.2832 10.25H6.7832V7.75H4.2832V10.25ZM1.5332 7.25H3.7832V5H1.5332V7.25ZM7.2832 13H9.7832V10.75H7.2832V13ZM4.2832 7.25H6.7832V5H4.2832V7.25ZM10.2832 13H12.5332V10.75H10.2832V13ZM7.2832 10.25H9.7832V7.75H7.2832V10.25ZM4.5332 3.5V1.25C4.5332 1.18229 4.50716 1.125 4.45508 1.07812C4.4082 1.02604 4.35091 0.999999 4.2832 0.999999H3.7832C3.71549 0.999999 3.6556 1.02604 3.60352 1.07812C3.55664 1.125 3.5332 1.18229 3.5332 1.25V3.5C3.5332 3.56771 3.55664 3.6276 3.60352 3.67969C3.6556 3.72656 3.71549 3.75 3.7832 3.75H4.2832C4.35091 3.75 4.4082 3.72656 4.45508 3.67969C4.50716 3.6276 4.5332 3.56771 4.5332 3.5ZM10.2832 10.25H12.5332V7.75H10.2832V10.25ZM7.2832 7.25H9.7832V5H7.2832V7.25ZM10.2832 7.25H12.5332V5H10.2832V7.25ZM10.5332 3.5V1.25C10.5332 1.18229 10.5072 1.125 10.4551 1.07812C10.4082 1.02604 10.3509 0.999999 10.2832 0.999999H9.7832C9.7155 0.999999 9.6556 1.02604 9.60352 1.07812C9.55664 1.125 9.5332 1.18229 9.5332 1.25V3.5C9.5332 3.56771 9.55664 3.6276 9.60352 3.67969C9.6556 3.72656 9.7155 3.75 9.7832 3.75H10.2832C10.3509 3.75 10.4082 3.72656 10.4551 3.67969C10.5072 3.6276 10.5332 3.56771 10.5332 3.5ZM13.5332 3V13C13.5332 13.2708 13.4342 13.5052 13.2363 13.7031C13.0384 13.901 12.804 14 12.5332 14H1.5332C1.26237 14 1.02799 13.901 0.830078 13.7031C0.632161 13.5052 0.533203 13.2708 0.533203 13V3C0.533203 2.72917 0.632161 2.49479 0.830078 2.29687C1.02799 2.09896 1.26237 2 1.5332 2H2.5332V1.25C2.5332 0.906249 2.6556 0.611978 2.90039 0.367187C3.14518 0.122395 3.43945 -9.53674e-07 3.7832 -9.53674e-07H4.2832C4.62695 -9.53674e-07 4.92122 0.122395 5.16602 0.367187C5.41081 0.611978 5.5332 0.906249 5.5332 1.25V2H8.5332V1.25C8.5332 0.906249 8.6556 0.611978 8.90039 0.367187C9.14518 0.122395 9.43945 -9.53674e-07 9.7832 -9.53674e-07H10.2832C10.627 -9.53674e-07 10.9212 0.122395 11.166 0.367187C11.4108 0.611978 11.5332 0.906249 11.5332 1.25V2H12.5332C12.804 2 13.0384 2.09896 13.2363 2.29687C13.4342 2.49479 13.5332 2.72917 13.5332 3Z"
                                                        fill="#FA4A4A"
                                                    />
                                                </svg>
                                                Jan 01,2024
                                            </span>
                                            <h3 className="widget__featured--title m-0">
                                                <a href="listing-details.html">
                                                    ut labore et dolore magna aliqua.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="widget__featured--items d-flex">
                                        <div className="widget__featured--thumb">
                                            <a
                                                className="widget__featured--thumb__link"
                                                href="listing-details.html"
                                            >
                                                <img
                                                    className="widget__featured--media"
                                                    src="/assets/property/featured3.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </div>
                                        <div className="widget__featured--content">
                                            <span className="widget__featured--date">
                                                <svg
                                                    width={14}
                                                    height={14}
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.5332 13H3.7832V10.75H1.5332V13ZM4.2832 13H6.7832V10.75H4.2832V13ZM1.5332 10.25H3.7832V7.75H1.5332V10.25ZM4.2832 10.25H6.7832V7.75H4.2832V10.25ZM1.5332 7.25H3.7832V5H1.5332V7.25ZM7.2832 13H9.7832V10.75H7.2832V13ZM4.2832 7.25H6.7832V5H4.2832V7.25ZM10.2832 13H12.5332V10.75H10.2832V13ZM7.2832 10.25H9.7832V7.75H7.2832V10.25ZM4.5332 3.5V1.25C4.5332 1.18229 4.50716 1.125 4.45508 1.07812C4.4082 1.02604 4.35091 0.999999 4.2832 0.999999H3.7832C3.71549 0.999999 3.6556 1.02604 3.60352 1.07812C3.55664 1.125 3.5332 1.18229 3.5332 1.25V3.5C3.5332 3.56771 3.55664 3.6276 3.60352 3.67969C3.6556 3.72656 3.71549 3.75 3.7832 3.75H4.2832C4.35091 3.75 4.4082 3.72656 4.45508 3.67969C4.50716 3.6276 4.5332 3.56771 4.5332 3.5ZM10.2832 10.25H12.5332V7.75H10.2832V10.25ZM7.2832 7.25H9.7832V5H7.2832V7.25ZM10.2832 7.25H12.5332V5H10.2832V7.25ZM10.5332 3.5V1.25C10.5332 1.18229 10.5072 1.125 10.4551 1.07812C10.4082 1.02604 10.3509 0.999999 10.2832 0.999999H9.7832C9.7155 0.999999 9.6556 1.02604 9.60352 1.07812C9.55664 1.125 9.5332 1.18229 9.5332 1.25V3.5C9.5332 3.56771 9.55664 3.6276 9.60352 3.67969C9.6556 3.72656 9.7155 3.75 9.7832 3.75H10.2832C10.3509 3.75 10.4082 3.72656 10.4551 3.67969C10.5072 3.6276 10.5332 3.56771 10.5332 3.5ZM13.5332 3V13C13.5332 13.2708 13.4342 13.5052 13.2363 13.7031C13.0384 13.901 12.804 14 12.5332 14H1.5332C1.26237 14 1.02799 13.901 0.830078 13.7031C0.632161 13.5052 0.533203 13.2708 0.533203 13V3C0.533203 2.72917 0.632161 2.49479 0.830078 2.29687C1.02799 2.09896 1.26237 2 1.5332 2H2.5332V1.25C2.5332 0.906249 2.6556 0.611978 2.90039 0.367187C3.14518 0.122395 3.43945 -9.53674e-07 3.7832 -9.53674e-07H4.2832C4.62695 -9.53674e-07 4.92122 0.122395 5.16602 0.367187C5.41081 0.611978 5.5332 0.906249 5.5332 1.25V2H8.5332V1.25C8.5332 0.906249 8.6556 0.611978 8.90039 0.367187C9.14518 0.122395 9.43945 -9.53674e-07 9.7832 -9.53674e-07H10.2832C10.627 -9.53674e-07 10.9212 0.122395 11.166 0.367187C11.4108 0.611978 11.5332 0.906249 11.5332 1.25V2H12.5332C12.804 2 13.0384 2.09896 13.2363 2.29687C13.4342 2.49479 13.5332 2.72917 13.5332 3Z"
                                                        fill="#FA4A4A"
                                                    />
                                                </svg>
                                                Jan 01,2024
                                            </span>
                                            <h3 className="widget__featured--title m-0">
                                                <a href="listing-details.html">
                                                    ut labore et dolore magna aliqua.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Form />
                    </div>
                </div>
                <Pagination />
            </div>
        </>
    )
}

export default Blog