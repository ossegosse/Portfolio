// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,    // Using the correct PostCSS plugin for Tailwind CSS
    autoprefixer,   // Optional but useful for adding vendor prefixes
  ],
};
