import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans text-grayText">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}