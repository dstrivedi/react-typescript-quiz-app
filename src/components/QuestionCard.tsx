import * as React from 'react';

import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((ans, index) => (
          <ButtonWrapper key={index} correct={userAnswer?.correct_answer === ans} userClicked={userAnswer?.answer === ans}>
            <button
              disabled={userAnswer ? true : false}
              onClick={callback}
              value={ans}
            >
              <span dangerouslySetInnerHTML={{ __html: ans }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
