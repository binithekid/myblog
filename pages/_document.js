import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;800;900&display=swap'
            rel='stylesheet'
          />
          <title>BenTech. </title>
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='/images/favicon.png'
          />
          <meta
            name='description'
            content='BenTech serves as a platform to share insights and musings on the intersection of tech, self-improvement, innovation, and entrepreneurship.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
