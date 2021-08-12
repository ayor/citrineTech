import '../styles/globals.css';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CITRINE Technologies Limited</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>)
}

export default MyApp
