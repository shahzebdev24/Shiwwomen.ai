/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
            },
            colors: {
                'brand-cream': '#F4ECE3',
                'brand-gold': '#E4A607',
                'brand-light-cream': '#F9F2ED',
            }
        },
    },
    plugins: [],
}
