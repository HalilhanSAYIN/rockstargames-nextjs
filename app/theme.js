'use client';
import { createTheme } from '@mui/material/styles';
import localFont from "next/font/local"
import { Open_Sans } from 'next/font/google'
 
const openSans = Open_Sans({
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
    fontFamily: openSans.style.fontFamily,
    
  },
  
  secondaryFont : {
    fontFamily : myFont.style.fontFamily
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
