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
                    900: '#020617',
                    800: '#0f172a',
                    700: '#1e293b',
                },
                primary: {
                    500: '#06b6d4', // Cyan accent
                    400: '#22d3ee',
                }
            }
        },
    },
    plugins: [],
}
