/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#185adb', dark: '#123e9e', soft: 'rgba(24,90,219,.08)' },
        navy: '#14213d',
        amber: { DEFAULT: '#f59e0b', dark: '#b8760a' },
        ink: '#0f172a',
        slate: { DEFAULT: '#64748b' },
        line: '#e2e8f0',
        tint: '#f8fafc',
      },
      fontFamily: { sans: ['"Noto Sans"', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'] },
      boxShadow: {
        md2: '0 10px 30px rgba(20,33,61,.10)',
        lg2: '0 24px 60px rgba(20,33,61,.16)',
      },
    },
  },
  plugins: [],
}
