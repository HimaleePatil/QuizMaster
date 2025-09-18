import React, { useState } from 'react';
import { quizQuestions, QuizQuestion } from '../data/quizData';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import ScoreCard from './ScoreCard';

const QuizContainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState<string>('');

  const currentQuestion: QuizQuestion = quizQuestions[currentIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    
    if (option === currentQuestion.answer) {
      setScore(score + 1);
      setFeedback(`Great job! ${currentQuestion.explanation}`);
    } else {
      setFeedback(`Oops! The correct answer was "${currentQuestion.answer}". ${currentQuestion.explanation}`);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setFeedback('');
    
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
    setFeedback('');
  };

  if (showScore) {
    return <ScoreCard score={score} total={quizQuestions.length} onRestart={handleRestart} />;
  }

  return (
    <div className="quiz-content">
      <ProgressBar current={currentIndex} total={quizQuestions.length} />
      
      <QuestionCard
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={quizQuestions.length}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
      
      {feedback && (
        <div className={`feedback-message ${
          selectedOption === currentQuestion.answer ? 'feedback-correct' : 'feedback-incorrect'
        }`}>
          {feedback}
        </div>
      )}
      
      <div className="navigation-buttons">
        <button
          className="nav-button primary"
          onClick={handleNext}
          disabled={selectedOption === null}
        >
          {currentIndex + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default QuizContainer;
