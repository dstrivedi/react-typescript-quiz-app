import React from "react";

type Props = {
    score: number;
    totalQuestions: number;
}

const ScoreBoard:React.FC<Props> = ({score, totalQuestions}) => {
    return (
        <div><h3>Your score is {score}/{totalQuestions}.</h3></div>
    )
}

export default ScoreBoard;