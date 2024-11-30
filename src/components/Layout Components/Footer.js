import Link from 'next/link'
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'
import styles from '../../styles/Component Styles/Footer.module.css'

/**
 * The Footer component displays the footer section of the website, including social icons, menu items, and a wave effect container.
 * @returns {JSX.Element} The JSX code for the Footer component.
 */
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
      <img className={styles.logo} src='/Images/logo.png' alt='logo' />
      <div className={styles.infoSection}>
        <div className={styles.contactItem}>
        <FaMapMarkerAlt className={styles.infoicon} />
        <a href="https://maps.app.goo.gl/YsUPpgVaKgff7N816" target="_blank" rel="noopener noreferrer">
          <span>Ловеч 5500, бул. “Освобождение” №3</span>
        </a>
        </div>
        <div className={styles.contactItem}>
        <FaCalendarAlt className={styles.infoicon} />
        <span>Понеделник - Петък</span>
        </div>
        <div className={styles.contactItem}>
          <FaClock className={styles.infoicon} />
          <span>9:30 до 17:30</span>
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
          <li><Link href="/">Начало</Link></li>
          <li><Link href="/about">За Мен</Link></li>
          <li><Link href="/services">Услуги</Link></li>
          <li><Link href="/contact">Контакти</Link></li>
        </div>
        <p className={styles.p} >Изработка от Майкъл Дрошев</p>
      </div>
    </>
  )
}


export default Footer