import React from 'react';
import './propert.css';
import Dynamic from '../../Components/DynamicBanner/Dynamic';
import Form from '../../Components/Form/Form';
import Pagination from '../../Components/Pagination/Pagination';
import PropertyCardItem from './PropertyCardItem';

const properties = [
    {
        id: 1,
        title: 'Luxury Apartment',
        price: '₹ 3-7 Lac',
        location: '1234 Mumbai Rd, Mumbai, India',
        image: 'assets/property/properties1.png',
        badge1: 'Featured',
        badge2: 'For sale',
        bedrooms: 3,
        bathrooms: 2,
    },
    {
        id: 2,
        title: 'Cozy Studio',
        price: '₹ 1-2 Lac',
        location: '5678 Bangalore St, Bangalore, India',
        image: 'assets/property/properties1.png',
        badge1: 'New',
        badge2: 'For rent',
        bedrooms: 1,
        bathrooms: 1,
    },
    {
        id: 2,
        title: 'Cozy Studio',
        price: '₹ 1-2 Lac',
        location: '5678 Bangalore St, Bangalore, India',
        image: 'assets/property/properties1.png',
        badge1: 'New',
        badge2: 'For rent',
        bedrooms: 1,
        bathrooms: 1,
    },
    {
        id: 3,
        title: 'Cozy Studio',
        price: '₹ 1-2 Lac',
        location: '5678 Bangalore St, Bangalore, India',
        image: 'assets/property/properties1.png',
        badge1: 'New',
        badge2: 'For rent',
        bedrooms: 1,
        bathrooms: 1,
    },
    {
        id: 4,
        title: 'Cozy Studio',
        price: '₹ 1-2 Lac',
        location: '5678 Bangalore St, Bangalore, India',
        image: 'assets/property/properties1.png',
        badge1: 'New',
        badge2: 'For rent',
        bedrooms: 1,
        bathrooms: 1,
    },
    {
        id: 5,
        title: 'Cozy Studio',
        price: '₹ 1-2 Lac',
        location: '5678 Bangalore St, Bangalore, India',
        image: 'assets/property/properties1.png',
        badge1: 'New',
        badge2: 'For rent',
        bedrooms: 1,
        bathrooms: 1,
    },
   
];

const PropertyCard = () => {
    return (
        <>
            <Dynamic
                backgroundImage="/assets/About.jpg"
                heading="All Property List"
                subheading="Discover a curated selection of properties tailored just for you."
            />
            <section
                className="featured__section section--padding"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={100}
            >
                <div className="container-fluid">
                    <div className="section__heading">
                        <h2 className="section__heading--title text-center">New Property Acquisitions</h2>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-9'>
                            <div className='row'>
                                {properties.map((property) => (
                                    <PropertyCardItem key={property.id} property={property} />
                                ))}
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
            <Pagination />
        </>
    );
};

export default PropertyCard;