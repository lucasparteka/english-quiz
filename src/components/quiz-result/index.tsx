import { useQuiz } from "@/contexts";
import Link from "next/link";
import { useRouter } from "next/router";

type Stat = {
  label: string;
  value: string | number;
};

export function QuizResult() {
  const {
    query: { level, quizType },
    asPath,
  } = useRouter();

  const { score, answeredQuestions, isGameOver, life } = useQuiz();

  const stats: Stat[] = [
    {
      label: "Level",
      value: level as string,
    },
    {
      label: "Questions",
      value: answeredQuestions,
    },
    {
      label: "Wrong",
      value: isGameOver ? 3 : 3 - life,
    },
    {
      label: "Correct",
      value: isGameOver ? answeredQuestions - 3 : answeredQuestions - life,
    },
  ];

  function renderStats() {
    return stats.map((stat) => (
      <div key={stat.label} className="flex justify-between border-b pb-2 mb-3">
        <span>{stat.label}</span>
        <span className="font-medium text-gray-800">{stat.value}</span>
      </div>
    ));
  }

  function resolveTitle() {
    if (isGameOver) {
      return "Game over 😔";
    }

    return "Completed quiz 🏁";
  }

  return (
    <div
      className={`card h-full flex flex-col animate__animated animate__bounceIn`}
    >
      <h1 className="text-3xl text-center font-medium">{resolveTitle()}</h1>
      <div
        className="
          rounded-full my-5 bg-violet-100 border-4 border-violet-500 flex items-center justify-center text-violet-500 font-bold w-[100px] h-[100px] mx-auto"
      >
        {score} pts
      </div>
      <div className="text-gray-500 px-5">{renderStats()}</div>
      <div className="pt-5 px-5 flex flex-col gap-2 mt-auto">
        <a href={asPath} className="btn-outline w-full block">
          Play again
        </a>
        <Link href={`/${quizType}`} className="btn-outline w-full block">
          Change level
        </Link>
        <Link href="/" className="btn-outline w-full block">
          Back to home
        </Link>
      </div>
    </div>
  );
}
