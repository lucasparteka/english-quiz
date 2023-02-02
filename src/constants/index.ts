import { QuizType } from "@/types";

export const QUIZ_TYPES: QuizType[] = [
  {
    id: 1,
    label: "Sentence completion",
    path: "sentence-completion",
  },
  {
    id: 2,
    label: "Word definition",
    path: "word-definition",
  },
  {
    id: 3,
    label: "Verb tenses",
    path: "verb-tenses",
  },
];

export const QUIZ_LEVELS = [
  {
    id: 1,
    label: "Basic",
    path: "basic",
  },
  {
    id: 2,
    label: "Pre-Intermediate",
    path: "pre-intermediate",
  },
  {
    id: 3,
    label: "Intermediate",
    path: "intermediate",
  },
  {
    id: 4,
    label: "Advanced",
    path: "advanced",
  },
];
