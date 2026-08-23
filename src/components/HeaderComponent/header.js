import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import logo1 from '../../assets/images/HomePage/Logo1.png';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const overlayRef = useRef(null);
  const navRef = useRef(null);
  const bar1Ref = useRef(null);
  const bar2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openMenuAnimation = () => {
    const overlay = overlayRef.current;
    const nav = navRef.current;
    const bar1 = bar1Ref.current;
    const bar2 = bar2Ref.current;

    // Open circular overlay
    gsap.set(overlay, {
      pointerEvents: 'auto',
    });

    gsap.to(overlay, {
      clipPath: 'circle(150% at calc(100% - 4rem) 4rem)',
      duration: 0.8,
      ease: 'power4.inOut',
    });

    // Hamburger → X
    gsap.to(bar1, {
      y: 5,
      rotate: 45,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(bar2, {
      y: -5,
      rotate: -45,
      width: '62px',
      duration: 0.4,
      ease: 'power2.out',
    });

    // Menu entrance
    gsap.fromTo(
      nav,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.8,
        ease: 'power4.out',
      }
    );
  };

  const closeMenuAnimation = () => {
    const overlay = overlayRef.current;
    const nav = navRef.current;
    const bar1 = bar1Ref.current;
    const bar2 = bar2Ref.current;

    // Hide menu content first
    gsap.to(nav, {
      opacity: 0,
      x: 50,
      duration: 0.25,
      ease: 'power2.in',
    });

    // Close circular overlay
    gsap.to(overlay, {
      clipPath: 'circle(0% at calc(100% - 4rem) 4rem)',
      duration: 0.7,
      delay: 0.05,
      ease: 'power4.inOut',
      onComplete: () => {
        gsap.set(overlay, {
          pointerEvents: 'none',
        });
      },
    });

    // X → Hamburger
    gsap.to(bar1, {
      y: 0,
      rotate: 0,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(bar2, {
      y: 0,
      rotate: 0,
      width: '42px',
      duration: 0.4,
      ease: 'power2.out',
    });

  };

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      openMenuAnimation();
    } else {
      setIsMenuOpen(false);
      closeMenuAnimation();
    }
  };

  const closeMenu = () => {
    if (!isMenuOpen) return;

    setIsMenuOpen(false);
    closeMenuAnimation();
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`header-container ${
          isScrolled ? 'scrolled' : ''
        } ${isMenuOpen ? 'menu-open' : ''}`}
      >
        <div className="header-content">

          {/* LOGO */}
          <Link
            to="/"
            className="header-logo-link"
            aria-label="GR Reddy Eye Hospital Home"
          >
            <img
              src={logo1}
              alt="GR Reddy Eye Hospital Logo"
              className="header-logo-img"
            />

            <div className="header-logo-text">
              <span className="logo-title">GR REDDY</span>
              <span className="logo-subtitle">EYE HOSPITAL</span>
            </div>
          </Link>

          {/* MENU BUTTON */}
          <button
            className={`menu-toggle-btn ${
              isMenuOpen ? 'active' : ''
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span
              ref={bar1Ref}
              className="menu-line menu-line-1"
            />

            <span
              ref={bar2Ref}
              className="menu-line menu-line-2"
            />

           
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <div
        ref={overlayRef}
        className="menu-overlay"
      >
        <nav
          ref={navRef}
          className="fullscreen-nav"
        >
          <Link
            to="/"
            className="fullscreen-nav-link"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="fullscreen-nav-link"
            onClick={closeMenu}
          >
            About Us
          </Link>

          <Link
            to="/service"
            className="fullscreen-nav-link"
            onClick={closeMenu}
          >
            Services
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;