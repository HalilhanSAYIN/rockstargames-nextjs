'use client';
import { createTheme } from '@mui/material/styles';
import localFont from "next/font/local"
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const myFont = localFont({
  src: [
    {
      path: '../fonts/pricedownbltiny.otf',
      weight: '200',
      style: 'normal',
    },
    
    {
      path: '../fonts/pricedownbl.otf',
      weight: '400',
      style: 'normal',
    },
    
  ],
})


const theme = createTheme({
  typography: {
    fontFamily: myFont.style.fontFamily,
    header: {
      fontFamily: 'Roboto, sans-serif',
    },
    footer: {
      fontFamily: 'Roboto, sans-serif',
    },
  },
  secondaryFont : {
    fontFamily : roboto.style.fontFamily
  },
  palette: {
    primary: {
      main: '#0F044C',
    },
    secondary: {
      main: '#EEEEEE', 
    },
    background: {
      default: '#141E61',
    },
    
  },
    
});

export default theme;
