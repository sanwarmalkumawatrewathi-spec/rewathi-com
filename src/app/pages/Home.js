import "../assets/css/Home.css"; // import CSS
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

  if (!homeData) {
    return <p>Loading...</p>;
  }

  return (
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
      {homeData.acf?.section_1?.title ? (
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
            <h1 className="display-5 fw-bold mb-4">
              Digital Marketing Solution <br /> For Your Business
            </h1>
            <p className="Hero-content mb-4">
              Crafting cutting-edge digital solutions that help your brand thrive in the 
              ever-evolving online landscape. From creative design to strategic marketing, 
              we combine expertise and technology to deliver impactful results.
            </p>
            <div className="d-flex gap-3">
              <a
                href="#services"
                className="main-btn btn btn-warning fw-bold px-4 py-2"
              >
                Our Service
              </a>
              <a
                href="#how-it-works"
                className="btn btn-outline-light fw-bold px-4 py-2"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
          
          </div>
        </div>
      </div>
    </section>
  )
}
