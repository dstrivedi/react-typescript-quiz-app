import * as React from 'react';
import { GlobalStyle, Wrapper } from './App.styles';

import QuestionCard from './components/QuestionCard';

import { fetchQuestions, Difficulty, QuestionState } from './API';

const TOTAL_QUESTIONS: number = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
};

export const App: React.FC = () => {
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

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user's answer
      const answer = e.currentTarget.value;

      //checking answer
      const correct = questions[number].correct_answer === answer;

      //updating score
      if (correct) {
        setScore(score + 1);
      }

      //updating answerObject and userAnswers state
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correct_answer: questions[number].correct_answer,
      };
      setUserAnswers([...userAnswers, answerObject]);
    }
  };

  const nextQuestion = () => {
    if (number === TOTAL_QUESTIONS - 1) {
      setGameOver(true);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {gameOver && (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        )}
        {!gameOver && <p className="score">Score:{score}</p>}
        {loading && <p>Loading questions ... </p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            question={questions[number].question}
            answers={questions[number].answers}
            totalQuestions={TOTAL_QUESTIONS}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!loading &&
          !gameOver &&
          number !== TOTAL_QUESTIONS - 1 &&
          userAnswers.length === number + 1 && (
            <button className="next" onClick={nextQuestion}>
              Next question
            </button>
          )}
      </Wrapper>
    </>
  );
};

// export default App;
