import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useAppNavigation from '../../hooks/useAppNavigation';
import { scrollToTop } from '../../utils/smoothScroll';
import logo1 from '../../assets/images/Header/Logo1.avif';
import menubgImg from '../../assets/images/Header/menubg.avif'; 
import './header.css';

function Header() {
  const { navigateTo } = useAppNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const lastScrollY = useRef(0);

  const overlayRef = useRef(null);
  const navRef = useRef(null);
  const imgRef = useRef(null);
  const bar1Ref = useRef(null);
  const bar2Ref = useRef(null);
  const btnRef = useRef(null);

  // Reveal origin, measured from where the toggle button actually is.
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
      setShowScrollUp(currentScrollY > 200);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll on touch when menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-scroll-lock', isMenuOpen);
    document.documentElement.classList.toggle('menu-scroll-lock', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-scroll-lock');
      document.documentElement.classList.remove('menu-scroll-lock');
    };
  }, [isMenuOpen]);

  const openMenuAnimation = () => {
    const overlay = overlayRef.current;
    const nav = navRef.current;
    const imgContainer = imgRef.current;
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
      width: () => (bar1 ? bar1.offsetWidth : 62),
      duration: 0.4,
      ease: 'power2.out',
    });

    // Menu text entrance
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

    // Image entrance animation (fades in & slides gently into view)
    if (imgContainer) {
      gsap.fromTo(
        imgContainer,
        {
          x: 60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.35,
          duration: 0.9,
          ease: 'power3.out',
        }
      );
    }
  };

  const closeMenuAnimation = () => {
    const overlay = overlayRef.current;
    const nav = navRef.current;
    const imgContainer = imgRef.current;
    const bar1 = bar1Ref.current;
    const bar2 = bar2Ref.current;

    // Hide menu content and image first
    gsap.to(nav, {
      opacity: 0,
      x: 50,
      duration: 0.25,
      ease: 'power2.in',
    });

    if (imgContainer) {
      gsap.to(imgContainer, {
        opacity: 0,
        x: 30,
        duration: 0.25,
        ease: 'power2.in',
      });
    }

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

  const handleScrollToTop = () => {
    scrollToTop(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`header-container ${
          isScrolled ? 'scrolled' : ''
        } ${isMenuOpen ? 'menu-open' : ''} ${
          isHidden && !isMenuOpen ? 'header-hidden' : ''
        }`}
      >
        <div className="header-content">
          {/* LOGO */}
          <a
            href="/"
            className="header-logo-link"
            aria-label="GR Reddy Eye Hospital Home"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
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
          </a>

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

      {/* FULLSCREEN MENU OVERLAY */}
      <div ref={overlayRef} className="menu-overlay">
        <div className="menu-wrapper">
          {/* Left Navigation Links */}
          <nav ref={navRef} className="fullscreen-nav">
            <a
              href="/"
              className="fullscreen-nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/');
                closeMenu();
              }}
            >
              Home
            </a>

            <a
              href="/about"
              className="fullscreen-nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/about');
                closeMenu();
              }}
            >
              About Us
            </a>

            <a
              href="/service"
              className="fullscreen-nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/service');
                closeMenu();
              }}
            >
              Services
            </a>
          </nav>

          {/* Right Image Container */}
          <div ref={imgRef} className="menu-image-container">
            <img
              src={menubgImg}
              alt="GR Reddy Doctors"
              className="menu-bg-img"
            />
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        className={`scroll-up-btn ${showScrollUp && !isMenuOpen ? 'visible' : ''}`}
        onClick={handleScrollToTop}
        aria-label="Scroll up to top"
        title="Scroll up to top"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FEE89D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
}

export default Header;