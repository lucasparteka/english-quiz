import ADVANCED_SENTENCES_COMPLETION from "./advanced";
import BASIC_SENTENCES_COMPLETION from "./basic";
import INTERMEDIATE_SENTENCES_COMPLETION from "./intermediate";
import PRE_INTERMEDIATE_SENTENCES_COMPLETION from "./pre-intermediate";

const sentenceCompletionQuizzes = {
  basic: BASIC_SENTENCES_COMPLETION,
  "pre-intermediate": PRE_INTERMEDIATE_SENTENCES_COMPLETION,
  intermediate: INTERMEDIATE_SENTENCES_COMPLETION,
  advanced: ADVANCED_SENTENCES_COMPLETION,
};

export default sentenceCompletionQuizzes;
