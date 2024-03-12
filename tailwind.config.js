/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
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
                'theme-primary': {
                    DEFAULT: '#0D161D',
                },
                'theme-secondary': {
                    DEFAULT: '#525B66',                    
                },
                'theme-complementary': {
                    DEFAULT: '#CFD4D7',
                },
                'theme-neutral': {
                    DEFAULT: '#FFFFFC',
                },
                'theme-blue': {
                    DEFAULT: '#52BBF6',
                },
                'theme-red': {
                    DEFAULT: '#F65E5E',
                },
                'theme-green': {
                    DEFAULT: '#A9DC73',
                },
                'theme-white': {
                    DEFAULT: '#d7dadc',
                }
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
