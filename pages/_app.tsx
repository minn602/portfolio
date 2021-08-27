import Layout from "../components/layout";
import Cursor from "../components/common/cursor";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Cursor />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
