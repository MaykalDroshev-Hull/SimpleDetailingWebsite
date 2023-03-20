import HamburgerMenu from './HamburgerMenu'

const Layout = ({children}) => {
  return (
    <>
      <HamburgerMenu />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout