import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/Component Styles/NavBar.module.css';
import { useTranslation } from "next-i18next";
import LanguageSwitch from "../LanguageSwitch";

/**
 * A navigation bar component for Gentry's Auto Detailing website.
 * @returns JSX element displaying navigation links and website title.
 */
const NavBar = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.header}>
      {/* Contact Info Section */}
      <div className={styles.contactSection}>
        <LanguageSwitch />
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
      <br/>
      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <Link href='/'>{t("Home")}</Link>
        <Link href='/about'>{t("About")}</Link>
        <Link href='/services'>{t("Services")}</Link>
        <Link href='/contact'>{t("Contacts")}</Link>
        <p className={styles.websiteTitle}>{t("BusinessName")}</p>
      </div>
    </div>
  );
}

export default NavBar;
