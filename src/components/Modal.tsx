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
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		margin: 'auto',
		position: 'absolute',
		width: '520px',
		height: '340px',
		boxSizing: 'border-box',
		padding: '20px',
		backgroundColor: 'rgba(235, 235, 235, 0.9)',
		zIndex: '999',
		boxShadow: '0 0 16px rgba(0,0,0,0.5)',
		transition: 'all 0.3s ease-out',
	} as React.CSSProperties;

	const overlayStyle = {
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		width: '100vw',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.6)',
		zIndex: '998',
		backdropFilter: 'blur(3px)',
		transition: 'all 0.3s ease-out',
	} as React.CSSProperties;

	return (
		<>
			<dialog className='clip-modal' style={modalStyle} open>
				{result === 'win' ? (
					<h1 className='text-green-600 text-4xl'>You Win!</h1>
				) : (
					<h1 className='text-red-500 text-4xl'>You Lose!</h1>
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
			<div style={overlayStyle}></div>
		</>
	);
}
