import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTiktok} from 'react-icons/fa'
import styles from '../../styles/Component Styles/Footer.module.css'

/**
 * Modern Footer component with organized sections and professional design.
 * @returns {JSX.Element} The JSX code for the Footer component.
 */
const Footer = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLocale = router.locale || 'bg'
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
                  {t('FooterDescription')}
                </p>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>{t('FooterContacts')}</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <a
                    href="https://maps.app.goo.gl/YsUPpgVaKgff7N816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    {t('FooterAddress')}
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
              <h3 className={styles.sectionTitle}>{t('FooterWorkingHours')}</h3>
              <div className={styles.businessHours}>
                <div className={styles.hoursItem}>
                  <FaCalendarAlt className={styles.hoursIcon} />
                  <span>{t('WorkingDays')}</span>
                </div>
                <div className={styles.hoursItem}>
                  <FaClock className={styles.hoursIcon} />
                  <span>{t('WorkingHours')}</span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>{t('FooterQuickLinks')}</h3>
              <nav className={styles.footerNav}>
                <Link href="/" className={styles.footerLink}>{t('Home')}</Link>
                <Link href="/about" className={styles.footerLink}>{t('About')}</Link>
                <Link href="/services" className={styles.footerLink}>{t('Services')}</Link>
                <Link href="/reviews" className={styles.footerLink}>{t('Reviews')}</Link>
                <Link href="/contact" className={styles.footerLink}>{t('Contacts')}</Link>
              </nav>
            </div>

          </div>

          {/* Social Media Section */}
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>{t('FooterFollowUs')}</h3>
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
              <a
                href='https://www.tiktok.com/@aseam_detailing'
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TikTok"
              >
                <FaTiktok />
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
              {t('FooterCopyright')}
            </p>
            <p className={styles.credits}>
              {t('FooterCreatedBy')} <a href={`https://hm-wspro.vercel.app/${currentLocale}`} className={styles.creditLink}>{t('Creator')}</a> | <a href={`https://hm-wspro.vercel.app/${currentLocale}`} target="_blank" rel="noopener noreferrer" className={styles.creditLink}>H&M WS Pro</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer