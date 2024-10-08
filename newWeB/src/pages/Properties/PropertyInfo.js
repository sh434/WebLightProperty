import React from 'react'
import './propert.css'

const PropertyInfo = ({details}) => {
    return (
        <div className="listing-details-content properties-info mb-80">
            <h3 className="listing-details-title mb-40">Details:</h3>
            <ul className="properties-details-info-wrapper d-flex">
                {details.map((detail, index) => (
                    <li key={index} className="properties-details-info-list d-flex justify-content-between">
                        <span className="properties-details-info-title">{detail.title}:</span>
                        <span className="properties-details-info-subtitle">{detail.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PropertyInfo