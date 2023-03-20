import { Html, Head, Main, NextScript } from 'next/document'

//Capable of adding meta tags, but seems unnecessary as you can do that using the 'Head' import from Next
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
