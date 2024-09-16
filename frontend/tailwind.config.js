/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{html,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				brand: 'Catalish Huntera',
				inter: '"Inter", sans-serif',
			},
			spacing: {
				brand: '7px',
				'brand-2': '14px',
				'brand-4': '28px',
				'brand-8': '56px',
				'brand-16': '112px',
				'brand-32': '224px',
			},
			borderRadius: {
				brand: '7px',
				'brand-2': '14px',
			},
			colors: {
				'color-background' : 'var(--background)',
				'color-brand-primary' : 'var(--rs-primary-500)',
				'color-brand-secondary' : 'var(--rs-primary-200)',
				'color-text-primary' : 'var(--text-primary)',
				'color-text-secondary' : 'var(--text-secondary)',
				'color-hover' : 'var(--rs-primary-700)'
			},
		},
	},
	darkMode: 'class',
  	plugins: [],
};
