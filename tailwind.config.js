/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#ea580c',
        'brand-dark': '#0a0a0a',
        'brand-gray': '#161616',
        'brand-light-gray': '#2a2a2a',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg':
          "linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.3) 100%), url('https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1920&auto=format&fit=crop')",
        'asphalt':
          "url('https://www.transparenttextures.com/patterns/asphalt-pattern.png')",
      },
      boxShadow: {
        'orange-glow': '0 0 25px rgba(234, 88, 12, 0.6)',
        'orange-soft': '0 0 15px rgba(234, 88, 12, 0.2)',
      },
    },
  },
  plugins: [],
};
