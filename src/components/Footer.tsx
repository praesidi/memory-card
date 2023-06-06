export default function Footer() {
	return (
		<footer className='flex justify-center align-start p-3 mt-30'>
			<p className='m-0 text-center text-xl text-yellow-500 font-medium'>
				© Made by
				<a
					className='transition-all duration-300 text-orange-500 font-bold mx-1 hover:text-2xl'
					href='https://github.com/Praesidi'
					target='_blank'
				>
					Praesidi
				</a>
				for
				<a
					className='transition-all duration-300 text-orange-500 font-bold mx-1 hover:text-2xl'
					href='https://www.theodinproject.com/'
					target='_blank'
				>
					The Odin Project
				</a>
			</p>
		</footer>
	);
}
