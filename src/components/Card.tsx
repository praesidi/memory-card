export default function Card({
	imageUrl,
	name,
	onClick,
}: {
	imageUrl: string;
	name: string;
	onClick: any;
}) {
	return (
		<div
			className='justify-self-center flex flex-col justify-end w-[140px] rounded-xl relative text-center text-2xl capitalize text-yellow-500 overflow-hidden hover:scale-105 transition-all duration-200 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]'
			onClick={() => onClick(name)}
		>
			<img src={imageUrl} alt='card image' />
			<span className='absolute w-full bg-black/50'>{name}</span>
		</div>
	);
}
