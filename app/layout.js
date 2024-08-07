import { Inter } from "next/font/google";
import "./globals.css";
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import '@/components/Header/HeaderComponent'
import '@/components/Footer/FooterComponent'
import Header from "@/components/Header/HeaderComponent";
import Footer from "@/components/Footer/FooterComponent";


export const metadata = {
  title: "Best Rockstar Games",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
              <Header/>
              <main>{children}</main>
              <Footer/>
          </ThemeProvider>
       </AppRouterCacheProvider>
        </body>
    </html>
  );
}
