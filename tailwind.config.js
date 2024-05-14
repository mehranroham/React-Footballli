/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    fontFamily: {
      Dana: 'Dana',
      DanaRegular: 'DanaRegular',
      DanaBold: 'DanaBold',
      Morabba: 'Morabba',
      MorabbaLight: 'MorabbaLight',
      MorabbaBold: 'MorabbaBold',
      Poppins: 'Poppins',
      PoppinsMedium: 'Poppins Medium',
      PoppinsLight: 'Poppins Light',
      PoppinsThin: 'Poppins Thin',
      PoppinsSemiBold: 'Poppins SemiBold',
      PoppinsBold: 'Poppins Bold',
      PoppinsBlack: 'Poppins Black',
    },
    extend: {},
  },
  plugins: [],
};
