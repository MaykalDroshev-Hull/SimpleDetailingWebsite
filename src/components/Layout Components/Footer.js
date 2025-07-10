import Link from 'next/link'
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'
import styles from '../../styles/Component Styles/Footer.module.css'

/**
 * Modern Footer component with organized sections and professional design.
 * @returns {JSX.Element} The JSX code for the Footer component.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.container}>
          
          {/* Main Footer Sections */}
          <div className={styles.footerGrid}>
            
            {/* Company Info Section */}
            <div className={styles.footerSection}>
              <div className={styles.logoSection}>
                <Link href="/">
                  <img className={styles.logo} src='/Images/Logo.png' alt='Aseam Auto Detailing' />
                </Link>
                <p className={styles.companyDescription}>
                  Перфектна чистота и защита за вашия автомобил. Професионални детайлинг услуги в Ловеч.
                </p>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Контакти</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <a 
                    href="https://maps.app.goo.gl/YsUPpgVaKgff7N816" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    Ловеч 5500, бул. "Освобождение" №3
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <a href="tel:+359876423782" className={styles.contactLink}>
                    +359 876 423 782
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <a href="mailto:detailingaseam@gmail.com" className={styles.contactLink}>
                    detailingaseam@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Работно Време</h3>
              <div className={styles.businessHours}>
                <div className={styles.hoursItem}>
                  <FaCalendarAlt className={styles.hoursIcon} />
                  <span>Понеделник - Петък</span>
                </div>
                <div className={styles.hoursItem}>
                  <FaClock className={styles.hoursIcon} />
                  <span>9:30 до 17:30</span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Бързи Връзки</h3>
              <nav className={styles.footerNav}>
                <Link href="/" className={styles.footerLink}>Начало</Link>
                <Link href="/about" className={styles.footerLink}>За Мен</Link>
                <Link href="/services" className={styles.footerLink}>Услуги</Link>
                <Link href="/contact" className={styles.footerLink}>Контакти</Link>
              </nav>
            </div>

          </div>

          {/* Social Media Section */}
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Последвайте ни</h3>
            <div className={styles.socialLinks}>
              <a 
                href='https://www.facebook.com/profile.php?id=100063618235937'
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href='https://www.instagram.com/aychin_mehmed7/'
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2024 Aseam Auto Detailing. Всички права запазени.
            </p>
            <p className={styles.credits}>
              Изработка от <a href="#" className={styles.creditLink}>Майкъл Дрошев</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer