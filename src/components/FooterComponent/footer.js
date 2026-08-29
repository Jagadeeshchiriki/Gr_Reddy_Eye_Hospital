import React from 'react';
import footerBg from '../../assets/images/HomePage/footerbg.png';
import './footer.css';

function Footer() {
  return (
    <footer
      className="footer-container"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-overlay">
        <div className="footer-content">
          {/* Hero Branding Section */}
          <div className="footer-hero">
            <h1 className="footer-brand-title">GR Reddy</h1>
            <h2 className="footer-brand-subtitle">Eye Hospital</h2>
          </div>

          {/* Horizontal Divider Line */}
          <div className="footer-divider"></div>

          {/* Contact Details & Social Links Section */}
          <div className="footer-middle">
            <div className="footer-contact-block">
              <h3 className="contact-heading">Contact Details</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div className="contact-text">
                    Kenal Road, Subbaraopeta,<br />
                    Tadepalligudem , West Godavari, Andhra Pradesh - 534101
                  </div>
                </li>


              </ul>
            </div>

            {/* Social Media Links */}
            <div className="footer-social-block">
              <a
                href="https://www.instagram.com/grreddyeye_hospital/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@drgrreddyeyehospital9390"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.37z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Copyright Text */}
          <div className="footer-copyright">
            © 2026 Dr.GR Reddy's Eye Hospital. Professional Vision Care.
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
