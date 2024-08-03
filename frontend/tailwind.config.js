/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{html,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				brand: 'Catalish Huntera',
				inter: '"Inter", sans-serif',
			},
			colors: {
				brand: {
					50: '#ECF8F1',
					100: '#D6F0E0',
					200: '#B1E2C5',
					300: '#88D3A6',
					400: '#63C58A',
					500: '#41B06E',
					600: '#348E58',
					700: '#266841',
					800: '#1A472C',
					900: '#0C2215',
					950: '#07130C',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
