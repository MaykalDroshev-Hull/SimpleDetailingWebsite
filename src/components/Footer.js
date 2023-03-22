import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={`${styles.wave} ${styles.wave1}`} />
        <div className={`${styles.wave} ${styles.wave2}`} />
        <div className={`${styles.wave} ${styles.wave3}`} />
        <div className={`${styles.wave} ${styles.wave4}`} />
      </div>
      <ul className={styles.socialIcon}>
        <Link href='https://www.facebook.com/GentrysAutoDetailing'>
          <FaFacebook className={styles.socialIcon}/>
        </Link>
      </ul>
      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services Offered</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <p>Website Designed by Lofton Gentry</p>
    </footer>
  )
}

export default Footer