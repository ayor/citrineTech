import '../styles/globals.css';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
        <title>CITRINE Technologies Limited</title>
      </Head>
      <Layout>      
        <Script src="https://kit.fontawesome.com/2b33a4ca20.js" crossorigin="anonymous" />
        <Script id="hs-script-loader" async defer src="//js.hs-scripts.com/2761242.js" />
        <Component {...pageProps} />
      </Layout>
    </>)
}

export default MyApp
