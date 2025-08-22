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
  className="py-5 Hero-section d-flex align-items-center position-relative"
  style={{
    backgroundImage: `url(${homeData?.acf?.banner_image?.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px",
  }}
>
  {/* Smoky Overlay */}
  <div className="smoke-overlay"></div>

  <div className="container position-relative">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-lg-6 Hero-info">
        <p className="Hero-subtitle text-uppercase small fw-bold mb-2">
          {homeData?.acf?.sub_title}
        </p>
        <h1 className="display-5 mb-4">{homeData?.acf?.title}</h1>
        <p className="Hero-content mb-4">{homeData?.acf?.description}</p>
        <div className="d-flex flex-column flex-md-row gap-3">
          <a href="#services" className="main-btn btn">
            Our Service
            <i className="fa-solid fa-chevron-right ms-2"></i>
          </a>
          <a href="#how-it-works" className="outline-btn">
            How It Works
            <i className="fa-solid fa-chevron-right ms-2"></i>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6 text-center mt-4 mt-lg-0">
        {/* Right side content */}
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-5 bg-light about-section" id="about">
        <div className="container text-center" data-aos="fade-up">
          <span className="subtitle">WHO WE ARE</span>
          <h2 className="mt-2">{homeData?.acf?.title_1}</h2>
          <p className="desc">{homeData?.acf?.description_1}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section py-5" id="services">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5"data-aos="fade-up" data-aos-delay="100" >
            <span className="subtitle">OUR OFFERINGS</span>
            <h2 className="service-title">
              {homeData?.acf?.title_2}
            </h2>
            <p className="service-desc">
              {homeData?.acf?.description_2}
            </p>
          </div>

          {/* Service Cards */}
          <div className="row cards" data-aos="fade-up">
            {homeData?.acf?.services_home?.map((service, index) => (
              <div className="col-md-4 service-card my-4" key={index}>
                <div className="card border-0 shadow-sm h-100 overflow-hidden">
                  <img
                    src={service?.image?.url}
                    className="card-img-top"
                    alt={service?.image?.alt || service?.name}
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-75 align-items-center text-white p-4">
                    <h5 className="fw-bold card-title">{service?.name}</h5>
                    <p className="card-desc">{service?.description}</p>
                    <a href="#" className="btn main-btn text-white mt-2">
                      READ MORE <i className="fa-solid fa-chevron-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* platforms */}
      <section className="platforms-section py-5 bg-black text-white">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="subtitle fw-bold small">PLATFORM WE SERVE</p>
            <h2 className="title">
              Industry Leading Digital Platforms {homeData?.acf?.platform_title}
            </h2>
            <p className="text-white-emphasis pf-desc mx-auto" style={{ maxWidth: "900px" }}>
              {homeData?.acf?.platform_description}
            </p>
          </div>


          <div className="row align-items-start g-4">
            {/* Left Logos & Text */}
            <div className="col-lg-4">
              {homeData?.acf?.platforms?.slice(0, 3).map((platform, index) => (
                <div className="mb-md-5 pf-logos d-flex flex-column align-items-center align-items-md-start" data-aos="fade-up" key={index}>
                  {platform?.logo && (
                    <img
                      src={platform?.logo?.url}
                      alt={platform?.logo?.alt || `Platform ${index + 1}`}
                      className="my-3 logo-img"
                    />
                  )}
                  <p className="text-center text-md-start">{platform?.description}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-4 text-center">
              <img src={homeData?.acf?.platform_middle_image_1?.url} alt="Platform Example 1" className="img-fluid rounded mb-4 platform-img" />
              <img src={homeData?.acf?.platform_middle_image_2?.url} alt="Platform Example 2" className="img-fluid rounded platform-img" />
            </div>
            {/* Right Logos & Text */}
            <div className="col-lg-4">
              {homeData?.acf?.platforms?.slice(3, 6).map((platform, index) => (
                <div className="mb-md-5 pf-logos d-flex flex-column align-items-center align-items-md-start" data-aos="fade-up" key={index}>
                  {platform?.logo && (
                    <img
                      src={platform?.logo?.url}
                      alt={platform?.logo?.alt || `Platform ${index + 4}`}
                      className="my-3 logo-img"
                    />
                  )}
                  <p className="text-center text-md-start">{platform?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section py-5">
        <div className="container text-center mt-5" data-aos="fade-up">
          <h6 className="subtitle">KEY INDUSTRIES</h6>
          <h2 className="title mb-3">
            Industries we serve
          </h2>
          <p className="desc">
            Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision <br />
            and delivered innovative solutions that helped us stand out in a competitive market. Their support throughout the <br />
            process was invaluable. We're thrilled with the results and look forward to our continued partnership!
          </p>
        </div>

        <div className="container-fluid px-0">
          <div className="row g-0 cols-2 row-cols-md-3 row-cols-lg-5">
            {/* Retail & Consumer Goods */}
            <div className="col-md-2 industry-card my-5">
              <div className="industry-overlay ">
                <h5>Retail & Consumer Goods</h5>
                <p>
                  Delivering seamless, intelligent, and personalized shopping experiences that drive
                  loyalty and delight customers globally. <br />
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </p>
              </div>
              <img
                src="/assets/images/retail.jpg"
                alt="Retail"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            {/* Financial Services */}
            <div className="col-md-2 industry-card my-5">
              <div className="industry-overlay">
                <h5>Financial Services</h5>
                <p>
                  Delivering seamless, intelligent, and personalized shopping experiences that drive
                  loyalty and delight customers globally. <br />
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </p>
              </div>
              <img
                src="/assets/images/finance.jpg"
                alt="Finance"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            {/* Manufacturing */}
            <div className="col-md-2 industry-card my-5">
              <div className="industry-overlay">
                <h5>Manufacturing</h5>
                <p>
                  Delivering seamless, intelligent, and personalized shopping experiences that drive
                  loyalty and delight customers globally. <br />
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </p>
              </div>
              <img
                src="/assets/images/manufacturing.jpg"
                alt="Manufacturing"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            {/* Healthcare */}
            <div className="col-md-2 industry-card my-5">
              <div className="industry-overlay">
                <h5>Healthcare</h5>
                <p>
                  Delivering seamless, intelligent, and personalized shopping experiences that drive
                  loyalty and delight customers globally. <br />
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </p>
              </div>
              <img
                src="/assets/images/healthcare.jpg"
                alt="Healthcare"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            {/* Fashion & Apparel */}
            <div className="col-md-2 industry-card my-5">
              <div className="industry-overlay">
                <h5>Fashion & Apparel</h5>
                <p>
                  Delivering seamless, intelligent, and personalized shopping experiences that drive
                  loyalty and delight customers globally. <br />
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </p>
              </div>
              <img
                src="/assets/images/fashion.jpg"
                alt="Fashion"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* success storeis */}
      <section className="success-stories py-5">
        <div className="container text-center mb-5" data-aos="fade-up">
          <h6 className="subtitle">OUR SUCCESS STORIES</h6>
          <h2 className="title mb-3">
            We Align Our Success With Our Clients' Success
          </h2>
          <p className="desc">
            Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision <br />
            and delivered innovative solutions that helped us stand out in a competitive market. Their support throughout the <br />
            process was invaluable. We're thrilled with the results and look forward
            to our continued partnership!
          </p>
        </div>

        {/* Image Grid */}
        <div className="container-fluid">
          <div className="row g-0 row-cols-2 row-cols-md-3 row-cols-lg-5">
            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/commerce.jpg" alt="Digital Commerce" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/house.jpg" alt="House" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/villa.jpg" alt="Villa" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/shoes.jpg" alt="Shoes" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/food.jpg" alt="Food" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/education.jpg" alt="Education" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/social.jpg" alt="Social Media" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/wedding.jpg" alt="Wedding" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/car.jpg" alt="Car" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="story-card">
                <img src="/assets/images/tree.jpg" alt="Tree" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="title"> DIGITAL COMMERCE</h3>
                    <p className="desc">Grow your business with our multi-award-winning eCommerce
                      solutions, designed for exceptional growth..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2 logo-track">
              <div className="logo-item">
                <img src="/assets/images/lighthouse.png" alt="lighthouse" />
              </div>
            </div>
            <div className="col-md-2 logo-track">
              <div className="logo-item">
                <img src="/assets/images/brocken.png" alt="brocken" />
              </div>
            </div>
            <div className="col-md-2 logo-track">
              <div className="logo-item">
                <img src="/assets/images/astorry.png" alt="" />
              </div>
            </div>
            <div className="col-md-2 logo-track">
              <div className="logo-item">
                <img src="/assets/images/media.png" alt="" />
              </div>
            </div>
            <div className="col-md-2 logo-track">
              <div className="logo-item">
                <img src="/assets/images/mirolly.png" alt="" />
              </div>
            </div>
            <div className="col-md-2 logo-track">
              <div className="logo-item">
                <img src="/assets/images/steel.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
