import { Quiz } from "@/types";

// grade 3 and 4
const PRE_INTERMEDIATE_SENTENCES_COMPLETION: Quiz[] = [
  {
    id: 1,
    sentence: "I cannot sleep because my neighborhood is very ____.",
    correctAnswer: "noisy",
    options: ["happy", "average", "fun", "noisy"],
  },
  {
    id: 2,
    sentence:
      "I wanted to ____ the race, but my friends encouraged me to ____ running.",
    correctAnswer: "quit ... continue",
    options: [
      "lose ... stop",
      "quit ... continue",
      "win ... begin",
      "watch ... start",
    ],
  },
  {
    id: 3,
    sentence:
      "My doctor said that I need more exercise, so I ____ the time I spend ____.",
    correctAnswer: "increased ... running",
    options: [
      "increased ... running",
      "continued ... eating",
      "passed ... sleeping",
      "decreased ... jogging",
    ],
  },
  {
    id: 4,
    sentence: "Alice ____ the salesman's offer because the price was ____.",
    correctAnswer: "rejected ... unfair",
    options: [
      "accepted ... high",
      "rejected ... unfair",
      "took ... expensive",
      "considered ... terrible",
    ],
  },
  {
    id: 5,
    sentence:
      "John decided not to go to school when he was ____. Instead, he rested all day to recover.",
    correctAnswer: "sick",
    options: ["young", "intelligent", "athletic", "sick"],
  },
  {
    id: 6,
    sentence:
      "Many people think rabbits love to eat carrots, but they actually ____ lettuce.",
    correctAnswer: "prefer",
    options: ["hate", "consume", "grow", "prefer"],
  },
  {
    id: 7,
    sentence: "Although it is ____ outside, Jane is not wearing a ____.",
    correctAnswer: "cold ... jacket",
    options: [
      "warm ... scarf",
      "hot ... shirt",
      "cold ... jacket",
      "cool ... hat",
    ],
  },
  {
    id: 9,
    sentence:
      "Peter was worried that he would be late for school, so he ____ out the front door.",
    correctAnswer: "ran",
    options: ["ran", "wandered", "danced", "drove"],
  },
  {
    id: 10,
    sentence:
      "Diana ____ the test to get her driver's license. She will try again tomorrow.",
    correctAnswer: "failed",
    options: ["noticed", "took", "passed", "failed"],
  },
  {
    id: 11,
    sentence: "Marta can play soccer very well. She is ____.",
    correctAnswer: "talented",
    options: ["pretty", "clumsy", "talented", "smart"],
  },
  {
    id: 12,
    sentence: "After George washed his bike, it looked very ____.",
    correctAnswer: "clean",
    options: ["terrible", "dirty", "clean", "old"],
  },
  {
    id: 13,
    sentence:
      "Snails and turtles do not move quickly. They are both ____ animals.",
    correctAnswer: "slow",
    options: ["slow", "small", "quick", "fast"],
  },
  {
    id: 14,
    sentence: "The ____ pant is too ____.",
    correctAnswer: "large ... big",
    options: [
      "wet ... rainy",
      "heavy ... small",
      "giant ... crazy",
      "large ... big",
    ],
  },
  {
    id: 15,
    sentence: "She is ____ happy because she did well on her math test.",
    correctAnswer: "happy",
    options: ["happy", "upset", "angry", "sad"],
  },
  {
    id: 16,
    sentence: "Jonathan and Lara are ____. They have the same father.",
    correctAnswer: "brothers",
    options: ["men", "women", "friends", "brothers"],
  },
  {
    id: 17,
    sentence: "The air is very ____, ans there is ____ ice on the road.",
    correctAnswer: "cold ... a lot of",
    options: [
      "cold ... a lot of",
      "warm ... a large amount of",
      "hot ... much",
      "cool ... many",
    ],
  },
  {
    id: 18,
    sentence:
      "She always arrives to class thirty minutes ____ so that she has time to prepare.",
    correctAnswer: "early",
    options: ["late", "night", "after", "early"],
  },
  {
    id: 19,
    sentence:
      "The libraries are good places to ____ because they are very ____.",
    correctAnswer: "study ... quiet",
    options: [
      "eat ... hungry",
      "read ... open",
      "talk ... amazing",
      "study ... quiet",
    ],
  },
  {
    id: 20,
    sentence:
      "At first my father did not allow me to ever play video games after launch, but now he ____ it sometimes.",
    correctAnswer: "permit",
    options: ["ban", "encourage", "permit", "block"],
  },
  {
    id: 21,
    sentence: "When you need ____ count, it is not okay to estimate.",
    correctAnswer: "an accurate",
    options: ["a guessed", "a bigger", "an accurate", "a fast"],
  },
  {
    id: 22,
    sentence:
      "Ava was excited to begin her new job, and we were impressed by how ____ she was.",
    correctAnswer: "eager",
    options: ["entertained", "experienced", "eager", "good"],
  },
  {
    id: 23,
    sentence:
      "The actress always wore a mask and ____ her face, so it was exciting to see what she looked like when she finally ____ herself.",
    correctAnswer: "hid ... revealed",
    options: [
      "covered ... concealed",
      "decorated ... cleansed",
      "hid ... revealed",
      "exposed ... disguised",
    ],
  },
  {
    id: 24,
    sentence:
      "The book's ____ was shocking, since I never thought the book would end with a major death.",
    correctAnswer: "conclusion",
    options: ["beginning", "conclusion", "impression", "section"],
  },
  {
    id: 25,
    sentence:
      "Before I knew the rules, the game seemed ______, but now it seems so ______.",
    correctAnswer: "complicated ... simple",
    options: [
      "complex ... bizarre",
      "complicated ... simple",
      "fun ... thrilling",
      "straightforward ... easy",
    ],
  },
  {
    id: 26,
    sentence: "In order to ____ her weight, Sophia decided to go on a diet.",
    correctAnswer: "reduce",
    options: ["reduce", "expand", "release", "extend"],
  },
  {
    id: 27,
    sentence:
      "In order to ____ the project, we need to finish all of the tasks it includes.",
    correctAnswer: "complete",
    options: ["assist", "complete", "prevent", "delay"],
  },
  {
    id: 28,
    sentence:
      "The coach just wanted Mia to ____ the new technique, so she was upset when Mia refused to ____ it.",
    correctAnswer: "try ... attempt",
    options: [
      "perform ... enjoy",
      "try ... attempt",
      "examine ... understand",
      "explain ... learn",
    ],
  },
  {
    id: 29,
    sentence: "Unlike hyena, which I find ugly, lions are ______.",
    correctAnswer: "attractive",
    options: ["graceful", "awful", "interesting", "attractive"],
  },
  {
    id: 30,
    sentence: "The paper is easy to cut because it is so ____.",
    correctAnswer: "thin",
    options: ["thick", "weak", "thin", "sad"],
  },
  {
    id: 31,
    sentence: "The dinner tastes ____. It was prepared by George, ____ chef.",
    correctAnswer: "great ... an excellent",
    options: [
      "great ... an excellent",
      "delicious ... a bad",
      "terrible ... a good",
      "bad ... an excellent",
    ],
  },
  {
    id: 32,
    sentence: "Amelia and Emma are ____ because they have the same mother.",
    correctAnswer: "sisters",
    options: ["sisters", "friends", "men", "customers"],
  },
  {
    id: 33,
    sentence: "After she completed the hard exercise class, Julie felt ____.",
    correctAnswer: "tired",
    options: ["angry", "strange", "old", "tired"],
  },
  {
    id: 34,
    sentence:
      "After working on it for hours, Harry finally finished the ____ puzzle. It was hard.",
    correctAnswer: "difficult",
    options: ["difficult", "easy", "clean", "dangerous"],
  },
  {
    id: 35,
    sentence: "Elephants are ____. Ants are ____.",
    correctAnswer: "huge ... tiny",
    options: [
      "big ... large",
      "small ... little",
      "tiny ... huge",
      "huge ... tiny",
    ],
  },
  {
    id: 36,
    sentence: "Johnny got very ____ because Ferdinand broke his computer.",
    correctAnswer: "upset",
    options: ["happy", "upset", "hungry", "slow"],
  },
  {
    id: 37,
    sentence:
      "Although Ronda tries to be on time for her class, she still arrives ____.",
    correctAnswer: "late",
    options: ["late", "great", "silly", "noisy"],
  },
  {
    id: 38,
    sentence: "The ____ recipe has ____ ingredients.",
    correctAnswer: "complicated ... many",
    options: [
      "bitter ... sweet",
      "difficult ... many",
      "simple ... a lot",
      "complicated ... many",
    ],
  },
  {
    id: 39,
    sentence:
      "When I said the correct answer, the teacher told me that I was ____.",
    correctAnswer: "right",
    options: ["different", "close", "bad", "right"],
  },
];

export default PRE_INTERMEDIATE_SENTENCES_COMPLETION;
