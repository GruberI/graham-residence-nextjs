import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SignUp from "../components/SignUp";
import StickyCart from "../components/Cart/stickyCart.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="./images/favicon_io/icon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon_io/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon_io/favicon-16x16.png"/>
      </head>
      <body className={`${inter.children}`}>
        <div className="relative fixed">
          <StickyCart />
          <Navbar />
        </div>
        <main>{children}</main>
        <SignUp />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
