import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination/Pagination';
import CallToActionSection from '../AboutSection/CallToActionSection/CallToActionSection';
import Dynamic from '../../Components/DynamicBanner/Dynamic';

const services = [
    {
        id: 1,
        title: 'Licensing Compliance',
        description: 'At WPM India, our Licensing Compliance service ensures that all your property management practices adhere to a comprehensive set of rules and guidelines within the real estate industry. Our team is proficient in navigating  ',
        imageUrl: '/assets/property/featured-grid3.jpg',
    },
    {
        id: 2,
        title: 'Transaction Advisory Solution',
        description: 'Our Transaction Advisory Solution assists clients in navigating the complexities of property transactions, including buying, selling, leasing, subletting, and consolidating. We help verify the condition and value of assets at the best market price.',
        imageUrl: '/assets/property/featured-grid2.jpg',
    },
    {
        id: 3,
        title: 'Facility Management',
        description: 'Our Facility Management service covers various disciplines, including housekeeping, operations, property management, maintenance, and physical asset security. We integrate people, processes, and technology to deliver comprehensive management solutions.',
        imageUrl: '/assets/property/featured-grid3.jpg',
    },
    {
        id: 4,
        title: 'Parking Facility Management',
        description: 'Our Parking Facility Management service involves planning, designing, operating, and maintaining parking facilities. We manage these facilities on behalf of property owners or other entities, ensuring efficient and effective operations.',
        imageUrl: '/assets/property/featured-grid2.jpg',
    },
    {
        id: 5,
        title: 'Ambiance Management',
        description: 'In our Ambiance Management service, we ensure the protection of your assets and people while maintaining a welcoming appearance. We offer high-quality, cost-effective security services using the ambiance management approach.',
        imageUrl: '/assets/property/featured-grid3.jpg',
    },
    {
        id: 6,
        title: 'Business Support Management',
        description: 'Our Business Support Management service aids in the smooth operation of businesses by handling various functions such as financial transactions, budgeting, and financial reporting. We also provide technology solutions and system maintenance.',
        imageUrl: '/assets/property/featured-grid2.jpg',
    },
];

const ServiceOverview = () => {
    return (
        <>
            <Dynamic
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Our Services"
                subheading="Learn more about our company and values."
            />
            <section className="articles pt-5 mb-30">
                {services.map(service => (
                    <article key={service.id}
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={100}
                        style={{ marginBottom: '54px' }}>
                        <div className="article-wrapper">
                            <figure>
                                <img src={service.imageUrl} alt={service.title} />
                            </figure>
                            <div className="article-body">
                                <h2>{service.title}</h2>
                                <p >{service.description}</p>
                                <Link to={`/SingleServiceView/${service.id}`} className="read-more">
                                    Read More
                                    <span className="sr-only"> about {service.title}</span>
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
                        </div>
                    </article>
                ))}
            </section>
            <Pagination />
            <section style={{ backgroundColor: "rgba(227, 227, 227, 1)" }} className='mb-30'>
                <CallToActionSection />
            </section>


        </>


    )
}

export default ServiceOverview