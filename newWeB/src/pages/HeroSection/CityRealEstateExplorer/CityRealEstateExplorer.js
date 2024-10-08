import React from 'react';
import './CityRealEstateExplorer.css';

const citiesData = [
    { name: "Delhi NCR", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Bangalore", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Pune", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Mumbai", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Hyderabad", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Chennai", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Kolkata", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Mumbai", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Ahmedabad", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Hyderabad", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Noida", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    { name: "Delhi NCR", properties: "15,000+ Properties", imgSrc: "/assets/image 4.jpg" },
    
];

const CityRealEstateExplorer = () => {
    return (
        <div className="hero-section">
            <h2 className='text-white text-center pt-2'>Explore Real Estate in Popular Indian Cities</h2>
            <div className='container'>
                <div className='row justify-content-center ' style={{padding:'24px'}}>
                    {citiesData.map((city, index) => (
                        <div key={index} className='col-md-2 d-flex flex-column align-items-center text-center city-card mb-2'>
                            <img src={city.imgSrc} className='city mb-2' alt={city.name} />
                            <h4 className='text-white'>{city.name}</h4>
                            <p className='text-white'>{city.properties}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CityRealEstateExplorer;
