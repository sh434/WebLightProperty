import React from 'react'
import './AboutView.css'
import DynamicBanner from '../../Components/DynamicBanner/Dynamic'
import Approachs from './Approachs/Approachs'
import CallToActionSection from './CallToActionSection/CallToActionSection'
import "../HeroSection/Service/Service.css"
import "../ContactSection/ContactUs.css"

const AboutView = () => {
    return (
        <>
            <DynamicBanner
                backgroundImage="/assets/About.jpg"
                heading="About Us"
                subheading="If you are in search of a top-tier property management company in (Location) ." />
            <Approachs />
            <CallToActionSection />
        </>


    )
}

export default AboutView