import { useQuiz } from "@/contexts";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Transition } from "./types";

const PREFIX_CLASS_NAME = "animate__animated animate__slow ";
const TRANSITION_CLASS_NAME_INCREASE =
  PREFIX_CLASS_NAME + "animate__fadeInUp text-green-600 top-1";
const TRANSITION_CLASS_NAME_DECREASE =
  PREFIX_CLASS_NAME + "animate__fadeOutDown text-rose-500 top-3";

const increaseTransition = {
  label: "+10",
  class: TRANSITION_CLASS_NAME_INCREASE,
  containerClass: "increase-animation",
};

const decreaseTransition = {
  label: "-10",
  class: TRANSITION_CLASS_NAME_DECREASE,
  containerClass: "decrease-animation",
};

export function Score() {
  const { score } = useQuiz();

  const currentScore = useRef<number | null>(null);
  const [transition, setTransition] = useState<Transition | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setTransition(null);
    }, 1000);
  }, [transition]);

  useEffect(() => {
    if (currentScore.current === null) {
      currentScore.current = score;
      return;
    }

    if (score > currentScore.current) {
      setTransition(increaseTransition);
      currentScore.current = score;
    }

    if (score < currentScore.current && currentScore.current > 0) {
      setTransition(decreaseTransition);
      currentScore.current = score;
    }
  }, [score]);

  function renderScoreAnimation() {
    if (!transition) return null;

    return (
      <span className={`absolute text-sm left-0 ${transition.class}`}>
        {transition.label}
      </span>
    );
  }

  return (
    <div
      className={`
        rounded-lg 
        flex 
        font-semibold 
        relative 
        items-center 
        justify-center 
        w-min py-1 px-2 
        first-letter
        ${styles.score}
        ${transition?.containerClass}
      `}
    >
      {renderScoreAnimation()}
      <span className=" text-sm pr-1 leading-none">{score}</span>
      <span className=" text-xs leading-none">pts</span>
    </div>
  );
}
