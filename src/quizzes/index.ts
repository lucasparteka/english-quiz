import { Quiz } from "@/types";
import sentenceCompletionQuizzes from "./sentences-completion";

export const QUIZ_SUMMARY: Record<string, Record<string, Quiz[]>> = {
  "sentence-completion": sentenceCompletionQuizzes,
};
