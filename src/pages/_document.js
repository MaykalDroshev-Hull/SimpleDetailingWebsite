import { Html, Head, Main, NextScript } from 'next/document'

//Capable of adding meta tags, but seems unnecessary as you can do that using the 'Head' import from Next
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
