import { Icon, Layout, PageHeader } from "@/components";
import { QUIZ_LEVELS, QUIZ_TYPES } from "@/constants";
import { useQuizType } from "@/hooks";
import { Params } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps = async ({ params }: Params) => {
  const { quizType } = params;

  const isValidQuizType = QUIZ_TYPES.some((quiz) => quiz.path === quizType);

  if (!isValidQuizType) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default function QuizTypePage() {
  const {
    query: { quizType },
  } = useRouter();

  const { getQuizTypeLabel } = useQuizType();

  function renderQuizLevels() {
    return QUIZ_LEVELS.map((level) => {
      const { id, label, path: levelPath } = level;

      return (
        <Link
          key={id}
          href={`${quizType}/${levelPath}`}
          className="card-option px-4 flex items-center justify-between "
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
    <Layout>
      <PageHeader title={getQuizTypeLabel(quizType as string)} />
      <div className="card h-full">
        <span className="text-center block py-4">Select a level</span>
        {renderQuizLevels()}
      </div>
    </Layout>
  );
}
