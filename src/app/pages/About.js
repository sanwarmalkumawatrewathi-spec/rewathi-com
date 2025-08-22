import Breadcrumb from "../components/Breadcrumb"; 
import "../assets/css/About.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from "react";

export default function AboutPage() {
  // Counter states
  const [years, setYears] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  // Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setYears((prev) => (prev < 15 ? prev + 1 : prev));
      setTeam((prev) => (prev < 150 ? prev + 5 : prev));
      setClients((prev) => (prev < 3500 ? prev + 50 : prev));
      setProjects((prev) => (prev < 3500 ? prev + 50 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        title="We Are Rewathi"
        subtitle="Serving organizations across multiple industries with our digital expertise"
        bgImage="/images/about-bg.jpg"
      />
      {/* Who we are */}
      <section className="py-5 bg-light about-section" id="about">
        <div className="container text-center mt-5" data-aos="fade-up">
          <h6 className="subtitle">WHO WE ARE</h6>
          <h2 className="title mb-3">
            Big enough to deliver, small enough to care
          </h2>
          <p className="desc">
            Rewathi Digital Agency exceeded our expectations in every way. They took the time to understand our vision <br />
            and delivered innovative solutions that helped us stand out in a competitive market. Their support throughout the <br />
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
            <div className="stats-info col-md-6 mb-4 mb-md-0">
              <h2 className="">Big Enough To Deliver, Small</h2>
              <p className="mt-3 desc text-muted">
                Rewathi Digital Agency exceeded our expectations in every way. They
                took the time to understand our vision and delivered innovative
                solutions that helped us stand out in a competitive market.
              </p>
              <a href="#" className="btn main-btn mt-3">
                READ MORE →
              </a>
            </div>

            {/* Right side (Counter Box) */}
            <div className=" col-md-6">
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
    </>
  );
}
