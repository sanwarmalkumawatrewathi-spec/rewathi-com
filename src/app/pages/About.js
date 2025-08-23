"use client"; // Mark as client-side component

import Breadcrumb from "../components/Breadcrumb";
import "../assets/css/About.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  // Counter states
  const [years, setYears] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  // Ref for slider
  const sliderRef = useRef(null);

  // Counter Animation
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setYears((prev) => (prev < 15 ? prev + 1 : prev));
      setTeam((prev) => (prev < 150 ? prev + 5 : prev));
      setClients((prev) => (prev < 3500 ? prev + 50 : prev));
      setProjects((prev) => (prev < 3500 ? prev + 50 : prev));
    }, 50);

    // Slider pause-on-hover logic
    if (sliderRef.current) {
      let animationPlaying = true;

      const pauseOnHover = () => {
        animationPlaying = false;
        sliderRef.current.style.animationPlayState = "paused";
      };

      const resumeOnHover = () => {
        animationPlaying = true;
        sliderRef.current.style.animationPlayState = "running";
      };

      sliderRef.current.addEventListener("mouseenter", pauseOnHover);
      sliderRef.current.addEventListener("mouseleave", resumeOnHover);

      // Cleanup
      return () => {
        if (sliderRef.current) {
          sliderRef.current.removeEventListener("mouseenter", pauseOnHover);
          sliderRef.current.removeEventListener("mouseleave", resumeOnHover);
        }
        clearInterval(interval);
      };
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        title="We Are Rewathi"
        subtitle="Serving organizations across multiple industries with our digital expertise"
        bgImage="/assets/images/bgImage.jpg"
      />
      {/* Who we are */}
      <section className="py-5 bg-light about-section" id="about">
        <div className="container text-center mt-5" data-aos="fade-up">
          <h6 className="subtitle">WHO WE ARE</h6>
          <h2 className="title mb-3">
            Big enough to deliver, small enough to care
          </h2>
          <p className="desc">
            Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision{" "}
            <br />
            and delivered innovative solutions that helped us stand out in a competitive market. Their support throughout
            the <br />
            process was invaluable. We're thrilled with the results and look forward to our continued partnership!
          </p>
          <a href="#" className="btn main-btn text-white mt-2">
            READ MORE <i className="fa-solid fa-chevron-right ms-2"></i>
          </a>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-5 stats-section">
        <div className="container">
          <div className="row align-items-center gx-5">
            {/* Left side */}
            <div className="stats-info col-md-6 mb-4 mb-md-0 text-center text-md-start">
              <h2 className="">Big Enough To Deliver, Small</h2>
              <p className="mt-3 desc text-muted text-center text-md-start">
                Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision
                and delivered innovative solutions that helped us stand out in a competitive market.
              </p>
              <a href="#" className="btn main-btn mt-3">
                READ MORE →
              </a>
            </div>

            {/* Right side (Counter Box) */}
            <div className="col-md-6">
              <div className="stats-counter text-white">
                <div className="row text-start">
                  <div className="col-6 mb-4">
                    <h3 className="stats-number">{years}+</h3>
                    <p className="stats-label">Years of experience</p>
                  </div>
                  <div className="col-6 mb-4">
                    <h3 className="stats-number">{team}+</h3>
                    <p className="stats-label">Full Time Technical Team</p>
                  </div>
                  <div className="col-6">
                    <h3 className="stats-number">{clients}+</h3>
                    <p className="stats-label">Happy clients</p>
                  </div>
                  <div className="col-6">
                    <h3 className="stats-number">{projects}+</h3>
                    <p className="stats-label">Successful projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="py-5 mission-vision-values-section" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <div className="row justify-content-center text-center text-md-start">
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="card h-100 mission-card">
                <div className="card-body">
                  <img
                    src="/assets/images/Design Development.png"
                    alt="Mission Icon"
                    className="card-icon mb-3"
                  />
                  <h3 className="card-title">Mission</h3>
                  <p className="card-text">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard dummy text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="card h-100 vision-card">
                <div className="card-body">
                  <img
                    src="/assets/images/vision-icon.png"
                    alt="Vision Icon"
                    className="card-icon mb-3"
                  />
                  <h3 className="card-title">Vision</h3>
                  <p className="card-text">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard dummy text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 values-card">
                <div className="card-body">
                  <img
                    src="/assets/images/values-icon.png"
                    alt="Values Icon"
                    className="card-icon mb-3"
                  />
                  <h3 className="card-title">Our Values</h3>
                  <p className="card-text">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    ipsum has been the industry's standard dummy text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


 {/* joinus */}
      <section className="py-5 join-section">
        <div className="container">
          <div className="row align-items-center gx-5">
            {/* Left side */}
            <div className="join-info col-md-6 mb-4 mb-md-0">
              <h2 className="">Big Enough To Deliver, Small</h2>
              <p className="mt-3 desc text-muted">
                Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision
                and delivered innovative solutions that helped us stand out in a competitive market.
              </p>
              <a href="#" className="btn main-btn mt-3">
                READ MORE →
              </a>
            </div>

            {/* Right side (image Box) */}
            <div className="col-md-6">
              <div className="text-white">
                 <img
                    src="/assets/images/join.jpg"
                    alt=""
                    className="img-fluid rounded mb-3"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* client log */}
      <section className="py-5 client-logo-section">
        <div className="container">
          <div className="logo-slider-container">
            <div className="logo-slider" ref={sliderRef}>
              <img src="/assets/images/lighthouse.png" alt="Lighthouse Logo" className="logo-item" />
              <img src="/assets/images/brocken.png" alt="Brocken Production Logo" className="logo-item" />
              <img src="/assets/images/astorry.png" alt="Astorry Logo" className="logo-item" />
              <img src="/assets/images/media.png" alt="Dirro Media Logo" className="logo-item" />
              <img src="/assets/images/mirolly.png" alt="Mirolly Group Logo" className="logo-item" />
              <img src="/assets/images/steel.png" alt="Strong Steal Logo" className="logo-item" />
              {/* Duplicate logos for infinite loop */}
              <img src="/assets/images/lighthouse.png" alt="Lighthouse Logo" className="logo-item" />
              <img src="/assets/images/brocken.png" alt="Brocken Production Logo" className="logo-item" />
              <img src="/assets/images/astorry.png" alt="Astorry Logo" className="logo-item" />
              <img src="/assets/images/media.png" alt="Dirro Media Logo" className="logo-item" />
              <img src="/assets/images/mirolly.png" alt="Mirolly Group Logo" className="logo-item" />
              <img src="/assets/images/steel.png" alt="Strong Steal Logo" className="logo-item" />  
            </div>
          </div>
        </div>
      </section>
    </>
  );
}