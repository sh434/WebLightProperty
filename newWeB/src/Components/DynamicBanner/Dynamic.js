import React from 'react'
import './Dynamic.css'

const Dynamic = ({ backgroundImage, heading, subheading }) => {
    console.log(backgroundImage, heading, subheading)
    return (
        <div
            className="background-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="dynamic__content">
                <h1 className="dynamic__title">{heading}</h1>
                <p className="dynamic__subheading text-white text-center">{subheading}</p>
            </div>
        </div>
    )
}

export default Dynamic