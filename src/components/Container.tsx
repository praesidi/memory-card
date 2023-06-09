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
		<div
			className='grid gap-6 w-10/12 my-24
				2xl:grid-rows-3 2xl:grid-cols-6
				xl:grid-rows-4 xl:grid-cols-5
				lg:grid-rows-5 lg:grid-cols-4
				md:grid-rows-6 md:grid-cols-3
				sm:grid-rows-9 sm:grid-cols-2 '
		>
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
