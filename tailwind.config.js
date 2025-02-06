module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React components ke path
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors (optional)
        primary: '#FF6347', // Tomato Red as an example
      },
      fontFamily: {
        // Custom fonts (optional)
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
