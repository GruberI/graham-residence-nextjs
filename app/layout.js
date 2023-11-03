import './globals.css'
import { Inter } from 'next/font/google'
import Navbar2 from '../components/Navbar2'
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar2 />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


