import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './pages/Scroll/ScrollTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Styles/global.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>

);

reportWebVitals();

