import Layout from "@/components/Layout"
import { Nunito } from 'next/font/google'
import styles from '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const nunito = Nunito({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

