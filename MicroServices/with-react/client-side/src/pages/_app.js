import Head from "next/head";
import Script from "next/script";
import "../MainCSS/index.css";
import "../components/Header/index.css";
import 'tailwindcss/tailwind.css'
import "../../styles/index.css"
import "../pages/index.css";
import "../pages/text-to-image/index.css";
import "../pages/products/index.css";
import "../pages/index.css";
import "../pages/auth/login/index.css";
import "../pages/auth/register/index.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Image Creator With AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
      
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    </>
  );
}
