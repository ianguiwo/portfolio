// app/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth dark">
      <Head>
        {/* Tailwind CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.14/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
