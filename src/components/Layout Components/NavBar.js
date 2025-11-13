import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitch from "../LanguageSwitch";
import styles from "../../styles/Component Styles/NavBar.module.css";

/**
 * A modern navigation bar component for the website.
 * Includes responsive design with smooth animations and improved UX.
 */
const NavBar = () => {
  const { t } = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    
    // Add event listener for escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen]);

  // Toggles the mobile menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close mobile menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Contact Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a href="tel:+359876423782">+359 876 423 782</a>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:detailingaseam@gmail.com">detailingaseam@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={styles.navBar}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <img src="/Images/Logo.png" alt="Aseam Auto Detailing" className={styles.logoImage} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <Link href="/" className={styles.navLink}>{t('Home')}</Link>
            <Link href="/about" className={styles.navLink}>{t('About')}</Link>
            <Link href="/services" className={styles.navLink}>{t('Services')}</Link>
            <Link href="/contact" className={styles.navLink}>{t('Contacts')}</Link>
            <Link href="/reviews" className={styles.navLink}>{t('Reviews')}</Link>
            <Link href="/parfumes" className={styles.navLink}>{t('InteriorParfumes')}</Link>
            <LanguageSwitch />
          </div>

          {/* Mobile Menu Toggle */}
          <div className={styles.mobileMenu}>
            <button 
              ref={hamburgerRef}
              className={styles.hamburgerButton} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon 
                icon={menuOpen ? faTimes : faBars} 
                className={styles.hamburgerIcon} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileOverlay} ${menuOpen ? styles.showOverlay : ''}`} onClick={closeMenu}>
          <div ref={mobileMenuRef} className={styles.mobileNavLinks} onClick={(e) => e.stopPropagation()}>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
              {t('Home')}
            </Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
              {t('About')}
            </Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>
              {t('Services')}
            </Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
              {t('Contacts')}
            </Link>
            <Link href="/reviews" className={styles.mobileNavLink} onClick={closeMenu}>
              {t('Reviews')}
            </Link>
            <Link href="/parfumes" className={styles.mobileNavLink} onClick={closeMenu}>
              {t('InteriorParfumes')}
            </Link>
            <div className={styles.mobileLanguageSwitch}>
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
