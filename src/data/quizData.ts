export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris",
    explanation: "Paris has been the capital of France since 987 AD!"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    explanation: "Mars appears red due to iron oxide (rust) on its surface."
  },
  {
    id: 3,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Mark Twain", "Jane Austen", "Charles Dickens"],
    answer: "William Shakespeare",
    explanation: "Shakespeare wrote this famous tragedy between 1591-1595."
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    explanation: "The Pacific Ocean covers about 63 million square miles!"
  },
  {
    id: 5,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    answer: "Oxygen",
    explanation: "Oxygen is essential for most life forms on Earth."
  }
];
