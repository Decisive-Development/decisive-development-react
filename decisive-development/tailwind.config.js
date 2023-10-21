/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{html,css,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '25px',
				screens: {
					sm: '600px',
					md: '728px',
					lg: '984px',
					xl: '1350px',
				},
			},
			fontFamily: {
				default: ['Roboto Flex, sans-serif'],
				code: ['Roboto Mono, monospace'],
			},
			fontSize: {
				base: '18px',
			},
			colors:
				{ 
				'theme-dark': { 
					DEFAULT: '#0f0d15',
						100: '#030304',
						200: '#060509',
						300: '#09080d',
						400: '#0d0b12',
						500: '#0f0d15',
						600: '#393251',
						700: '#63568c',
						800: '#9589b7',
						900: '#cac4db' 
				},
				 'theme-blue': { DEFAULT: '#0077b6',
				 100: '#001825',
				 200: '#003049',
				 300: '#00486e',
				 400: '#005f93',
				 500: '#0077b6',
				 600: '#00a2f9',
				 700: '#3bbaff',
				 800: '#7cd1ff',
				 900: '#bee8ff' },
				 'theme-red': { DEFAULT: '#cc2936',
				 100: '#29080b',
				 200: '#521016',
				 300: '#7b1820',
				 400: '#a4202b',
				 500: '#cc2936',
				 600: '#dc4e5a',
				 700: '#e57a83',
				 800: '#eda6ac',
				 900: '#f6d3d6' },
				 'theme-green': { DEFAULT: '#20bf55',
				 100: '#072611',
				 200: '#0d4d22',
				 300: '#147333',
				 400: '#1a9945',
				 500: '#20bf55',
				 600: '#3cde72',
				 700: '#6ce695',
				 800: '#9deeb8',
				 900: '#cef7dc' },
				 'theme-white': { DEFAULT: '#d7dadc',
				 100: '#402329',
				 200: '#804652',
				 300: '#b37582',
				 400: '#d6b5bc',
				 500: '#f9f4f5',
				 600: '#fbf7f8',
				 700: '#fcf9fa',
				 800: '#fdfbfb',
				 900: '#fefdfd' } 
				}

			// colors: {
			// 	blue: {
			// 		light: '#004F8F',
			// 		DEFAULT: '#003566',
			// 		dark: '#00223D',
			// 	},
			// 	gray: {
			// 		DEFAULT: '#7A8B99',
			// 		dark: '#23292E',
			// 	},
			// 	yellow: {
			// 		DEFAULT: '#FCBA04',
			// 	},
			// 	red: {
			// 		DEFAULT: '#C20114',
			// 	},
			// 	green: {
			// 		DEFAULT: '#248232',
			// 	}
			// },
		},
	},
	plugins: [],
}

