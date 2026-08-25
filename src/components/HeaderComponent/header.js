import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import logo1 from '../../assets/images/HomePage/Logo1.png';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const overlayRef = useRef(null);
  const navRef = useRef(null);
  const bar1Ref = useRef(null);
  const bar2Ref = useRef(null);
  const btnRef = useRef(null);

  // Reveal origin, measured from where the toggle button actually is.
  // Previously this was a hardcoded `calc(100% - 4rem) 4rem`, written
  // inline by GSAP, which permanently beat the mobile origin in the
  // stylesheet once the menu had been opened once.
  const getRevealOrigin = () => {
    const btn = btnRef.current;
    if (!btn) return 'calc(100% - 4rem) 4rem';

    const r = btn.getBoundingClientRect();
    return `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }
      
      setIsScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // The page used to keep scrolling behind the fullscreen menu on touch.
  useEffect(() => {
    document.body.classList.toggle('menu-scroll-lock', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-scroll-lock');
    };
  }, [isMenuOpen]);

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
      clipPath: `circle(150% at ${getRevealOrigin()})`,
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
      // Match bar 1 so the two form an even X at every breakpoint
      width: () => (bar1 ? bar1.offsetWidth : 62),
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
      clipPath: `circle(0% at ${getRevealOrigin()})`,
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
      duration: 0.4,
      ease: 'power2.out',
      // Hand the width back to the stylesheet rather than a hardcoded px
      // value, so each breakpoint keeps its own bar width.
      onComplete: () => {
        gsap.set(bar2, { clearProps: 'width' });
      },
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
        } ${isMenuOpen ? 'menu-open' : ''} ${isHidden && !isMenuOpen ? 'header-hidden' : ''}`}
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
            ref={btnRef}
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