import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SignUp from "../components/SignUp";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Contact />
        <SignUp />
        <Footer />
      </body>
    </html>
  );
}
