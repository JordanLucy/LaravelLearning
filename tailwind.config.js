/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/views/**/*.blade.php',    // Look for Tailwind classes in Blade views
        './resources/js/**/*.js',              // Look for Tailwind classes in JavaScript files
        './resources/css/**/*.css',            // Look for Tailwind classes in CSS files
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

