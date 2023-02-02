export type Quiz = {
  id: number;
  sentence: string;
  correctAnswer: string;
  options: string[];
};

export type QuizLevel = {
  id: number;
  label: string;
  [key: string]: any;
};

export type QuizType = {
  id: number;
  label: string;
  path: string;
  [key: string]: any;
};

export type Params = {
  params: {
    quizType: string;
    level?: string;
  };
};

export type Query = {
  quizType: string;
  level?: string;
};

export type LevelProps = {
  quizzes: Quiz[];
};

export type UseTransitionProps = {
  delay?: number;
  shouldRender: boolean;
};
