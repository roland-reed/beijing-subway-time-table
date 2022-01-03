import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='application-name' content='北京地铁时刻表' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='北京地铁时刻表' />
          <meta name='description' content='北京地铁时刻表' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#15017e' />

          <link rel='apple-touch-icon' href='/logo-512x512.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/logo-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/logo-180x180.pn' />
          <link rel='apple-touch-icon' sizes='167x167' href='/logo-167x167.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/logo-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/logo-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument