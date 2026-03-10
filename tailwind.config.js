/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            colors: {
                dark: {
                    900: '#121212',
                    800: '#1A1A1A',
                    700: '#2A2A2A',
                },
                primary: {
                    500: '#3B82F6', // Blue as primary accent
                    400: '#60A5FA',
                }
            }
        },
    },
    plugins: [],
}
