import "animate.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Enhance Your English with Our Enjoyable Quizzes!</title>
        <meta
          name="description"
          content="Improve your English skills with our fun and interactive quizzes. Take Our Quizzes and test your knowledge!"
        />
      </Head>
      <main className={`h-full py-6 px-4`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
