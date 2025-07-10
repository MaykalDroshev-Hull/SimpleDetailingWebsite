import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Component Styles/NavBar.module.css";

/**
 * A modern navigation bar component for the website.
 * Includes responsive design with smooth animations and improved UX.
 */
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggles the mobile menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close mobile menu when clicking outside
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
            <Link href="/" className={styles.navLink}>Начало</Link>
            <Link href="/about" className={styles.navLink}>За Мен</Link>
            <Link href="/services" className={styles.navLink}>Услуги</Link>
            <Link href="/contact" className={styles.navLink}>Контакти</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className={styles.mobileMenu}>
            <button 
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
          <div className={styles.mobileNavLinks} onClick={(e) => e.stopPropagation()}>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
              Начало
            </Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
              За Мен
            </Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>
              Услуги
            </Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
              Контакти
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
