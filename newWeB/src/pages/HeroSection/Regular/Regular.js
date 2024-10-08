import React, { useState, useEffect } from 'react';
import { startCountAnimation } from '../../../utils/CountAnimation/CountAnimation';
import './Regular.css';

const amenitiesData = [
    {
        amount: 170,
        description: "Owned from Properties transactions",
        iconClass: "bi bi-house"
    },
    {
        amount: 20000,
        description: "Properties for Buy & sell Successfully",
        iconClass: "bi bi-shop"
    },
    {
        amount: 400,
        description: "Daily completed transactions",
        iconClass: "bi bi-calendar-check"
    },
    {
        amount: 200,
        description: "Regular Clients",
        iconClass: "bi bi-person-check"
    }
];

const Regular = () => {
    const [counts, setCounts] = useState(amenitiesData.map(() => 0));

    useEffect(() => {
        startCountAnimation(amenitiesData, setCounts);
    }, []);

    return (
        <div className="hero-section pt-6">
            <div className='container'>
                <div className='row' style={{ padding: '22px' }}
                    data-aos="fade-up"
                    data-aos-duration={1200}
                    data-aos-delay={100}>
                    {amenitiesData.map((item, index) => (
                        <div key={index} className='col-md-3'>
                            <div className="amenities__icone text-center">
                                <span>
                                    <i className={item.iconClass}></i>
                                </span>
                            </div>
                            <h2 className='text-white text-center'>
                                {counts[index]}{item.suffix || ''}
                            </h2>
                            <p className='text-white text-center'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Regular;
