import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { Difficulty, fetchQuizQuestions, QuestionState } from './api';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 20;

type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string,
}

const spinStyle = css `
  display: block;
`

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    try{
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setTimeout(() => setLoading(false), 4000);

    }catch(err){
      console.log(err);
    }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return(
    <div className='App'>
      <h1>WIP React TS Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS 
      ? (<button className="start" onClick={startQuiz}>
        Start
        </button>) 
      : null}
      {!gameOver ? <p className="score">Score: </p> : null}
      {loading && <PacmanLoader css={spinStyle} color='blue' loading />}
      {/* <QuestionCard 
        questionNum={number + 1} 
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )

}

export default App;
