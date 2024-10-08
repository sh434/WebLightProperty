import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import HeroSection from "./pages/HeroSection/home";
import ContactUs from './pages/ContactSection/ContactUs';
import AboutView from './pages/AboutSection/AboutView';
import AdvisoryManagement from './pages/AdvisoryManagement/AdvisoryManagement';
import Blog from './pages/BlogSection/Blog';
import BlogDetail from './pages/BlogSection/BlogDetail';
import ServiceOverview from './pages/ServiceOverview/ServiceOverview';
import SingleServiceView from './pages/ServiceOverview/SingleServiceView';
import PropertyCard from './pages/Properties/PropertyCard';
import PropertiesDetail from './pages/Properties/PropertiesDetail';
import TechnicalService from './pages/TechnicalService/TechnicalService';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutView />} />
          <Route path="/advisory-management" element={<AdvisoryManagement />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/BlogDetail/:blogId" element={<BlogDetail />} />
          <Route path="/service" element={<ServiceOverview />} />
          <Route path="/SingleServiceView/:serviceId" element={<SingleServiceView />} />
          <Route path="/technical-service" element={<TechnicalService />} />
          <Route path="/property-card" element={<PropertyCard />} />
          <Route path="/PropertiesDetail/:propertyId" element={<PropertiesDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
