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
				'spacing' : 'var(--spacing)',
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
				'outer-border': 'var(--outer-border)',
				'inner-border': 'var(--inner-border)'
			},
			colors: {
				'color-bg' : 'var(--background)',
				'color-bg-surface' : 'var(--background-surface)',
				'color-border' : 'var(--rs-primary-700)',
				'color-fill-primary' : 'var(--rs-primary-500)',
				'color-fill-secondary' : 'var(--rs-primary-200)',
				'color-fill-low-contrast': 'var(--rs-primary-300)',
				'color-text-primary' : 'var(--text-primary)',
				'color-text-secondary' : 'var(--text-secondary)',
				'color-bg-surface-hover' : 'var(--rs-primary-700)'
			},
		},
	},
	darkMode: 'class',
  	plugins: [],
};
