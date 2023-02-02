import { QUIZ_SUMMARY } from "@/quizzes";
import { useRouter } from "next/router";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Query, Quiz } from "@/types";
import { QUIZ_TYPES } from "@/constants";
import { updateWithInterval } from "@/utils";

export function getRandomQuiz(quizzes: Quiz[]) {
  return quizzes[Math.floor(Math.random() * quizzes.length)];
}

type OptionStatus = {
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
};

type QuizContext = {
  currentQuiz: Quiz | null;
  isFinished: boolean;
  isGameOver: boolean;
  selectedOption: string;
  isSubmitted: boolean;
  score: number;
  life: number;
  answeredQuestions: number;
  quizzes: Quiz[];
  setSelectedOption: Dispatch<SetStateAction<string>>;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  getOptionStatus: (option: string) => OptionStatus;
  handleSubmitAnswer: () => void;
  handleSelectOption: (option: string) => void;
  getQuizTypeLabel: () => string;
};

const initialState: QuizContext = {
  currentQuiz: null,
  isGameOver: false,
  isFinished: false,
  isSubmitted: false,
  selectedOption: "",
  score: 0,
  life: 3,
  answeredQuestions: 0,
  quizzes: [],
  setSelectedOption: () => {},
  setIsSubmitted: () => {},
  getOptionStatus: () => ({
    isCorrect: false,
    isSelected: false,
    isWrong: false,
  }),
  handleSubmitAnswer: () => {},
  getQuizTypeLabel: () => "",
  handleSelectOption: () => {},
};

const QuizContext = createContext<QuizContext>(initialState);

const QuizProvider = ({ children }: { children: JSX.Element }) => {
  const { query } = useRouter();
  const { quizType, level = "" } = query as Query;
  const quizzes = QUIZ_SUMMARY?.[quizType]?.[level] || [];

  const [isSubmitted, setIsSubmitted] = useState(initialState.isSubmitted);
  const [selectedOption, setSelectedOption] = useState(
    initialState.selectedOption
  );
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(
    initialState.currentQuiz
  );
  const [remainingQuizzes, setRemainingQuizzes] = useState<Quiz[]>(quizzes);
  const [score, setScore] = useState(initialState.score);
  const [life, setLife] = useState(initialState.life);
  const [isFinished, setIsFinished] = useState(false);

  const answeredQuestions = quizzes.length - remainingQuizzes.length;
  const isGameOver = life === 0;

  useEffect(() => {
    getNextQuestion();
  }, []);

  useEffect(() => {
    if (!isSubmitted) return;

    // setTimeout(() => {
    handleGamification();
    // }, 1500);
  }, [isSubmitted]);

  function getNextQuestion() {
    const randomQuiz = getRandomQuiz(remainingQuizzes);
    setCurrentQuiz(randomQuiz);
    setRemainingQuizzes(
      remainingQuizzes.filter((quiz) => quiz.id !== randomQuiz.id)
    );
  }

  function getOptionStatus(option: string) {
    const isSelected = selectedOption === option;
    const isCorrect = isSubmitted && option === currentQuiz?.correctAnswer;
    const isWrong =
      isSubmitted &&
      option === selectedOption &&
      option !== currentQuiz?.correctAnswer;

    return { isSelected, isCorrect, isWrong };
  }

  function handleGamification() {
    const { isCorrect, isWrong } = getOptionStatus(selectedOption);

    const hasNextQuestion = remainingQuizzes.length > 0;
    const shouldGetNextQuestion =
      (hasNextQuestion && isWrong && life > 1) || isCorrect;

    if (isCorrect) {
      updateWithInterval(() => setScore((prev) => prev + 1));
    }

    if (isWrong) {
      updateWithInterval(() => setScore((prev) => Math.max(prev - 1, 0)));

      if (life === 1) {
        setTimeout(() => {
          setLife((prev) => prev - 1);
        }, 1200);
      }

      if (life > 1) {
        setLife((prev) => prev - 1);
      }
    }

    if (shouldGetNextQuestion) {
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedOption("");
        getNextQuestion();
      }, 1200);
    }

    if (!hasNextQuestion) {
      setIsFinished(true);
    }
  }

  function handleSubmitAnswer() {
    if (!selectedOption || isSubmitted) return;

    setIsSubmitted(true);
  }

  function handleSelectOption(option: string) {
    if (isSubmitted) return;

    setSelectedOption(option);
  }

  function getQuizTypeLabel() {
    const selectedQuiz = QUIZ_TYPES.find((quiz) => quiz.path === quizType);

    return selectedQuiz?.label || "";
  }

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        currentQuiz,
        isGameOver,
        isFinished,
        selectedOption,
        isSubmitted,
        score,
        life,
        answeredQuestions,
        setSelectedOption,
        setIsSubmitted,
        getOptionStatus,
        handleSubmitAnswer,
        handleSelectOption,
        getQuizTypeLabel,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
