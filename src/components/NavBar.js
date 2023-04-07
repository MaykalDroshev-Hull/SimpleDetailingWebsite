//TODO: The navbar jumps immediately when you start scrolling

import Link from "next/link"
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navBar}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/services'>Services</Link>
        <Link href='/reviews'>Reviews</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <p className={styles.websiteTitle}>Gentry's Auto Detailing</p>
    </div>
  )
}

export default NavBar