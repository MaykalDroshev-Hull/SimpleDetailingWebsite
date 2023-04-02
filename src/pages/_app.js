import Layout from "@/components/Layout"
import { ChakraProvider } from "@chakra-ui/react";
import { Nunito } from 'next/font/google'
import '../styles/globals.css'

const nunito = Nunito({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <main className={nunito.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ChakraProvider>
  )
}

