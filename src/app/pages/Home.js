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
          backgroundImage: `url(${homeData?.acf?.banner_image?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 Hero-info">
              <p className="Hero-subtitle text-uppercase small fw-bold mb-2">
                {homeData?.acf?.sub_title}
              </p>
              <h1 className="display-5 mb-4">
                 {homeData?.acf?.title}
              </h1>
              <p className="Hero-content mb-4">
                {homeData?.acf?.description}
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
          <h2 className="mt-2">{homeData?.acf?.title_1}</h2>
          <p className="desc">{homeData?.acf?.description_1}
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
              {homeData?.acf?.title_2}
            </h2>
            <p className="service-desc">
              {homeData?.acf?.description_2}
            </p>
          </div>

          {/* 3 Service Cards */}
          <div className="row cards">
          {homeData?.acf?.services_home?.map((service, index) => (
          <div className="col-md-4 service-card" key={index}>
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
                  READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
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
        <div className="text-center mb-5">
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
    <div className="mb-5 pf-logos" key={index}>
      {platform?.logo && (
        <img
          src={platform?.logo?.url}
          alt={platform?.logo?.alt || `Platform ${index + 1}`}
          className="my-3 logo-img"
        />
      )}
      <p>{platform?.description}</p>
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
    <div className="mb-5 pf-logos" key={index}>
      {platform?.logo && (
        <img
          src={platform?.logo?.url}
          alt={platform?.logo?.alt || `Platform ${index + 4}`}
          className="my-3 logo-img"
        />
      )}
      <p>{platform?.description}</p>
    </div>
  ))}
</div>
</div>
      </div>
    </section>

    </>
  );
}
