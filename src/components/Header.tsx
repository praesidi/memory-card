import logo from '../assets/logo.png';

export default function Header() {
	return (
		<header className='mt-3'>
			<img src={logo} alt='logo' style={{ height: '80px' }} />
		</header>
	);
}
