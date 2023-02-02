import { Icon } from "@/components";
import { useQuiz } from "@/contexts";
import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const ANIMATION_CLASS_NAME = "animate__animated animate__headShake";

export function Life() {
  const { life } = useQuiz();

  const [animationClassName, setAnimationClassName] = useState("");

  useEffect(() => {
    if (life === 3) return;

    setAnimationClassName(ANIMATION_CLASS_NAME);

    setTimeout(() => {
      setAnimationClassName("");
    }, 1000);
  }, [life]);

  function resolveHeartClassName(index: number) {
    return classNames({
      "fill-rose-600": index < life,
    });
  }

  return (
    <div
      className={`${styles.life} ${animationClassName} ml-auto flex flex-row-reverse items-center justify-around rounded-lg h-fit py-0.5 pl-3 pr-2 w-[60px]`}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <Icon
          key={i}
          name="heartFilled"
          className={`stroke-rose-600 ${resolveHeartClassName(i)}`}
          width={18}
          height={18}
        />
      ))}
    </div>
  );
}
