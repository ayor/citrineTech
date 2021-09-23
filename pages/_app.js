import '../styles/globals.css';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import Script from 'next/script';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // const threeScript = document.createElement("script");
    // threeScript.setAttribute("id", "threeScript");
    // threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js");
    // document.getElementsByTagName("head")[0].appendChild(threeScript);

    const poppins = document.createElement("link"); 
    poppins.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
    poppins.setAttribute("rel", "stylesheet");

    document.getElementsByTagName("head")[0].appendChild(poppins);


    return () => {
      if (poppins) {
        poppins.remove();
      }
    }
  })
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta lang="en-us" />
        <meta name="description" content="Citrine Technologies Ltd (Citrine) is an IT company that offers timely services as
    well as a vision for technology that will grow with your business.
    "/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="" rel="stylesheet"/>
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
        <Script src="https://kit.fontawesome.com/2b33a4ca20.js" crossOrigin="anonymous" />
        <Script id="hs-script-loader" async defer src="//js.hs-scripts.com/2761242.js" />
        <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_SITE_KEY}`}></Script>
        {/* <Script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.waves.min.js"></Script> */}

        <Component {...pageProps} />
      </Layout>
    </>)
}

export default MyApp
