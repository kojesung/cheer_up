/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                customHeavyOrange: 'rgba(255, 109, 55, 1)',
                customLightOrange: 'rgba(255, 130, 80, 1)',
            },
        },
    },
    plugins: [],
};
