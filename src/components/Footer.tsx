export default function Footer() {
	return (
		<footer className='flex justify-center align-start p-3'>
			<p className='m-0 text-center text-xl text-yellow-500 font-medium'>
				© Made by
				<a
					className='transition-all duration-300 text-orange-500 font-bold mx-1 hover:text-orange-700'
					href='https://github.com/Praesidi'
					target='_blank'
				>
					Praesidi
				</a>
				for
				<a
					className='transition-all duration-300 text-orange-500 font-bold mx-1 hover:text-orange-700'
					href='https://www.theodinproject.com/'
					target='_blank'
				>
					The Odin Project
				</a>
			</p>
		</footer>
	);
}
