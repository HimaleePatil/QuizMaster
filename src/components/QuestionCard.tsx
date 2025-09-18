import React from 'react';
import { QuizQuestion } from '../data/quizData';

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedOption: string | null;
  onOptionSelect: (option: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onOptionSelect
}) => {
  return (
    <div className="question-card">
      <div className="question-count">
        Question {questionNumber} of {totalQuestions}
      </div>
      
      <h3 className="question-text">{question.question}</h3>
      
      <div className="options-container">
        {question.options.map((option) => (
          <button
            key={option}
            className={`option-button ${
              selectedOption === option
                ? option === question.answer
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
            onClick={() => onOptionSelect(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
