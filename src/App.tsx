import React from 'react';
import QuizContainer from './components/QuizContainer';
import './styles/quizStyles.css';

const App: React.FC = () => {
  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1 className="quiz-title">Friendly Quiz Master</h1>
        <p className="quiz-subtitle">Test your knowledge with our friendly quiz!</p>
      </header>
      
      <QuizContainer />
    </div>
  );
};

export default App;
