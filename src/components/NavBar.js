import Link from "next/link"
import styles from '../styles/NavBar.module.css'
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/services'>Services Offered</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  )
}

export default NavBar