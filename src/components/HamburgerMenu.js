import Link from "next/link"
import styles from '../styles/HamburgerMenu.module.css'

const HamburgerMenu = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navicon}>
        <div></div>
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/services'>Services Offered</Link>
      <Link href='/contact'>Contact</Link>
    </nav>
  )
}

export default HamburgerMenu