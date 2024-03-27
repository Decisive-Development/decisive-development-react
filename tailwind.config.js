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
                padding: '35px',
                screens: {
                    sm: '',
                    md: '800px',
                    lg: '1024px',
                    xl: '1350px',
                },
            },
            fontFamily: {
                default: ['Roboto Flex, sans-serif'],
                code: ['Roboto Mono, monospace'],
            },
            fontSize: {
                base: '16px',
            },
            colors:
            {
                'theme-primary': {
                    DEFAULT: '#0D161D',
                },
                'theme-secondary': {
                    DEFAULT: '#525B66',
                    background: '#232d34',
                },
                'theme-complementary': {
                    DEFAULT: '#CFD4D7',
                },
                'theme-neutral': {
                    DEFAULT: '#FFFFFC',
                },
                'theme-blue': {
                    DEFAULT: '#3E9FFF',
                },
                'theme-red': {
                    DEFAULT: '#FF4848',
                },
                'theme-green': {
                    DEFAULT: '#B9FF33',
                },
                'theme-turquoise': {
                    DEFAULT: '#48EDE8',
                },
                'theme-orange': {
                    DEFAULT: '#FF8400',
                },
                'theme-purple': {
                    DEFAULT: '#E46EED',
                },
            }
        },
    },
    plugins: [],
}
