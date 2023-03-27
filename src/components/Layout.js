import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.pageYOffset > 0)
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <NavBar isSticky={isSticky} />
      <main style={{}}>
        {children}
      </main>
    </>
  )
}

export default Layout