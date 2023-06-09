import { useEffect, useRef } from 'react';

export default function Modal({
	result,
	isOpen,
	onRestart,
}: {
	result: string;
	isOpen: boolean;
	onRestart: any;
}) {
	const modalStyle = {
		pointerEvents: isOpen ? 'auto' : 'none',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		position: 'fixed',
		top: '50%',
		left: '50%',
		// transform: isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)',
		transform: 'translate(-50%, -50%)',
		width: '520px',
		height: '340px',
		boxSizing: 'border-box',
		padding: '20px',
		backgroundColor: 'rgba(235, 235, 235, 0.97)',
		zIndex: '999',
		boxShadow: '0 0 16px rgba(0,0,0,0.5)',
		transition: 'all 0.3s ease-out',
	};

	return (
		<dialog className='clip-modal' style={modalStyle} open>
			{result === 'win' ? (
				<h1 className='text-green-600 text-4xl'>You Won!</h1>
			) : (
				<h1 className='text-red-500 text-4xl'>You Lost!</h1>
			)}
			<button
				className='text-yellow-500 text-2xl py-3 px-4 uppercase bg-[#4d330a] 
				hover:scale-105 transition-all duration-200 hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.3)]
				active:scale-100 clip-button'
				onClick={onRestart}
			>
				restart
			</button>
		</dialog>
	);
}
