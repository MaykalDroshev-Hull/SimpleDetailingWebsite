import HamburgerMenu from './HamburgerMenu'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <HamburgerMenu />
      <main>
        {children}
      </main>
      <div className={styles.background}></div>
      <Footer />
    </>
  )
}

export default Layout