//TODO: Need to make it so that it becomes a different type of menu when the size is less than 768 px
//TODO: The navbar jumps immediately when you start scrolling

import Link from "next/link"
import styles from '../styles/NavBar.module.css'

const NavBar = ({ isSticky }) => {
  return (
    <div className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
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