import React, { useState, useEffect } from 'react';
import logo1 from '../../assets/images/HomePage/Logo1.png';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Logo Section */}
        <a href="/" className="header-logo-link" aria-label="GR Reddy Eye Hospital Home">
          <img src={logo1} alt="GR Reddy Eye Hospital Logo" className="header-logo-img" />
          <div className="header-logo-text">
            <span className="logo-title">GR REDDY</span>
            <span className="logo-subtitle">EYE HOSPITAL</span>
          </div>
        </a>

        {/* Hamburger Menu Toggle Button matching exact visual spec */}
        <button 
          className={`menu-toggle-btn ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            /* Close 'X' SVG Icon */
            <svg className="menu-icon close-icon" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L22 18" stroke="#0f3443" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18L22 6" stroke="#0f3443" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            /* Staggered 3-line Hamburger SVG Icon matching user screenshot */
            <svg className="menu-icon hamburger-icon" width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2" y1="4" x2="30" y2="4" stroke="#0f3443" strokeWidth="3" strokeLinecap="round" />
              <line x1="8" y1="12" x2="30" y2="12" stroke="#0f3443" strokeWidth="3" strokeLinecap="round" />
              <line x1="16" y1="20" x2="30" y2="20" stroke="#0f3443" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Slide-down Nav Overlay */}
      <div className={`nav-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <nav className="nav-menu" onClick={(e) => e.stopPropagation()}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>About Us</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
