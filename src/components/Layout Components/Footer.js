import Link from 'next/link'
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'
import styles from '../../styles/Component Styles/Footer.module.css'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

/**
 * The Footer component displays the footer section of the website, including social icons, menu items, and a wave effect container.
 * @returns {JSX.Element} The JSX code for the Footer component.
 */
const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className={styles.footer}>
      <img className={styles.logo} src='/Images/logo.png' alt='logo' />
      <div className={styles.infoSection}>
        <div className={styles.contactItem}>
        <FaMapMarkerAlt className={styles.infoicon} />
        <a href="https://maps.app.goo.gl/YsUPpgVaKgff7N816" target="_blank" rel="noopener noreferrer">
          <span>{t("Address")}</span>
        </a>
        </div>
        <div className={styles.contactItem}>
        <FaCalendarAlt className={styles.infoicon} />
        <span>{t("WorkingDays")}</span>
        </div>
        <div className={styles.contactItem}>
          <FaClock className={styles.infoicon} />
          <span>{t("WorkingHours")}</span>
        </div>
      </div>
        <div className={styles.socialIcon}>
          <Link href='https://www.facebook.com/profile.php?id=100063618235937'>
            <FaFacebook />
          </Link>
          <Link href='https://www.instagram.com/aychin_mehmed7/'>
            <FaInstagram />
          </Link>
           {/* Phone Link */}
      <Link href='tel:+359876423782'>
        <FaPhone />
      </Link>

      {/* Email Link */}
      <Link href='mailto:detailingaseam@gmail.com'>
        <FaEnvelope/>
      </Link>
        </div>
        <div className={styles.menu}>
          <li><Link href="/">{t("Home")}</Link></li>
          <li><Link href="/about">{t("About")}</Link></li>
          <li><Link href="/services">{t("Services")}</Link></li>
          <li><Link href="/contact">{t("Contacts")}</Link></li>
        </div>
        <p className={styles.p} >{t("Creator")}</p>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default Footer