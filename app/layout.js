import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'

import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


