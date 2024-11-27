import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Component Styles/NavBar.module.css";

/**
 * A navigation bar component for the website.
 * Includes responsive design with a hamburger menu on mobile.
 */
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles the menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={styles.header}>
      {/* Contact Info Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <a href="tel:+359876423782">+359876423782</a>
          </div>
          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <a href="mailto:detailingaseam@gmail.com">detailingaseam@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.logo}>
          <img 
            src="/Images/Logo.png" 
            alt="Logo" 
            className={styles.logoImage} 
          />
        </div>


        {/* Navigation Links */}
        <div
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <Link href="/">Начало</Link>
          <Link href="/about">За Нас</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/contact">Контакти</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
