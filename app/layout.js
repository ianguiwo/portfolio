import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Ian Guiwo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Tailwind CDN (only needed if Tailwind isn't built in) */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.14/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-blue-50`}
      >
        {children}
      </body>
    </html>
  );
}
