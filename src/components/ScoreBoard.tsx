export default function ScoreBoard({
	score,
	bestScore,
}: {
	score: number;
	bestScore: number;
}) {
	return (
		<div className='flex justify-evenly w-full mt-10 text-3xl text-yellow-500 '>
			<span className='block'>Score: {score}</span>
			<span className='block'>Best Score: {bestScore}</span>
		</div>
	);
}
