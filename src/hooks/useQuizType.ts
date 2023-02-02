import { QUIZ_TYPES } from "@/constants";

export function useQuizType() {
  function getQuizTypeLabel(quizType: string) {
    const selectedQuiz = QUIZ_TYPES.find((quiz) => quiz.path === quizType);

    return selectedQuiz?.label || "";
  }

  return {
    getQuizTypeLabel,
  };
}
