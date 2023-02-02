import { Quiz } from "@/types";

const BASIC_SENTENCES_COMPLETION: Quiz[] = [
  {
    id: 1,
    sentence: "Yellow is a ____",
    correctAnswer: "color",
    options: ["city", "number", "color", "object"],
  },
  {
    id: 2,
    sentence: "Brazil is a ____",
    correctAnswer: "country",
    options: ["country", "city", "street", "sport"],
  },
  {
    id: 3,
    sentence: "English is a ____",
    correctAnswer: "language",
    options: ["sport", "number", "drink", "language"],
  },
  {
    id: 4,
    sentence: "Five is a ____",
    correctAnswer: "number",
    options: ["man", "number", "sport", "food"],
  },
  {
    id: 5,
    sentence: "A cat is ____",
    correctAnswer: "an animal",
    options: ["a color", "an animal", "a city", "a country"],
  },
  {
    id: 6,
    sentence: "Baseball is a ____.",
    correctAnswer: "sport",
    options: ["month", "car", "fruit", "sport"],
  },
  {
    id: 7,
    sentence: "Black is a ____.",
    correctAnswer: "color",
    options: ["day of the week", "place", "color", "fruit"],
  },
  {
    id: 8,
    sentence: "Monday is a ____.",
    correctAnswer: "day of the week",
    options: ["street", "an animal", "day of the week", "fruit"],
  },
  {
    id: 9,
    sentence: "Mrs. Gilly is a ____.",
    correctAnswer: "woman",
    options: ["number", "woman", "country", "street"],
  },
  {
    id: 10,
    sentence: "Silver is a ___.",
    correctAnswer: "metal",
    options: ["metal", "number", "month", "fruit"],
  },
  {
    id: 11,
    sentence: "Blue and pink are ____.",
    correctAnswer: "colors",
    options: ["songs", "person", "colors", "vegetables"],
  },
  {
    id: 12,
    sentence: "Two and eleven are ____.",
    correctAnswer: "numbers",
    options: ["letters", "countries", "sports", "numbers"],
  },
  {
    id: 13,
    sentence: "Potatoes and onions are ____.",
    correctAnswer: "vegetables",
    options: ["cities", "streets", "vegetables", "songs"],
  },
  {
    id: 14,
    sentence: "Cats and dogs are ____.",
    correctAnswer: "pets",
    options: ["pets", "fruits", "vegetables", "colors"],
  },
];

export default BASIC_SENTENCES_COMPLETION;
