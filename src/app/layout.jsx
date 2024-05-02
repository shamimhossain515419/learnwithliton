import { Hind_Siliguri } from 'next/font/google';

const HindSiliguri = Hind_Siliguri({
  weight: '400',
  subsets: ['latin'],
});
import './globals.css';

import { Toaster } from 'react-hot-toast';

import Navbar from '../share/Navbar/Navbar';
import Footer from '../share/Footer/Footer';
import NextAuthProvider from '../components/AuthProvider/NextAuthProvider';
export const metadata = {
  title: 'ASIAN IT INC',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Navbar></Navbar>
          <div className=" min-h-[50vh] pt-[60px]">{children}</div>
          <Footer></Footer>
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
