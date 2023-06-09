/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
			'4xl': '2.4rem',
			'5xl': '3rem',
		},
		screens: {
			sm: '440px',
			md: '640px',
			lg: '920px',
			xl: '1140px',
			'2xl': '1400px',
		},
	},
	plugins: [],
};
