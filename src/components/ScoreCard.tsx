import React from 'react';

interface ScoreCardProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a quiz master!";
    if (percentage >= 70) return "Great job! You know your stuff!";
    if (percentage >= 50) return "Good effort! Keep learning!";
    return "Nice try! Practice makes perfect!";
  };

  return (
    <div className="score-container">
      <h2 className="score-title">Quiz Completed!</h2>
      
      <div className="score-result">
        {score} / {total}
      </div>
      
      <p className="score-message">
        {getScoreMessage()} You scored {percentage}%.
      </p>
      
      <button 
        className="nav-button primary"
        onClick={onRestart}
      >
        Try Again
      </button>
    </div>
  );
};

export default ScoreCard;
