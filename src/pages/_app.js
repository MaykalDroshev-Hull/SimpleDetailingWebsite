//TODO: Need to add fade out when clicking on new page
import { useEffect } from "react"
import { Router } from "next/router"
import Layout from "@/components/Layout"
import styles from '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChageStart = () => {
      const h1 = document.querySelector('h1')
      if (h1) {
        h1.classList.remove('fade-in')
        h1.classList.add('fade-out')
      }
    }
  
    const handleRouteChangeComplete = () => {
      const h1 = document.querySelector('h1')
      if (h1) {
        h1.classList.remove('fade-out')
        h1.classList.add('fade-in')
      }
    }
  
    Router.events.on('routeChangeStart', handleRouteChageStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
  
    return () => {
      Router.events.off('routeChangeStart', handleRouteChageStart)
      Router.events.off('routerChangeComplete', handleRouteChangeComplete)
    }
  }, [])
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

