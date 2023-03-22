import Link from "next/link"
import styles from '../styles/Footer.module.css'
//TODO: 
// 1) Make it so the footer spans the bottom of the web page
// 2) Make it so the facebook logo appears and connects to facebook page
// 3) Better appearance for footer

const Footer = () => {
  return (
    <body>
      <footer className={styles.footer}>
        <div className={styles.footer}>         
          <div className={styles.row}>
            
          </div>
          <div className={styles.row}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/services'>Services Offered</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </footer>
    </body>
  )
}

export default Footer