import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BedIcon } from '../../icons/camera.svg';
import { ReactComponent as BathormIcon } from '../../icons/Bathorm.svg';
import GLightbox from 'glightbox';

const PropertyCardItem = ({ property }) => {

    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox', 
        });

        return () => {
            lightbox.destroy(); 
        };
    }, []);

    return (
        <div className='col-md-4 mb-30'>
            <article className="featured__card">
                <div className="featured__thumbnail position-relative">
                    <div className="media">
                        <Link className="featured__thumbnail--link" >
                            <img className="featured__thumbnail--img" src={property.image} alt="featured-img" />
                        </Link>
                    </div>
                    <div className="featured__badge">
                        <span className="badge__field">{property.badge1}</span>
                        <span className="badge__field style2">{property.badge2}</span>
                    </div>
                    <ul className="featured__action">
                        <li className="featured__action--items">
                            <Link to={property.image} className="featured__action--btn glightbox" data-gallery="properties-view" >
                                <i className="bi bi-camera" style={{ fontSize: "22px" }}></i>
                            </Link>
                        </li>
                        <li className="featured__action--items">
                            <Link className="featured__action--btn" to="javascript:void(0)">
                                <i className="bi bi-heart" style={{ fontSize: "22px" }}></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="featured__content">
                    <div className="featured__content--top d-flex align-items-center justify-content-between">
                        <h3 className="featured__card--title">
                            <Link to="listing-details.html">{property.title}</Link>
                        </h3>
                        <span className="featured__card--price">{property.price}</span>
                    </div>
                    <p className="featured__content--desc">
                        <i className="bi bi-geo-alt-fill" style={{ fontSize: "14px" }}></i>
                        {property.location}
                    </p>
                    <ul className="featured__info d-flex">
                        <li className="featured__info--items">
                            <span className="featured__info--icon">
                                {property.bedrooms}
                                <BedIcon />
                            </span>
                            <span className="featured__info--text">Bedrooms</span>
                        </li>
                        <li className="featured__info--items">
                            <span className="featured__info--icon">
                                {property.bathrooms}
                                <BathormIcon />
                            </span>
                            <span className="featured__info--text">Bathrooms</span>
                        </li>

                        <li className="featured__info--items">
                            <Link to={`/PropertiesDetail/${property.id}`} >
                                <button>View More</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    );
};

export default PropertyCardItem;
