import { QUIZ_LEVELS } from "@/constants";
import { QuizProvider } from "@/contexts";
import { QuizLayout } from "@/layouts";
import { LevelProps, Params } from "@/types";

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = ({ params }: Params) => {
  const { level = "" } = params;

  const isValidLevel = QUIZ_LEVELS.some(
    (quizLevel) => quizLevel.path === level
  );

  if (!isValidLevel) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default function LevelPage(props: LevelProps) {
  return (
    <QuizProvider>
      <QuizLayout />
    </QuizProvider>
  );
}
