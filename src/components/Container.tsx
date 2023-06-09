import Card from './Card';

export default function Container({
	images,
	onClick,
}: {
	images: any;
	onClick: any;
}) {
	const imageKeys = Object.keys(images).sort(() => Math.random() - 0.5);

	return (
		<div className='grid grid-rows-3 grid-cols-6 gap-6 w-10/12 my-24'>
			{imageKeys.map((key) => (
				<Card
					key={key}
					imageUrl={images[key]}
					name={key}
					onClick={onClick}
				></Card>
			))}
		</div>
	);
}
