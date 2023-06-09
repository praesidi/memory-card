import { useState } from 'react';
import Container from './Container';
import ScoreBoard from './ScoreBoard';
import Modal from './Modal.js';
import images from '../assets/images/index.js';

export default function Body() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [result, setResult] = useState('');
	const [selectedCards, setSelectedCards] = useState<string[]>([]);

	function isBestScore() {
		if (bestScore <= score) {
			setBestScore((score) => score + 1);
		}
	}

	function handleRestart() {
		setScore(0);
		setResult('');
		setSelectedCards([]);
		setIsModalOpened(false);
	}

	function handleClick(id: string) {
		if (score + 1 === Object.keys(images).length) {
			setResult(() => 'win');
			setIsModalOpened(() => true);
		}

		if (selectedCards.includes(id)) {
			setResult(() => 'lose');
			setIsModalOpened(() => true);
		} else {
			setSelectedCards([...selectedCards, id]);
			setScore(score + 1);
			isBestScore();
		}
	}

	return (
		<>
			<main className='relative flex flex-col justify-start items-center w-full max-w-screen-2xl p-0 m-0'>
				<ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
				<Container images={images} onClick={handleClick}></Container>
			</main>
			{isModalOpened ? (
				<Modal
					onRestart={handleRestart}
					isOpen={isModalOpened}
					result={result}
				></Modal>
			) : null}
		</>
	);
}
