import Head from "next/head";
import About from "../components/about";

function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" property="og:title" content="정민선 - 포트폴리오" />
        <meta
          name="description"
          property="og:description"
          content="프론트엔드 개발자 | 정민선 포트폴리오"
        />
        <meta property="og:site_name" content="정민선 - 포트폴리오" />
        <meta name="image" property="og:image" content="/icons/logo.svg" />
        <meta property="og:locale" content="ko-KR" />
        {/* <meta name="url" property="og:url" content="https://www.baconbox.co" /> */}
        <meta name="type" property="og:type" content="website" />
        <title>정민선 - 포트폴리오</title>
        <link rel="icon" href="/icons/holssi.svg"></link>
      </Head>
      <About />
    </>
  );
}

export default Index;
