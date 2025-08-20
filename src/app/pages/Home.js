import "../assets/css/Home.css"; // import CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from "react";

export default function Home({ homeData }) {
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or skeleton loader
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5 Hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/assets/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      >
        <div className="container">
          <div>
            <h1>Homepage ACF Datafgdgdfg</h1>
            {homeData?.acf?.section_1?.title ? (
              <p>{homeData.acf.section_1.title}</p>
            ) : (
              <p>No ACF data found</p>
            )}
          </div>
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 Hero-info">
              <p className="Hero-subtitle text-uppercase small fw-bold mb-2">
                Digital Innovation Company
              </p>
              <h1 className="display-5 mb-4">
                Digital Marketing Solution <br /> For Your Business
              </h1>
              <p className="Hero-content mb-4">
                Crafting cutting-edge digital solutions that help your brand thrive in the
                ever-evolving online landscape. From creative design to strategic marketing,
                we combine expertise and technology to deliver impactful results.
              </p>
              <div className="d-flex gap-3">
                <a href="#services" className="main-btn btn">
                  Our Service
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
                <a href="#how-it-works" className="outline-btn">
                  How It Works
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              {/* You can add image or content here */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light about-section" id="about">
        <div className="container text-center">
          <span className="subtitle">WHO WE ARE</span>
          <h2 className="mt-2">Big Enough To Deliver, Small Enough To Care</h2>
          <p className="desc">
            Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision and delivered <br></br>
            innovative solutions that helped us stand out in a competitive market. Their support throughout the process was invaluable.<br></br>
            We're thrilled with the results and look forward to our continued partnership!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section py-5 bg-light" id="services">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <span className="subtitle">OUR OFFERINGS</span>
            <h2 className="service-title">
              Digital Transformation, ECommerce & Product Engineering
            </h2>
            <p className="service-desc">
              Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision and delivered <br /> 
              innovative solutions that helped us stand out in a competitive market. Their support throughout the process was invaluable. <br /> 
              We're thrilled with the results and look forward to our continued partnership!
            </p>
          </div>

          {/* 3 Service Cards */}
          <div className="row g-4 cards">
            {/* Card 1 */}
            <div className="col-md-4 service-card-1">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <img
                  src="/assets/images/digital-commerce.jpg"
                  className="card-img-top"
                  alt="Digital Commerce"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-75 align-items-center text-white p-4">
                  <h5 className="fw-bold card-title">DIGITAL COMMERCE</h5>
                  <p className="card-desc">
                    Grow your business with our multi- <br />
                    award-winning eCommerce solutions, <br />
                    designed for exceptional growth.
                  </p>
                  <a href="#" className="btn main-btn text-white mt-2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 service-card-1">
              <div className="card border-0 shadow-sm h-100  overflow-hidden">
                <img
                  src="/assets/images/web-development.jpg"
                  className="card-img-top"
                  alt="Web Development"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-75 align-items-center text-white p-4">
                  <h5 className="fw-bold card-title">WEB DEVELOPMENT</h5>
                  <p className="card-desc">
                    Grow your business with our multi- <br />
                    award-winning eCommerce solutions, <br />
                    designed for exceptional growth.
                  </p>
                  <a href="#" className="btn main-btn text-white mt-2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 service-card-1">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <img
                  src="/assets/images/digital-transformation.jpg"
                  className="card-img-top"
                  alt="Digital Transformation"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-75 align-items-center text-white p-4">
                  <h5 className="fw-bold card-title">DIGITAL TRANSFORMATION</h5>
                  <p className="card-desc">
                    Grow your business with our multi- <br />
                    award-winning eCommerce solutions, <br />
                    designed for exceptional growth.
                  </p>
                  <a href="#" className="btn main-btn text-white mt-2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* platforms */}
      <section className="platforms-section py-5 bg-black text-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <p className="subtitle fw-bold small">PLATFORM WE SERVE</p>
          <h2 className="title">
            Industry Leading Digital Platforms
          </h2>
          <p className="text-white-emphasis pf-desc mx-auto" style={{ maxWidth: "900px" }}>
            Rewathi Digital Agency exceeded our expectations in every way. 
            They took the time to understand our vision and delivered 
            innovative solutions that helped us stand out in a competitive market. 
            Their support throughout the process was invaluable. 
            We’re thrilled with the results and look forward to our continued partnership!
          </p>
        </div>

        {/* Content Row */}
        <div className="row align-items-start g-4">
          {/* Left Logos & Text */}
          <div className="col-lg-4">
            <div className="mb-5 pf-logos">
              <img src="/assets/images/adobe-magento.png" alt="Adobe" className="my-3 logo-img" />
              <p>Provides immediate insights for timely medical interventions by analyzing patient data continuously.</p>
            </div>
            <div className="mb-5 pf-logos">
              <img src="/assets/images/salesforce-new.png" alt="Salesforce" width="auto" className="my-3 logo-img" />
              <p>Creates customized care plans using AI to ensure the most effective treatment for each patient.</p>
            </div>
            <div className="mb-5 pf-logos">
              <img src="/assets/images/outsystem.png" alt="Outsystems" className="my-3 logo-img" />
              <p>Enhances image interpretation accuracy and streamlines diagnostics with AI-powered tools.</p>
            </div>
          </div>

          {/* Middle Images */}
          <div className="col-lg-4 text-center">
            <img
              src="/assets/images/platform-1.png"
              alt="Platform Example 1"
              className="img-fluid rounded mb-4 platform-img"
            />
            <img
              src="/assets/images/platform-2.jpg"
              alt="Platform Example 2"
              className="img-fluid rounded platform-img"
            />
          </div>

          {/* Right Logos & Text */}
          <div className="col-lg-4">
            <div className="mb-5 pf-logos">
              <img src="/assets/images/microsoft.png" alt="Microsoft" className="my-3 logo-img" />
              <p>Monitors health metrics to predict issues early, enabling preventive care measures.</p>
            </div>
            <div className="mb-5 pf-logos">
              <img src="/assets/images/commercetools.png" alt="Commercetools" className="my-3 logo-img" />
              <p>Facilitates seamless communication between patients and providers for better care.</p>
            </div>
            <div className="mb-5 pf-logos">
              <img src="/assets/images/shopify.png" alt="Shopify Plus" className="my-3 logo-img" />
              <p>Enables healthcare providers to track patient health remotely, reducing the need for in-person visits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
