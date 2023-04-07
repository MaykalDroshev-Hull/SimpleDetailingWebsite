import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Transition from './Transition'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <NavBar />
        <Transition>
          <main>
            {children}
          </main>
        </Transition>
        <div className={styles.footerWrapper}>
          <footer className={styles.footer}>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout