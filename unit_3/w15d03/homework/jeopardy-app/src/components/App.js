import React, { useState } from 'react';

export default function App(props) {
	const [score, setScore] = useState(0); //score variable starting at 0
	const [question, setQuestion] = useState(''); //question variable starting with an empty string
	const [category, setCategory] = useState(''); //category variable starting with an empty string
	const [answer, setAnswer] = useState(false); //answer variable starting with false because if theres no question you wont lose points anyway

	const url = 'http://jservice.io/api/random'; //URL we are pulling data from

	const questionAnswer = () => {
		answered ? setAnswer(false) : setAnswer(true); //variable for answering the question
	};

	return (
		<div className="app-background">
			<div className="main-container">
				<h1 id="greeting">Welcome To Jeopardy!</h1>
				<h2 id="score">
					{''}
					<span id="score-title">Score:</span>
					{score}
				</h2>
				<div className="scorebaord">
					<button
						type="button"
						className="decrease"
						onClick={() => setScore(score - question.value)}
					>
						-
					</button>
					<button
						type="button"
						className="increase"
						onClick={() => setScore(score + question.value)}
					>
						+
					</button>
					<button type="button" className="reset" onClick={() => setScore(0)}>
						Reset
					</button>
					<div className="question">
						<h3>Your Answer is: </h3>
						{/* <button id="get question" onClick={}></button> */}
						{/* we need to fetch the data through the url but i was unable to find a way to do that in the form of seperating the question/answers/and categories*/}
					</div>
				</div>
			</div>
		</div>
	);
}
