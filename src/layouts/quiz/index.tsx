import { Layout, Life, PageHeader, QuizResult, Score } from "@/components";
import { useQuiz } from "@/contexts";
import classNames from "classnames";
import { useRouter } from "next/router";

export function QuizLayout() {
  const {
    query: { level },
  } = useRouter();

  const {
    currentQuiz,
    selectedOption,
    isFinished,
    isGameOver,
    isSubmitted,
    answeredQuestions,
    getOptionStatus,
    handleSelectOption,
    handleSubmitAnswer,
    getQuizTypeLabel,
  } = useQuiz();

  function resolveOptionClassName(option: string) {
    const { isSelected, isCorrect, isWrong } = getOptionStatus(option);

    return classNames({
      "border-2": !isSelected,
      "quiz-option-selected": isSelected,
      "quiz-option-correct": isCorrect,
      "quiz-option-wrong": isWrong,
    });
  }

  function resolveBulletClassName(option: string) {
    const { isSelected, isCorrect, isWrong } = getOptionStatus(option);

    return classNames({
      border: !isSelected,
      "border-gray-800 border-4": isSelected,
      "border-green-600 border-4": isCorrect,
      "border-red-500 border-4": isWrong,
    });
  }

  function resolveBtnClassName() {
    return classNames({ "btn-disabled": !selectedOption || isSubmitted });
  }

  function renderOptions(options: string[]) {
    return options.map((option, index) => (
      <button
        key={option}
        onClick={() => handleSelectOption(option)}
        className={`
          quiz-option p-4 flex items-center justify-between 
          ${resolveOptionClassName(option)}`}
      >
        <div>
          <span className="pr-2">{index + 1}.</span>
          <span className="first-letter:capitalize">{option}</span>
        </div>
        <div
          className={`rounded-full w-4 h-4 
            ${resolveBulletClassName(option)}`}
        />
      </button>
    ));
  }

  function renderQuiz() {
    if (isFinished || isGameOver) return <QuizResult />;

    if (!currentQuiz) return null;

    const { options, sentence } = currentQuiz;

    return (
      <div className="card flex flex-col flex-1 pt-3 overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="w-[110px]">
            <Score />
          </div>
          <span className="text-center text-gray-500 text-sm w-[110px]">
            Question {answeredQuestions}
          </span>
          <div className="w-[110px]">
            <Life />
          </div>
        </div>
        <div className={`pt-5`}>
          <h2 className="text-lg text-center">{sentence}</h2>
          <div className="mt-6">{renderOptions(options)}</div>
        </div>
        <button
          onClick={handleSubmitAnswer}
          className={`btn-primary w-full mt-auto ${resolveBtnClassName()}`}
          disabled={isSubmitted}
        >
          Check answer
        </button>
      </div>
    );
  }

  return (
    <Layout>
      <PageHeader title={getQuizTypeLabel()} />
      {renderQuiz()}
    </Layout>
  );
}
