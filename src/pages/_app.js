import "../styles.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (<div>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <title>Dmitry Pimenov</title>
    </Head>
    <Component {...pageProps} />
  </div>);
}
