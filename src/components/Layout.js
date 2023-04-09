import NavBar from './Layout Components/NavBar'
import Footer from './Layout Components/Footer'
import Transition from './Layout Components/Transition'
import styles from '../styles/Component Styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <NavBar />
        <Transition>
          <main className={styles.main}>
            {children}
          </main>
        </Transition>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout