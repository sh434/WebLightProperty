import React from "react";
import DynamicBanner from "../../Components/DynamicBanner/Dynamic";
import { ReactComponent as CircleIcons } from "../../icons/circle.svg";

const amenitiesData = [
  {
    amount: "HOSPITALS",
    description: "Owned from Properties transactions",
    iconClass: "bi bi-house",
  },
  {
    amount: "RESIDENTAL BUILDINGS/ SOCITIES",
    description: "Properties for Buy & sell Successfully",
    iconClass: "bi bi-shop",
  },
  {
    amount: "COLLEGE/UNIVERSITY CAMPUSES",

    description: "Daily completed transactions",
    iconClass: "bi bi-calendar-check",
  },
  {
    amount: "MALLS & CORPORATE TOWER",
    description: "Regular Clients",
    iconClass: "bi bi-person-check",
  },
];
const AdvisoryManagement = () => {
  return (
    <>
      <DynamicBanner
        backgroundImage="/assets/building-view-from-field%201.jpg"
        heading="Advisory Management"
        subheading="Learn more about our company and values."
      />

      <section className="about__section about__page--section section--padding">
        <div className="container">
          <div
            className="row pt-4"
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={100}
          >
            <div className="col-md-6">
              <h2 className="pt-5">
                Get Unbelievable Strategies for Achieving{" "}
              </h2>
              <p>
                A significant wealth needs patience, understanding of finance,
                and occasional help. Wealthy people, businesses, and investors
                may know how to build money, but there may be a knowledge gap
                between accumulation and management. Hiring professional
                advisory management services helps individuals and organizations
                manage property and assets.,
                <br />
                WPM India is the right choice if you are looking for the best
                Advisory Management service. We advise you on financial plans
                using knowledge of tax and investment strategies, securities,
                insurance, pension plans, and property management.
                <br />
                We tailor our strategies to your unique financial needs,
                ensuring that whether you are an individual investor or managing
                a business portfolio, you receive the best advice. Our goal is
                to help you navigate the complexities of wealth management and
                achieve long-term success through well-informed, strategic
                planning.
              </p>
            </div>
            <div className="col-md-6">
              <div className="position-relative overflow-hidden p-5 pe-0 approachimage">
                <img
                  style={{
                    position: "relative",
                    zIndex: "2",
                    borderRadius: "12px",
                  }}
                  src="assets/office-buildings (1) 1.jpg"
                  alt="Office buildings"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__section about__page--section section--padding">
        <div className="container">
          <div
            className="row pt-4"
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={100}
          >
            <div className="col-md-6">
              <div className="position-relative overflow-hidden p-5 pe-0 approachimage">
                <img
                  style={{
                    position: "relative",
                    zIndex: "2",
                    borderRadius: "12px",
                  }}
                  src="assets/managers-analyzing-sales-results 1.jpg"
                  alt="Managers analyzing sales results"
                />
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <h2>Understanding Advisory Management</h2>
              <p>
                Advisory management is the provision of expert, tailored
                investment guidance. Before adjusting their portfolios, the
                individuals can speak with an investment specialist through a
                professional advisory management service. <br />
                At WPM India, our specialists have more years of experience in
                more investment sectors and give advice that is suited to a
                specific individual&#39;s circumstances. We offer assistance and
                advice on different projects. So, if you are looking for the
                best advisory management solution, we&#39;ll help you.
              </p>
              <p>
                Advisory management services are tailored to the specific goals
                and risk tolerance of each individual. Advisors work closely
                with clients to develop customized strategies that align with
                their financial objectives, whether it's wealth growth,
                retirement planning, or capital preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__section about__page--section section--padding">
        <div className="container">
          <div
            className="row pt-4"
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={100}
          >
            <div className="col-md-6">
              <div className="about__thumbnail position-relative">
                <div className="about__thumbnail--list one position-relative">
                  <img
                    src="/assets/https___freepicdownloader 3.jpg"
                    alt="about-thumb"
                    className="about-thumb"
                  />
                </div>
                <div className="about__thumbnail--list two">
                  <img
                    src="/assets/delimitation-land-with-clear-sky 1.png"
                    alt="about-thumb"
                    style={{ borderRadius: "3px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 Chooseus pt-4">
              <h2>Why Choose Us</h2>

              <p class="living__details--content__list pt-2">
                <CircleIcons style={{ marginRight: "10px" }} />
                Our Priority lies in customer experience and customer
                expectation.
              </p>

              <p class="living__details--content__list  pt-2">
                <CircleIcons style={{ marginRight: "10px" }} />
                Diverse portfolio of services that provides complete turnkey
                solution to the clients.
              </p>
              <p class="living__details--content__list  pt-2">
                <CircleIcons style={{ marginRight: "10px" }} />
                Best international practices which helps in reducing operating
                costs while improving services.
              </p>

              <p class="living__details--content__list  pt-2">
                <CircleIcons style={{ marginRight: "10px" }} />
                High satisfaction and renewal rate with our clients.
              </p>
              <p class="living__details--content__list  pt-2">
                <CircleIcons style={{ marginRight: "10px" }} />
                Our Priority lies in customer experience and customer
                expectation.
              </p>
              <p class="living__details--content__list  pt-2">
                <CircleIcons style={{ marginRight: "10px" }} />
                Our clients bank on us for our ethics, expertise and excellence
                to increase the long-term value of their properties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "rgba(251, 244, 244, 1)", marginTop: "75px" }}
        className="pt-4"
      >
        <div className="container">
          <div className="row p-4">
            <div className="col-md-6">
              <h2>Properties We deals in</h2>
              <div className="row pt-2">
                {amenitiesData.map((item, index) => (
                  <div key={index} className="col-md-6 col-6">
                    <div className="amenities__icone text-center">
                      <span>
                        <i className={item.iconClass}></i>
                      </span>
                    </div>
                    <h3 className="text-dark text-center mb-2">
                      {item.amount}
                    </h3>
                    {/* <p className='text-dark text-center'>{item.description}</p> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <img
                style={{ borderRadius: "8px" }}
                src="assets/property/featured-grid1.jpg"
                alt="Thumbnail 2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvisoryManagement;
