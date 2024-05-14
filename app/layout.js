import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SignUp from "@/components/SignUp";
import StickyCart from "@/components/Cart/stickyCart.jsx";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Graham Collective",
  description:
    "Joshua Tree Airbnb, Vacation Rental, best joshua tree airbnb, shop fine art, emerging artists, Vacation Rental, contextualized artwork, fine art, the graham residence, graham residence airbnb, vacation rental yucca valley, high desert airbnb, mid century, mid century modern airbnb, sophie lou jacobsen, atelier saucier, westbourne, loll designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M4X900NBP2"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-M4X900NBP2');
        </script> */}
        <link rel="shortcut icon" href="./images/favicon_io/icon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./images/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./images/favicon_io/favicon-16x16.png"
        />
        <link
          rel="preload"
          href="../fonts/Josefin_Sans/static/JosefinSans-ExtraLight.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale:1, user-scalable=no"
        />
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
      <GoogleAnalytics gaId="G-M4X900NBP2" />
      <Script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RWhpnR" />
    </html>
  );
}
