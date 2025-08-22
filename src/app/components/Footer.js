import "../assets/css/Footer.css"; // import CSS


// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-5 footer-section">
      {/* Top CTA Section */}
      <div className="container mb-5">
        <div className="row align-items-center top-cta text-dark p-5">
          <div className="col-md-8">
            <h4 className=" cta-title">Do you need help?</h4>
            <p className="cta-desc mb-0">
              Need help? Our experts are ready. Get personalized <br />
              assistance for all your insurance questions. <br />
              Click to connect now
            </p>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <a href="#" className="btn cta-btn">
              Get consultation →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container pb-4 border-bottom border-secondary">
        <div className="row text-start">
          {/* Logo & Contact */}
          <div className="col-md-3 mb-4">
            <img
              src="/assets/images/logo.png"
              alt="Rewathi Logo"
              width="180"
              className="mb-3"
            />
            <ul>
              <li>
                <a href="tel:+917734924989" className="text-white-50 text-decoration-none mb-2">+91 7734924989</a>
              </li>
              <li>
                <a href="mailto:sales@rewathi.com mb-0" className="text-white-50 text-decoration-none mb-2">sales@rewathi.com</a>
              </li>
            </ul>


          </div>

          {/* Services */}
          <div className="col-md-2 mb-4 f-items">
            <h6 className="text-uppercase small mb-3 f-title">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Digital Commerce</a></li>
              <li><a href="#" className="text-white-50">Digital Transformation</a></li>
              <li><a href="#" className="text-white-50">Web Development</a></li>
            </ul>
          </div>

          {/* Industry */}
          <div className="col-md-2 mb-4 f-items">
            <h6 className="text-uppercase small mb-3">Industry</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Retail & eCommerce</a></li>
              <li><a href="#" className="text-white-50">Financial Services</a></li>
              <li><a href="#" className="text-white-50">Healthcare</a></li>
              <li><a href="#" className="text-white-50">Education</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-2 mb-4 f-items">
            <h6 className="text-uppercase small mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Privacy</a></li>
              <li><a href="#" className="text-white-50">Terms</a></li>
              <li><a href="#" className="text-white-50">Partner</a></li>
            </ul>
          </div>

          {/* Info */}
          <div className="col-md-3 mb-4 f-items">
            <h6 className="text-uppercase small mb-3">Info</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">About us</a></li>
              <li><a href="#" className="text-white-50">Career</a></li>
              <li><a href="#" className="text-white-50">Portfolio</a></li>
              <li><a href="#" className="text-white-50">Blog</a></li>
              <li><a href="#" className="text-white-50">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container text-center py-3 f-bottom-bar">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <a href="https://www.instagram.com/" target="_blank" className="me-3 text-decoration-none text-white-50">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" className="text-decoration-none text-white-50">
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>
          </div>
          <div className="text-white-50 small bottom-copyright-text">
            ©2025 Rewathi Innovations Pvt. Ltd. India, Norway and Sweden. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
