import * as React from 'react';
import './style.css';

import QuestionCard from './components/QuestionCard';

import { fetchQuestions, Difficulty, QuestionState } from './API';

const TOTAL_QUESTIONS: number = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
};

const App = () => {
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);

  console.log('Started ....');

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = () => {};

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className="start">Start</button>
      <p className="score">Score:</p>
      <p>Loading questions ... </p>
      <QuestionCard
        questionNum={number + 1}
        question={questions[number].question}
        answers={questions[number].answers}
        totalQuestions={TOTAL_QUESTIONS}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next">Next question</button>
    </div>
  );
};

export default App;
