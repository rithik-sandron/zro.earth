import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <title>Zero</title>
        <meta property="og:image" content="*.vercel.app/api/og?title=Zero" />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
