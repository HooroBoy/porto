/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'card-bg': '#0f0f12',
        'accent-purple': '#8b5cf6', // Warna ungu utama
        'muted-text': '#a1a1aa',
      },
    },
  },
  plugins: [],
}