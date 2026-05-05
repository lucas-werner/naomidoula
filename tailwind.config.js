/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b86b60",   // Bloom-500: Warm Rust/Terracotta
        accent: "#deb6af",    // Bloom-300: Lighter Rust
        background: "#fdfbf7", // Sand-50: Background Light Cream
        dark: "#5c5240",      // Sand-800: Text Dark Brown
        whatsapp: "#25D366"   // WhatsApp Green
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        drama: ['"Playfair Display"', 'serif'],
        data: ['"Lato"', 'sans-serif'],
        body: ['"Lato"', 'sans-serif']
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      }
    },
  },
  plugins: [],
}
