import HamburgerMenu from './HamburgerMenu'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <HamburgerMenu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout