import Link from 'next/link'
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'
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
          <li><Link href="/services">Продукти</Link></li>
          <li><Link href="/contact">Контакти</Link></li>
        </div>
        <p className={styles.p} >Изработка от Майкъл Дрошев</p>
      </div>
    </>
  )
}

export default Footer