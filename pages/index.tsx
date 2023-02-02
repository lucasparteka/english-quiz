import { Icon, Layout, PageHeader } from "@/components";
import { QUIZ_TYPES } from "@/constants";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  function renderQuizTypes() {
    return QUIZ_TYPES.map((quiz) => {
      const { id, label, path } = quiz;

      return (
        <Link
          key={id}
          href={path}
          className="card-option flex items-center justify-between "
        >
          <div className="flex flex-col">
            <h4 className="card-label">{label}</h4>
          </div>
          <Icon name="arrowRight" height={20} className="stroke-gray-900" />
        </Link>
      );
    });
  }

  return (
    <>
      {/* <Head>
        <title>English Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Layout>
        <PageHeader title="English quiz" />
        <div className="card h-full">
          <span className="text-center block py-4">Select a category</span>
          {renderQuizTypes()}
        </div>
      </Layout>
    </>
  );
};

export default Home;
