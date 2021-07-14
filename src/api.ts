import { shuffleArr } from "./utils";

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=15&type=multiple`;
	const data = await (await fetch(endpoint)).json(); //await to fetch then await to convert to json
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArr([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
