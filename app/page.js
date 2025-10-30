'use client'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
{/*import Services from "./components/Services";*/}
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    {/*<Services />*/}
    <Work />
    <Contact />
    <Footer />
    <Analytics />
    </>
  );
}
