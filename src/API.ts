export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
  const result = await fetch(url, { cache: 'force-cache' })
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((question: Question) => ({
        ...question,
        answers: [...question.incorrect_answers, question.correct_answer],
      }));
    })
    .catch((error) => console.log(error));
  return result;
};
