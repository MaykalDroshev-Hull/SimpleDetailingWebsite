import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <br/>
      <div className={styles.trueHeader}>
        <NavBar />
        <p className={styles.headerTitle}>Gentry's Auto Detailing</p>
      </div>
      <br />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout