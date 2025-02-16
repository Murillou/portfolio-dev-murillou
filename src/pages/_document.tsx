import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/icon-dev.png" />
        <title>Dev Murillou</title>
      </Head>{' '}
      <body id="root" className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
