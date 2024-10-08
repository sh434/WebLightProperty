import React,{useEffect} from 'react'
import Dynamic from '../../Components/DynamicBanner/Dynamic'
import Form from '../../Components/Form/Form'
import { ReactComponent as TickIcon } from "../../icons/tickIcons.svg"
import { ReactComponent as VideoIcon } from "../../icons/video.svg"
import GLightbox from 'glightbox';
import './Services.css'


const SingleServiceView = () => {
    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox'
        });
    }, []);
    return (
        <>
            <Dynamic
                backgroundImage="/assets/building-view-from-field%201.jpg"
                heading="Single Service View"
                subheading="Learn more about our company and values."
            />
            <div><section className="services__details--section section--padding pt-5 mb-30">
                <div className="container">
                    <div className="row"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={20}>
                        <div className="col-lg-8"
                        >
                            <div className="services__details--wrapper">
                                <div className="services__details--thumbnail mb-30">
                                    <img src="/assets/property/featured-grid1.jpg" alt="img" style={{ width: "805px" }} />
                                </div>
                                <div className="services__details--content">
                                    <div className="services__details--content__step mb-30">
                                        <h2 className="services__details--title">Licensing Compliance</h2>
                                        <p className="services__details--desc">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Placeat qui ducimus illum modi? perspiciatis accusamus soluta
                                            perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
                                            Repudiandae provident to consectetur, sapiente, libero iure
                                            necessitatibus corporis nulla voluptate, quisquam aut
                                            perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut
                                            molestiae, delectus rem.
                                        </p>
                                    </div>
                                    <div className="services__details--info mb-40 d-flex">
                                        <div className="services__details--info__thumbnail position-relative">
                                            <img src="/assets/property/featured-grid3.jpg" alt="img" />
                                            <div className="bideo__play">
                                                <a
                                                    className="bideo__play--icon glightbox"
                                                    href="https://vimeo.com/115041822"
                                                    data-gallery="video"
                                                >
                                                    <VideoIcon />

                                                    <span className="visually-hidden">Video Play</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="services__details--info__content">
                                            <h3 className="services__details--info__title">
                                                Why Licensing Important ?
                                            </h3>
                                            <p className="services__details--info__desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicin elit sed do
                                                eiusmod tempor incididunt ut labore et{" "}
                                            </p>
                                            <ul className="services__details--info__ui-content">
                                                <li>
                                                    <span>
                                                        <TickIcon />
                                                    </span>{" "}
                                                    Research beyond the business plan
                                                </li>
                                                <li>
                                                    <span>
                                                        <TickIcon />
                                                    </span>
                                                    Marketing options and rates
                                                </li>
                                                <li>
                                                    <span>
                                                        <TickIcon />
                                                    </span>{" "}
                                                    The ability to turnaround consulting
                                                </li>
                                                <li>
                                                    <span>
                                                        <TickIcon />
                                                    </span>{" "}
                                                    Customer engagement matters
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="services__details--content__step">
                                        <p className="services__details--desc">
                                            Need something changed or is there something not quite working
                                            the way you envisaged? Is your van a little old and tired and
                                            need refreshing? Lorem Ipsum is simply dummy text of the
                                            printing and typesett industry. Lorem Ipsum has been the
                                            industry’s standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services__widget">
                            <div className="services__widget--step">
                                    <h2 className="widget__step--title">IMAGE GALLERY</h2>
                                    <div className="widget__img--gallery">
                                        <div className="widget__img--gallery__thumbnail mb-20">
                                            <img src="/assets/property/featured-list4.jpg" alt="img" />
                                        </div>
                                        <div className="widget__img--gallery__content">
                                            <h3 className="widget__img--gallery__title">Dental Bridges</h3>
                                            <p className="widget__img--gallery__desc">
                                                Lorem ipsum dolor sit amet, conse adipisicing elit, sed do
                                                eiusmod tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Form />
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div></>
    )
}

export default SingleServiceView