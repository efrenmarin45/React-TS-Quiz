import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { css } from "@emotion/react";
import { Difficulty, fetchQuizQuestions, QuestionState } from "./api";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from "./styles";

const TOTAL_QUESTIONS = 20;

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const spinStyle = css`
	display: block;
`;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startQuiz = async () => {
		setLoading(true);
		setGameOver(false);

		try {
			const newQuestions = await fetchQuizQuestions(
				TOTAL_QUESTIONS,
				Difficulty.EASY
			);

			setQuestions(newQuestions);
			setScore(0);
			setUserAnswers([]);
			setNumber(0);
			setTimeout(() => setLoading(false), 4000);
		} catch (err) {
			console.log("Oops, looks like I caught an error: ", err);
		}
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			//User Answer
			const answer = e.currentTarget.value;

			//Check answer against correct answer
			const correct = questions[number].correct_answer === answer;

			//Add Score if answer was correct
			if (correct) setScore((prev) => prev + 1);

			//Save answer in the array for user answers
			const answerObject = {
				question: questions[number].question,
				answer: answer,
				correct: correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

	return (
    <>
    <GlobalStyle />
		<Wrapper>
			<h1>React TS Quiz</h1>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className="start" onClick={startQuiz}>
					Start
				</button>
			) : null}
			{!gameOver ? <p className="score">Score: {score}</p> : null}
			{loading && <PacmanLoader css={spinStyle} color="blue" loading />}
			{!loading && !gameOver && (
				<QuestionCard
					questionNum={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
			!loading &&
			userAnswers.length === number + 1 &&
			number !== TOTAL_QUESTIONS - 1 ? (
				<button className="next" onClick={nextQuestion}>
					Next Question
				</button>
			) : null}
		</Wrapper>
    </>
	);
};

export default App;
