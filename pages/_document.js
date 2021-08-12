import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

class MyDocument extends Document {


  render() {
    return (
      <Html lang="en">
        <Head>
          <Script src="https://use.fontawesome.com/225871c0fe.js"></Script>
          <meta charSet="UTF-8" />
          <meta lang="en-us" />
          <meta name="description" content="Citrine Technologies Ltd (Citrine) is an IT company that offers timely services as
    well as a vision for technology that will grow with your business.
    "/>
          <meta name="keywords" content="IT Project Management and Consultancy,
        Telephony and Communication, Enterprise Automation, 
        Print Management Solutions,
        Document Management Solutions, 
        Hospital Management System"/>
          <meta name="author" content="CITRINETECHLTD" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
          <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Poppins&family=Roboto:wght@500&display=swap"
            rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2761242.js"></Script>
          <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2761242.js"></Script>
        </body>
      </Html>
    )
  }
}

export default MyDocument