import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/Component Styles/NavBar.module.css';

/**
 * A navigation bar component for Gentry's Auto Detailing website.
 * @returns JSX element displaying navigation links and website title.
 */
const NavBar = () => {
  return (
    <div className={styles.header}>
      {/* Contact Info Section */}

      <div className={styles.contactDetails}>
  <div className={styles.contactItem}>
    <FontAwesomeIcon icon={faPhone} className={styles.icon} />
    {/* <faPhone/> */}
    <a href="tel:+359876423782">+359876423782</a>
  </div>
  <div className={styles.contactItem}>
    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
    <a href="mailto:detailingaseam@gmail.com">detailingaseam@gmail.com</a>
  </div>

      </div>

      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <Link href='/'>Начало</Link>
        <Link href='/about'>За Мен</Link>
        <Link href='/services'>Услуги</Link>
        <Link href='/contact'>Контакти</Link>
        <p className={styles.websiteTitle}>Асеа-М Детайлинг</p>

      </div>
    </div>
  );
};

export default NavBar;
